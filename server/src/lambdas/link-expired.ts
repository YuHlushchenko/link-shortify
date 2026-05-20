import { DynamoDBStreamEvent } from "aws-lambda";
import { NotificationsRepository } from "../repositories/notifications.repository";
import { NotificationsService } from "../services/notifications.service";
import { createLayerLogger } from "../common/logger";
import { LogLayer } from "../common/types";

const logger = createLayerLogger(LogLayer.LAMBDA);

const notificationsService = new NotificationsService(
  new NotificationsRepository(),
);

enum StreamEventName {
  INSERT = "INSERT",
  MODIFY = "MODIFY",
  REMOVE = "REMOVE",
}

const TTL_PRINCIPAL_ID = "dynamodb.amazonaws.com";

export const handler = async (event: DynamoDBStreamEvent): Promise<void> => {
  const expiredLinks = event.Records.filter(
    (record) =>
      record.eventName === StreamEventName.REMOVE &&
      record.userIdentity?.principalId === TTL_PRINCIPAL_ID &&
      record.dynamodb?.OldImage?.SK?.S === "LINK",
  );

  if (expiredLinks.length === 0) return;

  logger.info({ text: "processing expired links", count: expiredLinks.length });

  const results = await Promise.allSettled(
    expiredLinks.map((record) => {
      const slug = record.dynamodb?.OldImage?.PK?.S;
      const userId = record.dynamodb?.OldImage?.userId?.S;

      if (!slug || !userId) {
        logger.warn({
          text: "expired link record missing slug or userId",
          record,
        });
        return Promise.resolve();
      }

      return notificationsService.createExpiredLinkNotification(userId, slug);
    }),
  );

  results.forEach((result, index) => {
    if (result.status === "rejected") {
      const record = expiredLinks[index];
      logger.error({
        text: "failed to create expiry notification",
        slug: record.dynamodb?.OldImage?.PK?.S,
        error: result.reason?.message ?? result.reason,
      });
    }
  });
};

import { NotificationsRepository } from "../repositories/notifications.repository";
import { NotificationsService } from "../services/notifications.service";
import { createHandler } from "../common/middleware";
import { createLayerLogger } from "../common/logger";
import { LogLayer } from "../common/types";

const logger = createLayerLogger(LogLayer.LAMBDA);

const notificationsService = new NotificationsService(
  new NotificationsRepository(),
);

export const handler = createHandler(async (event) => {
  const userId = event.requestContext.authorizer.jwt.claims.sub as string;
  const notificationId = event.pathParameters?.notificationId ?? "";

  await notificationsService.markNotificationRead(userId, notificationId);

  logger.info({
    text: "PATCH /notifications/:notificationId",
    userId,
    notificationId,
  });

  return {
    statusCode: 200,
    body: { notificationId, isRead: true },
  };
});

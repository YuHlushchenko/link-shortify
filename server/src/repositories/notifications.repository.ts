import { PutCommand, QueryCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { ConditionalCheckFailedException } from "@aws-sdk/client-dynamodb";
import createHttpError from "http-errors";
import { docClient, LINKS_TABLE_NAME } from "../common/db";
import { createLayerLogger } from "../common/logger";
import { LogLayer } from "../common/types";

const logger = createLayerLogger(LogLayer.REPOSITORY);

const PAGE_LIMIT = parseInt(process.env.PAGE_LIMIT ?? "20", 10);

export interface NotificationItem {
  PK: string; // userId
  SK: string; // NOTIFICATION#createdAt
  notificationId: string;
  message: string;
  isRead: boolean;
  createdAt: number;
}

export interface PaginatedNotifications {
  items: NotificationItem[];
  nextCursor?: string;
}

export interface CreateNotificationInput {
  userId: string;
  notificationId: string;
  message: string;
  createdAt: number;
}

export interface GetNotificationsInput {
  userId: string;
  unreadOnly?: boolean;
  cursor?: string;
}

export class NotificationsRepository {
  async create(input: CreateNotificationInput): Promise<void> {
    await docClient.send(
      new PutCommand({
        TableName: LINKS_TABLE_NAME,
        Item: {
          PK: input.userId,
          // millisecond precision in SK prevents collisions when multiple links expire simultaneously
          SK: `NOTIFICATION#${Date.now()}`,
          notificationId: input.notificationId,
          message: input.message,
          isRead: false,
          createdAt: input.createdAt,
        },
      }),
    );

    logger.info({
      text: "notification created",
      userId: input.userId,
      notificationId: input.notificationId,
    });
  }

  async getAllByUser({
    userId,
    unreadOnly,
    cursor,
  }: GetNotificationsInput): Promise<PaginatedNotifications> {
    const values: Record<string, unknown> = {
      ":userId": userId,
      ":prefix": "NOTIFICATION#",
    };
    if (unreadOnly) values[":isRead"] = false;

    const result = await docClient.send(
      new QueryCommand({
        TableName: LINKS_TABLE_NAME,
        KeyConditionExpression: "PK = :userId AND begins_with(SK, :prefix)",
        ExpressionAttributeValues: values,
        FilterExpression: unreadOnly ? "isRead = :isRead" : undefined,
        ScanIndexForward: false, // newest first
        Limit: PAGE_LIMIT,
        ExclusiveStartKey: cursor ? decodeCursor(cursor) : undefined,
      }),
    );

    logger.info({
      text: "getAllByUser notifications",
      userId,
      count: result.Items?.length ?? 0,
    });

    return {
      items: (result.Items ?? []) as NotificationItem[],
      nextCursor: result.LastEvaluatedKey
        ? encodeCursor(result.LastEvaluatedKey)
        : undefined,
    };
  }

  async markAsRead(userId: string, sk: string): Promise<void> {
    try {
      await docClient.send(
        new UpdateCommand({
          TableName: LINKS_TABLE_NAME,
          Key: { PK: userId, SK: sk },
          UpdateExpression: "SET isRead = :isRead",
          ExpressionAttributeValues: { ":isRead": true },
          ConditionExpression: "attribute_exists(PK)",
        }),
      );
    } catch (err) {
      if (err instanceof ConditionalCheckFailedException) {
        throw createHttpError.NotFound("Notification not found");
      }
      throw err;
    }
  }

  async getByNotificationId(
    userId: string,
    notificationId: string,
  ): Promise<NotificationItem | null> {
    const result = await docClient.send(
      new QueryCommand({
        TableName: LINKS_TABLE_NAME,
        KeyConditionExpression: "PK = :userId AND begins_with(SK, :prefix)",
        FilterExpression: "notificationId = :notificationId",
        ExpressionAttributeValues: {
          ":userId": userId,
          ":prefix": "NOTIFICATION#",
          ":notificationId": notificationId,
        },
      }),
    );

    return (result.Items?.[0] as NotificationItem) ?? null;
  }

  async markAllAsRead(userId: string): Promise<void> {
    const allUnread: NotificationItem[] = [];
    let cursor: string | undefined;

    do {
      const page = await this.getAllByUser({
        userId,
        unreadOnly: true,
        cursor,
      });
      allUnread.push(...page.items);
      cursor = page.nextCursor;
    } while (cursor);

    if (allUnread.length === 0) return;

    const results = await Promise.allSettled(
      allUnread.map((n) => this.markAsRead(userId, n.SK)),
    );

    let failed: NotificationItem[] = [];
    results.forEach((result, index) => {
      if (result.status === "rejected") {
        failed.push(allUnread[index]);
        logger.error({
          text: "Failed to mark notification as read",
          sk: allUnread[index].SK,
          error: result.reason?.message || result.reason,
        });
      }
    });

    for (let retry = 1; retry <= 2; retry++) {
      if (failed.length === 0) break;

      await new Promise((resolve) => setTimeout(resolve, 500 * retry));

      const retryResults = await Promise.allSettled(
        failed.map((n) => this.markAsRead(userId, n.SK)),
      );
      const stillFailed: NotificationItem[] = [];

      retryResults.forEach((result, i) => {
        if (result.status === "fulfilled") {
          logger.info({
            text: "markAsRead retry succeeded",
            retry,
            sk: failed[i].SK,
          });
        } else {
          stillFailed.push(failed[i]);
          logger.error({
            text: "markAsRead retry failed",
            retry,
            sk: failed[i].SK,
            error: result.reason?.message || result.reason,
          });
        }
      });

      failed = stillFailed;
    }

    if (failed.length > 0) {
      logger.error({
        text: "Some notifications failed to mark as read after all retries",
        failedCount: failed.length,
      });
    }
  }
}

function encodeCursor(key: Record<string, unknown>): string {
  return Buffer.from(JSON.stringify(key)).toString("base64");
}

function decodeCursor(cursor: string): Record<string, unknown> {
  try {
    return JSON.parse(Buffer.from(cursor, "base64").toString("utf-8"));
  } catch {
    throw createHttpError.BadRequest("Invalid cursor");
  }
}

import {
  GetCommand,
  PutCommand,
  QueryCommand,
  UpdateCommand,
  TransactWriteCommand,
} from "@aws-sdk/lib-dynamodb";
import { ConditionalCheckFailedException } from "@aws-sdk/client-dynamodb";
import createHttpError from "http-errors";
import { docClient, LINKS_TABLE_NAME } from "../common/db";
import { createLayerLogger } from "../common/logger";
import { LogLayer } from "../common/types";

const logger = createLayerLogger(LogLayer.REPOSITORY);

const PAGE_LIMIT = 20;

export type LinkStatus = "active" | "inactive" | "deleted" | "expired";

export interface LinkItem {
  PK: string; // slug
  SK: "LINK";
  userId: string;
  originalUrl: string;
  status: LinkStatus;
  createdAt: number;
  updatedAt: number;
  expiresAt?: number;
  clickCount: number;
}

export interface PaginatedLinks {
  items: LinkItem[];
  nextCursor?: string;
}

export interface CreateLinkInput {
  slug: string;
  userId: string;
  originalUrl: string;
  status: LinkStatus;
  createdAt: number;
  updatedAt: number;
  expiresAt?: number;
}

export interface UpdateLinkInput {
  status?: LinkStatus;
  // null = remove expiration
  expiresAt?: number | null;
}

export interface GetAllLinksInput {
  userId: string;
  sortBy?: "createdAt" | "clickCount";
  order?: "asc" | "desc";
  status?: LinkStatus;
  cursor?: string;
}

export class LinksRepository {
  async getAll({
    userId,
    sortBy = "createdAt",
    order = "desc",
    status,
    cursor,
  }: GetAllLinksInput): Promise<PaginatedLinks> {
    const indexName = sortBy === "clickCount" ? "GSI2" : "GSI1";

    const expressionValues: Record<string, unknown> = { ":userId": userId };
    let filterExpression: string;

    if (status) {
      expressionValues[":status"] = status;
      filterExpression = "#status = :status";
    } else {
      expressionValues[":deleted"] = "deleted";
      filterExpression = "#status <> :deleted";
    }

    const result = await docClient.send(
      new QueryCommand({
        TableName: LINKS_TABLE_NAME,
        IndexName: indexName,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: expressionValues,
        FilterExpression: filterExpression,
        ExpressionAttributeNames: { "#status": "status" },
        ScanIndexForward: order === "asc",
        Limit: PAGE_LIMIT,
        ExclusiveStartKey: cursor ? decodeCursor(cursor) : undefined,
      }),
    );

    logger.info({
      text: "getAll links",
      userId,
      count: result.Items?.length ?? 0,
    });

    return {
      items: (result.Items ?? []) as LinkItem[],
      nextCursor: result.LastEvaluatedKey
        ? encodeCursor(result.LastEvaluatedKey)
        : undefined,
    };
  }

  async getBySlug(slug: string): Promise<LinkItem | null> {
    const result = await docClient.send(
      new GetCommand({
        TableName: LINKS_TABLE_NAME,
        Key: { PK: slug, SK: "LINK" },
      }),
    );

    return (result.Item as LinkItem) ?? null;
  }

  async create(input: CreateLinkInput): Promise<void> {
    try {
      await docClient.send(
        new PutCommand({
          TableName: LINKS_TABLE_NAME,
          Item: {
            PK: input.slug,
            SK: "LINK",
            userId: input.userId,
            originalUrl: input.originalUrl,
            status: input.status,
            createdAt: input.createdAt,
            updatedAt: input.updatedAt,
            clickCount: 0,
            ...(input.expiresAt !== undefined
              ? { expiresAt: input.expiresAt }
              : {}),
          },
          ConditionExpression: "attribute_not_exists(PK)",
        }),
      );
    } catch (err) {
      if (err instanceof ConditionalCheckFailedException) {
        throw createHttpError.Conflict("Slug already exists");
      }
      throw err;
    }
  }

  async update(slug: string, input: UpdateLinkInput): Promise<void> {
    const now = Math.floor(Date.now() / 1000);

    const sets: string[] = ["updatedAt = :updatedAt"];
    const removes: string[] = [];
    const values: Record<string, unknown> = { ":updatedAt": now };
    const names: Record<string, string> = {};

    if (input.status !== undefined) {
      sets.push("#status = :status");
      values[":status"] = input.status;
      names["#status"] = "status";
    }

    if (input.expiresAt === null) {
      removes.push("expiresAt");
    } else if (input.expiresAt !== undefined) {
      sets.push("expiresAt = :expiresAt");
      values[":expiresAt"] = input.expiresAt;
    }

    let UpdateExpression = `SET ${sets.join(", ")}`;
    if (removes.length > 0) UpdateExpression += ` REMOVE ${removes.join(", ")}`;

    await docClient.send(
      new UpdateCommand({
        TableName: LINKS_TABLE_NAME,
        Key: { PK: slug, SK: "LINK" },
        UpdateExpression,
        ExpressionAttributeValues: values,
        ExpressionAttributeNames:
          Object.keys(names).length > 0 ? names : undefined,
      }),
    );
  }

  async deleteOne(slug: string): Promise<void> {
    await this.update(slug, { status: "deleted" });
  }

  async bulkDelete(slugs: string[]): Promise<void> {
    const now = Math.floor(Date.now() / 1000);

    // TransactWrite limit is 100 items
    for (let i = 0; i < slugs.length; i += 100) {
      const chunk = slugs.slice(i, i + 100);
      await docClient.send(
        new TransactWriteCommand({
          TransactItems: chunk.map((slug) => ({
            Update: {
              TableName: LINKS_TABLE_NAME,
              Key: { PK: slug, SK: "LINK" },
              UpdateExpression: "SET #status = :status, updatedAt = :updatedAt",
              ExpressionAttributeNames: { "#status": "status" },
              ExpressionAttributeValues: {
                ":status": "deleted",
                ":updatedAt": now,
              },
            },
          })),
        }),
      );
    }
  }

  async incrementClickCount(slug: string): Promise<void> {
    await docClient.send(
      new UpdateCommand({
        TableName: LINKS_TABLE_NAME,
        Key: { PK: slug, SK: "LINK" },
        UpdateExpression: "ADD clickCount :one",
        ExpressionAttributeValues: { ":one": 1 },
      }),
    );
  }

  async deleteAllByUser(userId: string): Promise<void> {
    // fetch all without pagination — needed for full cleanup on account deletion
    const allSlugs: string[] = [];
    let cursor: string | undefined;

    do {
      const page = await this.getAll({ userId, cursor });
      allSlugs.push(...page.items.map((l) => l.PK));
      cursor = page.nextCursor;
    } while (cursor);

    if (allSlugs.length === 0) return;
    await this.bulkDelete(allSlugs);
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

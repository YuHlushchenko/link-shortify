import { PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import createHttpError from "http-errors";
import { docClient, CLICKS_TABLE_NAME } from "../common/db";
import { createLayerLogger } from "../common/logger";
import { LogLayer } from "../common/types";

const logger = createLayerLogger(LogLayer.REPOSITORY);

const PAGE_LIMIT = 20;

export interface ClickItem {
  PK: string; // slug
  SK: string; // clickedAt#clickId
  clickId: string;
  clickedAt: number;
  country?: string;
  referrer?: string;
  userAgent?: string;
}

export interface PaginatedClicks {
  items: ClickItem[];
  nextCursor?: string;
}

export interface CreateClickInput {
  slug: string;
  clickId: string;
  clickedAt: number;
  country?: string;
  referrer?: string;
  userAgent?: string;
}

export interface GetClicksInput {
  slug: string;
  from?: number;
  to?: number;
  cursor?: string;
}

export class ClicksRepository {
  async getBySlug({
    slug,
    from,
    to,
    cursor,
  }: GetClicksInput): Promise<PaginatedClicks> {
    const hasRange = from !== undefined && to !== undefined;

    const values: Record<string, unknown> = { ":slug": slug };
    if (hasRange) {
      values[":from"] = from;
      values[":to"] = to;
    }

    const result = await docClient.send(
      new QueryCommand({
        TableName: CLICKS_TABLE_NAME,
        KeyConditionExpression: "PK = :slug",
        ExpressionAttributeValues: values,
        // clickedAt is stored as a separate attribute for range filtering
        FilterExpression: hasRange
          ? "clickedAt BETWEEN :from AND :to"
          : undefined,
        ScanIndexForward: false,
        Limit: PAGE_LIMIT,
        ExclusiveStartKey: cursor ? decodeCursor(cursor) : undefined,
      }),
    );

    logger.info({
      text: "getBySlug clicks",
      slug,
      count: result.Items?.length ?? 0,
    });

    return {
      items: (result.Items ?? []) as ClickItem[],
      nextCursor: result.LastEvaluatedKey
        ? encodeCursor(result.LastEvaluatedKey)
        : undefined,
    };
  }

  async create(input: CreateClickInput): Promise<void> {
    await docClient.send(
      new PutCommand({
        TableName: CLICKS_TABLE_NAME,
        Item: {
          PK: input.slug,
          SK: `${input.clickedAt}#${input.clickId}`,
          clickId: input.clickId,
          clickedAt: input.clickedAt,
          ...(input.country ? { country: input.country } : {}),
          ...(input.referrer ? { referrer: input.referrer } : {}),
          ...(input.userAgent ? { userAgent: input.userAgent } : {}),
        },
      }),
    );
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

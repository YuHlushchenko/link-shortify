import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { createLayerLogger } from "./logger";
import { LogLayer } from "./types";

const logger = createLayerLogger(LogLayer.REPOSITORY);

if (!process.env.LINKS_TABLE_NAME) {
  logger.error("Missing required environment variable: LINKS_TABLE_NAME");
}

if (!process.env.CLICKS_TABLE_NAME) {
  logger.error("Missing required environment variable: CLICKS_TABLE_NAME");
}

export const LINKS_TABLE_NAME = process.env.LINKS_TABLE_NAME!;
export const CLICKS_TABLE_NAME = process.env.CLICKS_TABLE_NAME!;

const NODE_ENV = process.env.NODE_ENV;

const client = new DynamoDBClient(
  NODE_ENV === "local"
    ? {
        endpoint: process.env.DYNAMODB_ENDPOINT,
        region: process.env.CDK_DEFAULT_REGION,
      }
    : {},
);

export const docClient = DynamoDBDocumentClient.from(client);

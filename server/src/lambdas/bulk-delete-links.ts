import { LinksRepository } from "../repositories/links.repository";
import { LinksService } from "../services/links.service";
import { createHandler } from "../common/middleware";
import { createLayerLogger } from "../common/logger";
import { LogLayer } from "../common/types";
import createHttpError from "http-errors";
import { BulkDeleteLinksValidator } from "../validators/bulk-delete-links.validator";

const logger = createLayerLogger(LogLayer.LAMBDA);

const linksService = new LinksService(new LinksRepository());
const validator = new BulkDeleteLinksValidator();

export const handler = createHandler(async (event) => {
  const userId = event.requestContext.authorizer.jwt.claims.sub as string;
  let raw: unknown;
  try {
    raw = JSON.parse(event.body ?? "{}");
  } catch {
    throw createHttpError.BadRequest("Invalid JSON body");
  }

  const body = raw as { slugs: string[] };
  validator.validate(body);

  await linksService.bulkDeleteLinks(userId, body.slugs);

  logger.info({ text: "DELETE /links", userId, count: body.slugs.length });

  return { statusCode: 204 };
});

import { LinksRepository } from "../repositories/links.repository";
import { LinksService } from "../services/links.service";
import { SchedulerService } from "../services/scheduler.service";
import { mapLink } from "../mappers/links.mapper";
import { createHandler } from "../common/middleware";
import { createLayerLogger } from "../common/logger";
import { LogLayer } from "../common/types";
import createHttpError from "http-errors";
import { CreateLinkValidator } from "../validators/create-link.validator";

const logger = createLayerLogger(LogLayer.LAMBDA);

const linksService = new LinksService(
  new LinksRepository(),
  new SchedulerService(),
);
const validator = new CreateLinkValidator();

export const handler = createHandler(async (event) => {
  const userId = event.requestContext.authorizer.jwt.claims.sub as string;
  let raw: unknown;
  try {
    raw = JSON.parse(event.body ?? "{}");
  } catch {
    throw createHttpError.BadRequest("Invalid JSON body");
  }
  const body = raw as {
    originalUrl: string;
    slug?: string;
    expiresAt?: number;
  };
  validator.validate(body);

  const link = await linksService.createLink({
    userId,
    originalUrl: body.originalUrl,
    slug: body.slug,
    expiresAt: body.expiresAt,
  });

  logger.info({ text: "POST /links", userId, slug: link.PK });

  return { statusCode: 201, body: mapLink(link) };
});

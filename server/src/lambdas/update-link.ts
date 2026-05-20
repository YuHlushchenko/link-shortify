import { LinksRepository, LinkStatus } from "../repositories/links.repository";
import { LinksService } from "../services/links.service";
import { SchedulerService } from "../services/scheduler.service";
import { mapLink } from "../mappers/links.mapper";
import { createHandler } from "../common/middleware";
import { createLayerLogger } from "../common/logger";
import { LogLayer } from "../common/types";
import createHttpError from "http-errors";
import { UpdateLinkValidator } from "../validators/update-link.validator";

const logger = createLayerLogger(LogLayer.LAMBDA);

const linksService = new LinksService(
  new LinksRepository(),
  new SchedulerService(),
);
const validator = new UpdateLinkValidator();

export const handler = createHandler(async (event) => {
  const userId = event.requestContext.authorizer.jwt.claims.sub as string;
  const slug = event.pathParameters?.slug ?? "";
  let raw: unknown;
  try {
    raw = JSON.parse(event.body ?? "{}");
  } catch {
    throw createHttpError.BadRequest("Invalid JSON body");
  }
  const body = raw as { status?: LinkStatus; expiresAt?: number | null };
  validator.validate({ slug, ...body });

  const link = await linksService.updateLink(userId, slug, {
    status: body.status,
    expiresAt: body.expiresAt,
  });

  logger.info({ text: "PATCH /links/:slug", userId, slug });

  return { statusCode: 200, body: mapLink(link) };
});

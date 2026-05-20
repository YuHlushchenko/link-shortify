import { LinksRepository } from "../repositories/links.repository";
import { LinksService } from "../services/links.service";
import { SchedulerService } from "../services/scheduler.service";
import { createHandler } from "../common/middleware";
import { createLayerLogger } from "../common/logger";
import { LogLayer } from "../common/types";

const logger = createLayerLogger(LogLayer.LAMBDA);

const linksService = new LinksService(
  new LinksRepository(),
  new SchedulerService(),
);

export const handler = createHandler(async (event) => {
  const userId = event.requestContext.authorizer.jwt.claims.sub as string;
  const slug = event.pathParameters?.slug ?? "";

  await linksService.deleteLink(userId, slug);

  logger.info({ text: "DELETE /links/:slug", userId, slug });

  return { statusCode: 204 };
});

import { createHash } from "crypto";
import createHttpError from "http-errors";
import { LinksRepository } from "../repositories/links.repository";
import { LinksService } from "../services/links.service";
import { mapLink } from "../mappers/links.mapper";
import { createPublicHandler } from "../common/middleware";
import { createLayerLogger } from "../common/logger";
import { LogLayer } from "../common/types";

const logger = createLayerLogger(LogLayer.LAMBDA);

const linksService = new LinksService(new LinksRepository());

export const handler = createPublicHandler(async (event) => {
  const fingerprint = event.queryStringParameters?.fingerprint;

  if (!fingerprint || fingerprint.trim() === "") {
    throw createHttpError.BadRequest("'fingerprint' query parameter is required");
  }

  const sourceIp = event.requestContext.http.sourceIp;
  const anonymousId = createHash("sha256")
    .update(`${sourceIp}:${fingerprint}`)
    .digest("hex");

  const links = await linksService.getAnonymousLinks(anonymousId);

  logger.info({ text: "GET /links/anonymous", anonymousId, count: links.length });

  return { statusCode: 200, body: { links: links.map(mapLink) } };
});

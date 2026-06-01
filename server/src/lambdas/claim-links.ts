import { createHash } from "crypto";
import createHttpError from "http-errors";
import { LinksRepository } from "../repositories/links.repository";
import { LinksService } from "../services/links.service";
import { createHandler } from "../common/middleware";
import { createLayerLogger } from "../common/logger";
import { LogLayer } from "../common/types";

const logger = createLayerLogger(LogLayer.LAMBDA);

const linksService = new LinksService(new LinksRepository());

export const handler = createHandler(async (event) => {
  const userId = event.requestContext.authorizer.jwt.claims.sub as string;

  let raw: unknown;
  try {
    raw = JSON.parse(event.body ?? "{}");
  } catch {
    throw createHttpError.BadRequest("Invalid JSON body");
  }

  const body = raw as { fingerprint?: unknown };

  if (!body.fingerprint || typeof body.fingerprint !== "string" || body.fingerprint.trim() === "") {
    throw createHttpError.BadRequest("'fingerprint' is required");
  }

  const sourceIp = event.headers?.["cf-connecting-ip"] ?? event.requestContext.http.sourceIp;
  const anonymousId = createHash("sha256")
    .update(`${sourceIp}:${body.fingerprint}`)
    .digest("hex");

  const claimed = await linksService.claimAnonymousLinks(anonymousId, userId);

  logger.info({ text: "POST /auth/claim", userId, anonymousId, claimed });

  return { statusCode: 200, body: { claimed } };
});

import { LinksRepository, LinkStatus } from "../repositories/links.repository";
import { LinksService } from "../services/links.service";
import { mapPaginatedLinks } from "../mappers/links.mapper";
import { createHandler } from "../common/middleware";
import { createLayerLogger } from "../common/logger";
import { LogLayer } from "../common/types";
import {
  GetLinksValidator,
  LinkSortBy,
  SortOrder,
} from "../validators/get-links.validator";

const logger = createLayerLogger(LogLayer.LAMBDA);

const linksService = new LinksService(new LinksRepository());
const validator = new GetLinksValidator();

export const handler = createHandler(async (event) => {
  const userId = event.requestContext.authorizer.jwt.claims.sub as string;
  const q = event.queryStringParameters ?? {};

  validator.validate({ sortBy: q.sortBy, order: q.order, status: q.status });

  const result = await linksService.getLinks({
    userId,
    sortBy: q.sortBy as LinkSortBy | undefined,
    order: q.order as SortOrder | undefined,
    status: q.status as LinkStatus | undefined,
    cursor: q.cursor,
  });

  logger.info({ text: "GET /links", userId, count: result.items.length });

  return { statusCode: 200, body: mapPaginatedLinks(result) };
});

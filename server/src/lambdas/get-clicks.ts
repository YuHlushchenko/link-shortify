import { ClicksRepository } from '../repositories/clicks.repository'
import { LinksRepository } from '../repositories/links.repository'
import { ClicksService } from '../services/clicks.service'
import { mapPaginatedClicks } from '../mappers/clicks.mapper'
import { createHandler } from '../common/middleware'
import { createLayerLogger } from '../common/logger'
import { LogLayer } from '../common/types'
import { GetClicksValidator } from '../validators/get-clicks.validator'

const logger = createLayerLogger(LogLayer.LAMBDA)

const clicksService = new ClicksService(
  new ClicksRepository(),
  new LinksRepository(),
)
const validator = new GetClicksValidator()

export const handler = createHandler(async (event) => {
  const userId = event.requestContext.authorizer.jwt.claims.sub as string
  const slug = event.pathParameters?.slug ?? ''
  const q = event.queryStringParameters ?? {}

  validator.validate({ slug, from: q.from, to: q.to })

  const result = await clicksService.getClicks({
    userId,
    slug,
    ...(q.from !== undefined && { from: Number(q.from) }),
    ...(q.to !== undefined && { to: Number(q.to) }),
    cursor: q.cursor,
  })

  logger.info({
    text: 'GET /links/:slug/clicks',
    userId,
    slug,
    count: result.items.length,
  })

  return { statusCode: 200, body: mapPaginatedClicks(result) }
})

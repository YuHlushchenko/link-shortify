import { LinksRepository, LinkStatus } from '../repositories/links.repository'
import { LinksService } from '../services/links.service'
import { mapLink } from '../mappers/links.mapper'
import { createHandler } from '../common/middleware'
import { createLayerLogger } from '../common/logger'
import { LogLayer } from '../common/types'

const logger = createLayerLogger(LogLayer.LAMBDA)

const linksService = new LinksService(new LinksRepository())

export const handler = createHandler(async (event) => {
  const userId = event.requestContext.authorizer.jwt.claims.sub as string
  const slug = event.pathParameters?.slug ?? ''
  const body = JSON.parse(event.body ?? '{}') as {
    status?: LinkStatus
    expiresAt?: number | null
  }

  const link = await linksService.updateLink(userId, slug, {
    status: body.status,
    expiresAt: body.expiresAt,
  })

  logger.info({ text: 'PATCH /links/:slug', userId, slug })

  return { statusCode: 200, body: mapLink(link) }
})

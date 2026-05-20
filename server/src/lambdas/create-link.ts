import { LinksRepository } from '../repositories/links.repository'
import { LinksService } from '../services/links.service'
import { mapLink } from '../mappers/links.mapper'
import { createHandler } from '../common/middleware'
import { createLayerLogger } from '../common/logger'
import { LogLayer } from '../common/types'

const logger = createLayerLogger(LogLayer.LAMBDA)

const linksService = new LinksService(new LinksRepository())

export const handler = createHandler(async (event) => {
  const userId = event.requestContext.authorizer.jwt.claims.sub as string
  const body = JSON.parse(event.body ?? '{}') as {
    originalUrl: string
    slug?: string
    expiresAt?: number
  }

  const link = await linksService.createLink({
    userId,
    originalUrl: body.originalUrl,
    slug: body.slug,
    expiresAt: body.expiresAt,
  })

  logger.info({ text: 'POST /links', userId, slug: link.PK })

  return { statusCode: 201, body: mapLink(link) }
})

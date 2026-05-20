import { LinksRepository } from '../repositories/links.repository'
import { LinksService } from '../services/links.service'
import { createHandler } from '../common/middleware'
import { createLayerLogger } from '../common/logger'
import { LogLayer } from '../common/types'

const logger = createLayerLogger(LogLayer.LAMBDA)

const linksService = new LinksService(new LinksRepository())

export const handler = createHandler(async (event) => {
  const userId = event.requestContext.authorizer.jwt.claims.sub as string
  const body = JSON.parse(event.body ?? '{}') as { slugs: string[] }

  await linksService.bulkDeleteLinks(userId, body.slugs)

  logger.info({ text: 'DELETE /links', userId, count: body.slugs.length })

  return { statusCode: 204 }
})

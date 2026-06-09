import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda'
import { nanoid } from 'nanoid'
import warmer from 'lambda-warmer'
import { LinksRepository } from '../repositories/links.repository'
import { ClicksRepository } from '../repositories/clicks.repository'
import { createLayerLogger } from '../common/logger'
import { LogLayer } from '../common/types'

const logger = createLayerLogger(LogLayer.CONTROLLER)
const linksRepository = new LinksRepository()
const clicksRepository = new ClicksRepository()

const _handler = async (
  event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResultV2> => {
  const slug = event.pathParameters?.slug

  if (!slug) {
    return { statusCode: 400, body: 'Bad Request' }
  }

  const link = await linksRepository.getBySlug(slug)
  const now = Math.floor(Date.now() / 1000)

  if (!link) {
    return { statusCode: 404, body: 'Not Found' }
  }

  if (link.status === 'deleted') {
    return { statusCode: 410, body: 'Gone' }
  }

  if (link.status !== 'active' || (link.expiresAt && link.expiresAt < now)) {
    return { statusCode: 404, body: 'Not Found' }
  }

  const [clickResult, countResult] = await Promise.allSettled([
    clicksRepository.create({
      slug,
      clickId: nanoid(),
      clickedAt: now,
      country: event.headers?.['cf-ipcountry'],
      userAgent: event.headers?.['user-agent'],
      referrer: event.headers?.['referer'],
    }),
    linksRepository.incrementClickCount(slug),
  ])
  if (clickResult.status === 'rejected')
    logger.error({
      text: 'Failed to record click',
      slug,
      err: clickResult.reason,
    })
  if (countResult.status === 'rejected')
    logger.error({
      text: 'Failed to increment click count',
      slug,
      err: countResult.reason,
    })

  return {
    statusCode: 302,
    headers: { Location: link.originalUrl },
    body: '',
  }
}

export const handler = async (
  event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResultV2 | string> => {
  if (await warmer(event)) return 'warmed'
  return _handler(event)
}

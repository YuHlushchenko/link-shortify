import { createHash } from 'crypto'
import createHttpError from 'http-errors'
import { LinksService } from '../services/links.service'
import { LinksRepository } from '../repositories/links.repository'
import { SchedulerService } from '../services/scheduler.service'
import { mapLink } from '../mappers/links.mapper'
import { createPublicHandler } from '../common/middleware'
import { createLayerLogger } from '../common/logger'
import { LogLayer } from '../common/types'
import { CreateLinkAnonValidator } from '../validators/create-link-anon.validator'
import { checkRateLimit } from '../common/ratelimit'

const logger = createLayerLogger(LogLayer.LAMBDA)

const linksService = new LinksService(
  new LinksRepository(),
  new SchedulerService(),
)
const validator = new CreateLinkAnonValidator()

const ANON_LINK_LIMIT = parseInt(process.env.ANON_LINK_LIMIT ?? '5', 10)

export const handler = createPublicHandler(async (event) => {
  const sourceIp =
    event.headers?.['cf-connecting-ip'] ?? event.requestContext.http.sourceIp

  let raw: unknown
  try {
    raw = JSON.parse(event.body ?? '{}')
  } catch {
    throw createHttpError.BadRequest('Invalid JSON body')
  }

  const body = raw as {
    fingerprint: string
    originalUrl: string
    slug?: string
    expiresAt?: number
  }

  validator.validate(body)

  const anonymousId = createHash('sha256')
    .update(`${sourceIp}:${body.fingerprint}`)
    .digest('hex')

  await checkRateLimit(anonymousId)

  const count = await linksService.countAnonymousLinks(anonymousId)
  if (count >= ANON_LINK_LIMIT) {
    throw createHttpError(
      429,
      'Anonymous link limit reached. Register to create more links.',
    )
  }

  const link = await linksService.createLink({
    anonymousId,
    originalUrl: body.originalUrl,
    slug: body.slug,
    expiresAt: body.expiresAt,
  })

  logger.info({ text: 'POST /links/anonymous', anonymousId, slug: link.PK })

  return { statusCode: 201, body: mapLink(link) }
})

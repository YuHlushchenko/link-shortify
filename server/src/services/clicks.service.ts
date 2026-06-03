import createHttpError from 'http-errors'
import {
  ClicksRepository,
  PaginatedClicks,
} from '../repositories/clicks.repository'
import { LinksRepository } from '../repositories/links.repository'
import { createLayerLogger } from '../common/logger'
import { LogLayer } from '../common/types'

const logger = createLayerLogger(LogLayer.SERVICE)

export interface GetClicksInput {
  userId: string
  slug: string
  from?: number
  to?: number
  cursor?: string
}

export class ClicksService {
  constructor(
    private clicksRepository: ClicksRepository,
    private linksRepository: LinksRepository,
  ) {}

  async getClicks(input: GetClicksInput): Promise<PaginatedClicks> {
    const link = await this.linksRepository.getBySlug(input.slug)

    if (!link) throw createHttpError.NotFound('Link not found')
    if (link.userId !== input.userId)
      throw createHttpError.Forbidden('Access denied')

    logger.info({ text: 'getClicks', slug: input.slug, userId: input.userId })

    return this.clicksRepository.getBySlug({
      slug: input.slug,
      from: input.from,
      to: input.to,
      cursor: input.cursor,
    })
  }
}

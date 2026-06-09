import { describe, it, expect, beforeEach } from 'vitest'
import { ClicksService } from '../services/clicks.service'
import { ClicksRepository } from '../repositories/clicks.repository'
import {
  LinksRepository,
  type LinkStatus,
} from '../repositories/links.repository'

const uid = () => Math.random().toString(36).slice(2, 10)

function makeLink(overrides: Record<string, unknown> = {}) {
  const now = Math.floor(Date.now() / 1000)
  return {
    slug: uid(),
    userId: 'user-' + uid(),
    originalUrl: 'https://example.com',
    status: 'active' as LinkStatus,
    createdAt: now,
    updatedAt: now,
    ...overrides,
  }
}

describe('ClicksService', () => {
  let linksRepo: LinksRepository
  let clicksRepo: ClicksRepository
  let service: ClicksService

  beforeEach(() => {
    linksRepo = new LinksRepository()
    clicksRepo = new ClicksRepository()
    service = new ClicksService(clicksRepo, linksRepo)
  })

  describe('getClicks', () => {
    it('returns clicks for a link owned by the user', async () => {
      const link = makeLink()
      await linksRepo.create(link)
      const now = Math.floor(Date.now() / 1000)
      await clicksRepo.create({
        slug: link.slug,
        clickId: uid(),
        clickedAt: now,
      })

      const result = await service.getClicks({
        userId: link.userId,
        slug: link.slug,
      })

      expect(result.items.length).toBe(1)
      expect(result.items[0].PK).toBe(link.slug)
    })

    it('returns empty result when link has no clicks', async () => {
      const link = makeLink()
      await linksRepo.create(link)

      const result = await service.getClicks({
        userId: link.userId,
        slug: link.slug,
      })

      expect(result.items.length).toBe(0)
      expect(result.nextCursor).toBeUndefined()
    })

    it('throws 404 if link not found', async () => {
      await expect(
        service.getClicks({ userId: 'user-x', slug: 'no-such-slug-' + uid() }),
      ).rejects.toMatchObject({ status: 404 })
    })

    it('throws 403 if link belongs to another user', async () => {
      const link = makeLink()
      await linksRepo.create(link)

      await expect(
        service.getClicks({ userId: 'other-user-' + uid(), slug: link.slug }),
      ).rejects.toMatchObject({ status: 403 })
    })
  })
})

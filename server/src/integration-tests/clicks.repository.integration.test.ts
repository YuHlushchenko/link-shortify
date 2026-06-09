import { describe, it, expect } from 'vitest'
import { ClicksRepository } from '../repositories/clicks.repository'

const repo = new ClicksRepository()
const uid = () => Math.random().toString(36).slice(2, 10)

describe('ClicksRepository', () => {
  describe('create + getBySlug', () => {
    it('creates a click and retrieves it', async () => {
      const slug = uid()
      const clickedAt = Math.floor(Date.now() / 1000)
      await repo.create({
        slug,
        clickId: uid(),
        clickedAt,
        country: 'UA',
        referrer: 'https://google.com',
      })

      const result = await repo.getBySlug({ slug })
      expect(result.items.length).toBe(1)
      expect(result.items[0].PK).toBe(slug)
      expect(result.items[0].country).toBe('UA')
      expect(result.items[0].referrer).toBe('https://google.com')
    })

    it('SK format is clickedAt#clickId', async () => {
      const slug = uid()
      const clickId = uid()
      const clickedAt = Math.floor(Date.now() / 1000)
      await repo.create({ slug, clickId, clickedAt })

      const result = await repo.getBySlug({ slug })
      expect(result.items[0].SK).toBe(`${clickedAt}#${clickId}`)
    })

    it('returns empty for unknown slug', async () => {
      const result = await repo.getBySlug({ slug: 'no-clicks-' + uid() })
      expect(result.items).toHaveLength(0)
      expect(result.nextCursor).toBeUndefined()
    })

    it('omits optional fields when not provided', async () => {
      const slug = uid()
      await repo.create({
        slug,
        clickId: uid(),
        clickedAt: Math.floor(Date.now() / 1000),
      })

      const result = await repo.getBySlug({ slug })
      expect(result.items[0].country).toBeUndefined()
      expect(result.items[0].referrer).toBeUndefined()
      expect(result.items[0].userAgent).toBeUndefined()
    })
  })

  describe('date range filter', () => {
    it('filters clicks by from/to range', async () => {
      const slug = uid()
      const base = Math.floor(Date.now() / 1000)
      await repo.create({ slug, clickId: uid(), clickedAt: base })
      await repo.create({ slug, clickId: uid(), clickedAt: base + 10 })
      await repo.create({ slug, clickId: uid(), clickedAt: base + 20 })

      const result = await repo.getBySlug({ slug, from: base, to: base + 10 })
      expect(result.items.length).toBe(2)
    })
  })

  describe('sort order', () => {
    it('returns clicks newest first', async () => {
      const slug = uid()
      const base = Math.floor(Date.now() / 1000)
      await repo.create({ slug, clickId: uid(), clickedAt: base })
      await repo.create({ slug, clickId: uid(), clickedAt: base + 10 })

      const result = await repo.getBySlug({ slug })
      expect(result.items[0].clickedAt).toBeGreaterThan(
        result.items[1].clickedAt,
      )
    })
  })

  describe('pagination', () => {
    it('returns nextCursor and fetches second page', async () => {
      const slug = uid()
      const base = Math.floor(Date.now() / 1000)
      for (let i = 0; i < 21; i++) {
        await repo.create({ slug, clickId: uid(), clickedAt: base + i })
      }

      const page1 = await repo.getBySlug({ slug })
      expect(page1.items.length).toBe(20)
      expect(page1.nextCursor).toBeDefined()

      const page2 = await repo.getBySlug({ slug, cursor: page1.nextCursor })
      expect(page2.items.length).toBe(1)
      expect(page2.nextCursor).toBeUndefined()
    })
  })
})

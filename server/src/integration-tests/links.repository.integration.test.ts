import { describe, it, expect, beforeEach } from 'vitest'
import {
  LinksRepository,
  type LinkStatus,
} from '../repositories/links.repository'

const repo = new LinksRepository()
const uid = () => Math.random().toString(36).slice(2, 10)

function makeInput(overrides: Record<string, unknown> = {}) {
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

describe('LinksRepository', () => {
  describe('create + getBySlug', () => {
    it('creates a link and retrieves it by slug', async () => {
      const input = makeInput()
      await repo.create(input)

      const item = await repo.getBySlug(input.slug)
      expect(item).not.toBeNull()
      expect(item!.PK).toBe(input.slug)
      expect(item!.originalUrl).toBe(input.originalUrl)
      expect(item!.status).toBe('active')
      expect(item!.clickCount).toBe(0)
    })

    it('returns null for non-existent slug', async () => {
      const item = await repo.getBySlug('does-not-exist-' + uid())
      expect(item).toBeNull()
    })

    it('throws 409 on duplicate slug', async () => {
      const input = makeInput()
      await repo.create(input)
      await expect(repo.create(input)).rejects.toMatchObject({ status: 409 })
    })
  })

  describe('getAll', () => {
    let userId: string
    let slugs: string[]

    beforeEach(async () => {
      userId = 'user-' + uid()
      slugs = []
      const now = Math.floor(Date.now() / 1000)
      for (let i = 0; i < 3; i++) {
        const input = makeInput({
          userId,
          createdAt: now + i,
          updatedAt: now + i,
        })
        slugs.push(input.slug)
        await repo.create(input)
      }
    })

    it('returns all links for user sorted by createdAt desc', async () => {
      const result = await repo.getAll({ userId })
      expect(result.items.length).toBe(3)
      expect(result.items[0].createdAt).toBeGreaterThan(
        result.items[1].createdAt,
      )
    })

    it('returns links sorted by createdAt asc', async () => {
      const result = await repo.getAll({ userId, order: 'asc' })
      expect(result.items[0].createdAt).toBeLessThan(result.items[1].createdAt)
    })

    it('excludes deleted links by default', async () => {
      await repo.deleteOne(slugs[0])
      const result = await repo.getAll({ userId })
      expect(result.items.find((l) => l.PK === slugs[0])).toBeUndefined()
    })

    it('filters by status', async () => {
      await repo.update(slugs[0], { status: 'inactive' })
      const result = await repo.getAll({ userId, status: 'inactive' })
      expect(result.items.length).toBe(1)
      expect(result.items[0].PK).toBe(slugs[0])
    })

    it('paginates with cursor', async () => {
      const page1 = await repo.getAll({ userId })
      expect(page1.items.length).toBe(3)
      expect(page1.nextCursor).toBeUndefined()
    })

    it('filters by date range', async () => {
      const now = Math.floor(Date.now() / 1000)
      const result = await repo.getAll({ userId, from: now + 1, to: now + 2 })
      expect(result.items.length).toBe(2)
    })

    it('filters by from only', async () => {
      const now = Math.floor(Date.now() / 1000)
      const result = await repo.getAll({ userId, from: now + 2 })
      expect(result.items.length).toBe(1)
    })

    it('filters by to only', async () => {
      const now = Math.floor(Date.now() / 1000)
      const result = await repo.getAll({ userId, to: now })
      expect(result.items.length).toBe(1)
    })

    it('paginates with cursor when results exceed page limit', async () => {
      // Create PAGE_LIMIT (20) more items to trigger pagination
      const extraUserId = 'user-' + uid()
      const now = Math.floor(Date.now() / 1000)
      for (let i = 0; i < 21; i++) {
        await repo.create(
          makeInput({
            userId: extraUserId,
            createdAt: now + i,
            updatedAt: now + i,
          }),
        )
      }

      const page1 = await repo.getAll({ userId: extraUserId })
      expect(page1.items.length).toBe(20)
      expect(page1.nextCursor).toBeDefined()

      const page2 = await repo.getAll({
        userId: extraUserId,
        cursor: page1.nextCursor,
      })
      expect(page2.items.length).toBe(1)
      expect(page2.nextCursor).toBeUndefined()
    })
  })

  describe('getAll sortBy clickCount (GSI2)', () => {
    it('sorts by clickCount desc', async () => {
      const userId = 'user-' + uid()
      const now = Math.floor(Date.now() / 1000)
      const link1 = makeInput({ userId, createdAt: now, updatedAt: now })
      const link2 = makeInput({
        userId,
        createdAt: now + 1,
        updatedAt: now + 1,
      })
      await repo.create(link1)
      await repo.create(link2)
      await repo.incrementClickCount(link2.slug)
      await repo.incrementClickCount(link2.slug)

      const result = await repo.getAll({
        userId,
        sortBy: 'clickCount',
        order: 'desc',
      })
      expect(result.items[0].PK).toBe(link2.slug)
      expect(result.items[1].PK).toBe(link1.slug)
    })
  })

  describe('update', () => {
    it('updates status', async () => {
      const input = makeInput()
      await repo.create(input)
      await repo.update(input.slug, { status: 'inactive' })

      const item = await repo.getBySlug(input.slug)
      expect(item!.status).toBe('inactive')
    })

    it('sets expiresAt', async () => {
      const input = makeInput()
      await repo.create(input)
      const expiresAt = Math.floor(Date.now() / 1000) + 3600
      await repo.update(input.slug, { expiresAt })

      const item = await repo.getBySlug(input.slug)
      expect(item!.expiresAt).toBe(expiresAt)
    })

    it('removes expiresAt when null', async () => {
      const expiresAt = Math.floor(Date.now() / 1000) + 3600
      const input = makeInput({ expiresAt })
      await repo.create(input)

      await repo.update(input.slug, { expiresAt: null })
      const item = await repo.getBySlug(input.slug)
      expect(item!.expiresAt).toBeUndefined()
    })
  })

  describe('incrementClickCount', () => {
    it('atomically increments clickCount', async () => {
      const input = makeInput()
      await repo.create(input)
      await repo.incrementClickCount(input.slug)
      await repo.incrementClickCount(input.slug)

      const item = await repo.getBySlug(input.slug)
      expect(item!.clickCount).toBe(2)
    })
  })

  describe('deleteOne', () => {
    it('soft-deletes by setting status to deleted', async () => {
      const input = makeInput()
      await repo.create(input)
      await repo.deleteOne(input.slug)

      const item = await repo.getBySlug(input.slug)
      expect(item!.status).toBe('deleted')
    })
  })

  describe('anonymous links', () => {
    it('countByAnonymousId returns correct count excluding deleted', async () => {
      const anonymousId = 'anon-' + uid()
      await repo.create(makeInput({ anonymousId, userId: undefined }))
      await repo.create(makeInput({ anonymousId, userId: undefined }))
      const deleted = makeInput({ anonymousId, userId: undefined })
      await repo.create(deleted)
      await repo.deleteOne(deleted.slug)

      expect(await repo.countByAnonymousId(anonymousId)).toBe(2)
    })

    it('getByAnonymousId returns links for session', async () => {
      const anonymousId = 'anon-' + uid()
      await repo.create(makeInput({ anonymousId, userId: undefined }))
      await repo.create(makeInput({ anonymousId, userId: undefined }))

      const items = await repo.getByAnonymousId(anonymousId)
      expect(items.length).toBe(2)
      expect(items.every((i) => i.anonymousId === anonymousId)).toBe(true)
    })
  })

  describe('claimByAnonymousId', () => {
    it('transfers links from anonymous session to user', async () => {
      const anonymousId = 'anon-' + uid()
      const userId = 'user-' + uid()
      const input1 = makeInput({ anonymousId, userId: undefined })
      const input2 = makeInput({ anonymousId, userId: undefined })
      await repo.create(input1)
      await repo.create(input2)

      const count = await repo.claimByAnonymousId(anonymousId, userId)
      expect(count).toBe(2)

      const item = await repo.getBySlug(input1.slug)
      expect(item!.userId).toBe(userId)
      expect(item!.anonymousId).toBeUndefined()
    })

    it('returns 0 if no links to claim', async () => {
      const count = await repo.claimByAnonymousId(
        'anon-' + uid(),
        'user-' + uid(),
      )
      expect(count).toBe(0)
    })

    it('does not claim deleted anonymous links', async () => {
      const anonymousId = 'anon-' + uid()
      const userId = 'user-' + uid()
      const active = makeInput({ anonymousId, userId: undefined })
      const deleted = makeInput({ anonymousId, userId: undefined })
      await repo.create(active)
      await repo.create(deleted)
      await repo.deleteOne(deleted.slug)

      const count = await repo.claimByAnonymousId(anonymousId, userId)
      expect(count).toBe(1)

      const deletedItem = await repo.getBySlug(deleted.slug)
      expect(deletedItem!.userId).toBeUndefined()
    })
  })

  describe('bulkDelete', () => {
    it('soft-deletes multiple links', async () => {
      const userId = 'user-' + uid()
      const inputs = [
        makeInput({ userId }),
        makeInput({ userId }),
        makeInput({ userId }),
      ]
      await Promise.all(inputs.map((i) => repo.create(i)))

      await repo.bulkDelete(inputs.map((i) => i.slug))

      for (const input of inputs) {
        const item = await repo.getBySlug(input.slug)
        expect(item!.status).toBe('deleted')
      }
    })
  })

  describe('deleteAllByUser', () => {
    it('soft-deletes all links for user', async () => {
      const userId = 'user-' + uid()
      const inputs = [makeInput({ userId }), makeInput({ userId })]
      await Promise.all(inputs.map((i) => repo.create(i)))

      await repo.deleteAllByUser(userId)

      const result = await repo.getAll({ userId, status: 'deleted' })
      expect(result.items.length).toBe(2)
    })

    it('deletes all links across multiple pages (pagination loop)', async () => {
      const userId = 'user-' + uid()
      const now = Math.floor(Date.now() / 1000)
      for (let i = 0; i < 21; i++) {
        await repo.create(
          makeInput({ userId, createdAt: now + i, updatedAt: now + i }),
        )
      }

      await repo.deleteAllByUser(userId)

      const result = await repo.getAll({ userId, status: 'deleted' })
      expect(result.items.length).toBe(20) // first page; rest on next page
      const page2 = await repo.getAll({
        userId,
        status: 'deleted',
        cursor: result.nextCursor,
      })
      expect(result.items.length + page2.items.length).toBe(21)
    })
  })
})

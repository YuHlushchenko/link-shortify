import { describe, it, expect, beforeEach, vi } from 'vitest'
import { LinksService } from '../services/links.service'
import { LinksRepository } from '../repositories/links.repository'
import type { SchedulerService } from '../services/scheduler.service'

const uid = () => Math.random().toString(36).slice(2, 10)

function makeSchedulerMock() {
  return {
    scheduleExpiry: vi.fn().mockResolvedValue(undefined),
    cancelExpiry: vi.fn().mockResolvedValue(undefined),
  } as unknown as SchedulerService
}

describe('LinksService', () => {
  let repo: LinksRepository
  let scheduler: SchedulerService & {
    scheduleExpiry: ReturnType<typeof vi.fn>
    cancelExpiry: ReturnType<typeof vi.fn>
  }
  let service: LinksService

  beforeEach(() => {
    repo = new LinksRepository()
    scheduler = makeSchedulerMock() as typeof scheduler
    service = new LinksService(repo, scheduler)
  })

  describe('createLink', () => {
    it('creates link with custom slug', async () => {
      const slug = 'my-slug-' + uid()
      const userId = 'user-' + uid()

      const link = await service.createLink({
        slug,
        userId,
        originalUrl: 'https://example.com',
      })

      expect(link.PK).toBe(slug)
      expect(link.userId).toBe(userId)
      expect(link.status).toBe('active')
      expect(link.clickCount).toBe(0)
    })

    it('creates link with auto-generated slug', async () => {
      const userId = 'user-' + uid()

      const link = await service.createLink({
        userId,
        originalUrl: 'https://example.com',
      })

      expect(link.PK).toHaveLength(6)
      expect(link.status).toBe('active')
    })

    it('throws 409 on duplicate custom slug', async () => {
      const slug = 'dup-' + uid()
      const userId = 'user-' + uid()
      await service.createLink({ slug, userId, originalUrl: 'https://a.com' })

      await expect(
        service.createLink({ slug, userId, originalUrl: 'https://b.com' }),
      ).rejects.toMatchObject({ status: 409 })
    })

    it('schedules expiry when expiresAt is provided', async () => {
      const userId = 'user-' + uid()
      const expiresAt = Math.floor(Date.now() / 1000) + 3600

      const link = await service.createLink({
        userId,
        originalUrl: 'https://example.com',
        expiresAt,
      })

      expect(scheduler.scheduleExpiry).toHaveBeenCalledWith(
        link.PK,
        userId,
        expiresAt,
      )
    })

    it('does not schedule expiry when no expiresAt', async () => {
      const userId = 'user-' + uid()
      await service.createLink({ userId, originalUrl: 'https://example.com' })

      expect(scheduler.scheduleExpiry).not.toHaveBeenCalled()
    })

    it('creates anonymous link without userId', async () => {
      const anonymousId = 'anon-' + uid()

      const link = await service.createLink({
        anonymousId,
        originalUrl: 'https://example.com',
      })

      expect(link.anonymousId).toBe(anonymousId)
      expect(link.userId).toBeUndefined()
    })
  })

  describe('updateLink', () => {
    it('updates status to inactive', async () => {
      const userId = 'user-' + uid()
      const link = await service.createLink({
        userId,
        originalUrl: 'https://example.com',
      })

      const updated = await service.updateLink(userId, link.PK, {
        status: 'inactive',
      })

      expect(updated.status).toBe('inactive')
    })

    it('throws 404 if link not found', async () => {
      await expect(
        service.updateLink('user-x', 'no-such-slug-' + uid(), {
          status: 'inactive',
        }),
      ).rejects.toMatchObject({ status: 404 })
    })

    it('throws 403 if link belongs to another user', async () => {
      const userId = 'user-' + uid()
      const link = await service.createLink({
        userId,
        originalUrl: 'https://example.com',
      })

      await expect(
        service.updateLink('other-user-' + uid(), link.PK, {
          status: 'inactive',
        }),
      ).rejects.toMatchObject({ status: 403 })
    })

    it('throws 410 if link is deleted', async () => {
      const userId = 'user-' + uid()
      const link = await service.createLink({
        userId,
        originalUrl: 'https://example.com',
      })
      await service.deleteLink(userId, link.PK)

      await expect(
        service.updateLink(userId, link.PK, { status: 'inactive' }),
      ).rejects.toMatchObject({ status: 410 })
    })

    it('clears expiresAt when reactivating an expired link with past expiry', async () => {
      const userId = 'user-' + uid()
      const slug = 'exp-' + uid()
      const now = Math.floor(Date.now() / 1000)
      await repo.create({
        slug,
        userId,
        originalUrl: 'https://example.com',
        status: 'expired',
        createdAt: now,
        updatedAt: now,
        expiresAt: now - 1,
      })

      const updated = await service.updateLink(userId, slug, {
        status: 'active',
      })

      expect(updated.status).toBe('active')
      expect(updated.expiresAt).toBeUndefined()
    })

    it('cancels expiry schedule when deactivating', async () => {
      const userId = 'user-' + uid()
      const link = await service.createLink({
        userId,
        originalUrl: 'https://example.com',
      })

      await service.updateLink(userId, link.PK, { status: 'inactive' })

      expect(scheduler.cancelExpiry).toHaveBeenCalledWith(link.PK)
    })

    it('cancels old schedule and creates new one when updating expiresAt', async () => {
      const userId = 'user-' + uid()
      const link = await service.createLink({
        userId,
        originalUrl: 'https://example.com',
      })
      const newExpiry = Math.floor(Date.now() / 1000) + 7200

      await service.updateLink(userId, link.PK, { expiresAt: newExpiry })

      expect(scheduler.cancelExpiry).toHaveBeenCalledWith(link.PK)
      expect(scheduler.scheduleExpiry).toHaveBeenCalledWith(
        link.PK,
        userId,
        newExpiry,
      )
    })

    it('cancels schedule when removing expiresAt', async () => {
      const userId = 'user-' + uid()
      const link = await service.createLink({
        userId,
        originalUrl: 'https://example.com',
      })

      await service.updateLink(userId, link.PK, { expiresAt: null })

      expect(scheduler.cancelExpiry).toHaveBeenCalledWith(link.PK)
    })

    it('reschedules expiry when reactivating link with future expiresAt', async () => {
      const userId = 'user-' + uid()
      const slug = 'reactivate-' + uid()
      const now = Math.floor(Date.now() / 1000)
      const futureExpiry = now + 3600
      await repo.create({
        slug,
        userId,
        originalUrl: 'https://example.com',
        status: 'inactive',
        createdAt: now,
        updatedAt: now,
        expiresAt: futureExpiry,
      })

      await service.updateLink(userId, slug, { status: 'active' })

      expect(scheduler.scheduleExpiry).toHaveBeenCalledWith(
        slug,
        userId,
        futureExpiry,
      )
    })
  })

  describe('deleteLink', () => {
    it('soft-deletes a link', async () => {
      const userId = 'user-' + uid()
      const link = await service.createLink({
        userId,
        originalUrl: 'https://example.com',
      })

      await service.deleteLink(userId, link.PK)

      const fetched = await repo.getBySlug(link.PK)
      expect(fetched!.status).toBe('deleted')
    })

    it('throws 404 if link not found', async () => {
      await expect(
        service.deleteLink('user-x', 'no-such-slug-' + uid()),
      ).rejects.toMatchObject({ status: 404 })
    })

    it('throws 403 if link belongs to another user', async () => {
      const userId = 'user-' + uid()
      const link = await service.createLink({
        userId,
        originalUrl: 'https://example.com',
      })

      await expect(
        service.deleteLink('other-user-' + uid(), link.PK),
      ).rejects.toMatchObject({ status: 403 })
    })

    it('throws 410 if link is already deleted', async () => {
      const userId = 'user-' + uid()
      const link = await service.createLink({
        userId,
        originalUrl: 'https://example.com',
      })
      await service.deleteLink(userId, link.PK)

      await expect(service.deleteLink(userId, link.PK)).rejects.toMatchObject({
        status: 410,
      })
    })

    it('cancels expiry schedule on delete', async () => {
      const userId = 'user-' + uid()
      const link = await service.createLink({
        userId,
        originalUrl: 'https://example.com',
      })

      await service.deleteLink(userId, link.PK)

      expect(scheduler.cancelExpiry).toHaveBeenCalledWith(link.PK)
    })
  })

  describe('bulkDeleteLinks', () => {
    it('soft-deletes multiple links owned by user', async () => {
      const userId = 'user-' + uid()
      const link1 = await service.createLink({
        userId,
        originalUrl: 'https://a.com',
      })
      const link2 = await service.createLink({
        userId,
        originalUrl: 'https://b.com',
      })

      await service.bulkDeleteLinks(userId, [link1.PK, link2.PK])

      expect((await repo.getBySlug(link1.PK))!.status).toBe('deleted')
      expect((await repo.getBySlug(link2.PK))!.status).toBe('deleted')
    })

    it('throws 403 if any link belongs to another user', async () => {
      const userId = 'user-' + uid()
      const otherUserId = 'user-' + uid()
      const own = await service.createLink({
        userId,
        originalUrl: 'https://a.com',
      })
      const other = await service.createLink({
        userId: otherUserId,
        originalUrl: 'https://b.com',
      })

      await expect(
        service.bulkDeleteLinks(userId, [own.PK, other.PK]),
      ).rejects.toMatchObject({ status: 403 })
    })

    it('skips non-existent slugs and deletes the rest', async () => {
      const userId = 'user-' + uid()
      const link = await service.createLink({
        userId,
        originalUrl: 'https://a.com',
      })

      await service.bulkDeleteLinks(userId, [link.PK, 'non-existent-' + uid()])

      expect((await repo.getBySlug(link.PK))!.status).toBe('deleted')
    })

    it('cancels expiry schedules for links with expiresAt', async () => {
      const userId = 'user-' + uid()
      const expiresAt = Math.floor(Date.now() / 1000) + 3600
      const link = await service.createLink({
        userId,
        originalUrl: 'https://a.com',
        expiresAt,
      })
      scheduler.scheduleExpiry.mockClear()
      scheduler.cancelExpiry.mockClear()

      await service.bulkDeleteLinks(userId, [link.PK])

      expect(scheduler.cancelExpiry).toHaveBeenCalledWith(link.PK)
    })
  })

  describe('deleteAllUserLinks', () => {
    it('soft-deletes all links for user', async () => {
      const userId = 'user-' + uid()
      await service.createLink({ userId, originalUrl: 'https://a.com' })
      await service.createLink({ userId, originalUrl: 'https://b.com' })

      await service.deleteAllUserLinks(userId)

      const result = await repo.getAll({ userId, status: 'deleted' })
      expect(result.items.length).toBe(2)
    })

    it('cancels expiry schedules for links with expiresAt', async () => {
      const userId = 'user-' + uid()
      const expiresAt = Math.floor(Date.now() / 1000) + 3600
      const link = await service.createLink({
        userId,
        originalUrl: 'https://a.com',
        expiresAt,
      })
      scheduler.scheduleExpiry.mockClear()
      scheduler.cancelExpiry.mockClear()

      await service.deleteAllUserLinks(userId)

      expect(scheduler.cancelExpiry).toHaveBeenCalledWith(link.PK)
    })

    it('does nothing when user has no links', async () => {
      await expect(
        service.deleteAllUserLinks('user-empty-' + uid()),
      ).resolves.toBeUndefined()
    })

    it('deletes all links across multiple pages', async () => {
      const userId = 'user-' + uid()
      const now = Math.floor(Date.now() / 1000)
      for (let i = 0; i < 21; i++) {
        await repo.create({
          slug: uid(),
          userId,
          originalUrl: 'https://example.com',
          status: 'active',
          createdAt: now + i,
          updatedAt: now + i,
        })
      }

      await service.deleteAllUserLinks(userId)

      const page1 = await repo.getAll({ userId, status: 'deleted' })
      const page2 = await repo.getAll({
        userId,
        status: 'deleted',
        cursor: page1.nextCursor,
      })
      expect(page1.items.length + (page2?.items.length ?? 0)).toBe(21)
    })
  })

  describe('claimAnonymousLinks', () => {
    it('transfers anonymous links to user', async () => {
      const anonymousId = 'anon-' + uid()
      const userId = 'user-' + uid()
      await service.createLink({ anonymousId, originalUrl: 'https://a.com' })
      await service.createLink({ anonymousId, originalUrl: 'https://b.com' })

      const count = await service.claimAnonymousLinks(anonymousId, userId)

      expect(count).toBe(2)
      const items = await repo.getByAnonymousId(anonymousId)
      expect(items.length).toBe(0)
    })

    it('returns 0 when no anonymous links to claim', async () => {
      const count = await service.claimAnonymousLinks(
        'anon-' + uid(),
        'user-' + uid(),
      )
      expect(count).toBe(0)
    })
  })
})

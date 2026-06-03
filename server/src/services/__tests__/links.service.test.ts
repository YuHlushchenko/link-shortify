import { describe, it, expect, vi, beforeEach } from 'vitest'
import { LinksService } from '../links.service'
import type {
  LinksRepository,
  LinkItem,
} from '../../repositories/links.repository'
import type { SchedulerService } from '../scheduler.service'

const mockGenerateSlug = vi.hoisted(() => vi.fn())
vi.mock('nanoid', () => ({ customAlphabet: () => mockGenerateSlug }))

function makeLink(overrides?: Partial<LinkItem>): LinkItem {
  return {
    PK: 'abc123',
    SK: 'LINK',
    originalUrl: 'https://example.com',
    status: 'active',
    createdAt: 1000000,
    updatedAt: 1000001,
    clickCount: 0,
    userId: 'user-1',
    ...overrides,
  }
}

function makeRepo() {
  return {
    getBySlug: vi.fn(),
    create: vi.fn().mockResolvedValue(undefined),
    update: vi.fn().mockResolvedValue(undefined),
    deleteOne: vi.fn().mockResolvedValue(undefined),
    getAll: vi.fn(),
    getByAnonymousId: vi.fn(),
    countByAnonymousId: vi.fn(),
    claimByAnonymousId: vi.fn(),
    bulkDelete: vi.fn().mockResolvedValue(undefined),
    deleteAllByUser: vi.fn().mockResolvedValue(undefined),
  }
}

function makeScheduler() {
  return {
    scheduleExpiry: vi.fn().mockResolvedValue(undefined),
    cancelExpiry: vi.fn().mockResolvedValue(undefined),
  }
}

const future = Math.floor(Date.now() / 1000) + 3600
const past = Math.floor(Date.now() / 1000) - 3600

describe('LinksService', () => {
  let repo: ReturnType<typeof makeRepo>
  let scheduler: ReturnType<typeof makeScheduler>
  let service: LinksService

  beforeEach(() => {
    vi.clearAllMocks()
    repo = makeRepo()
    scheduler = makeScheduler()
    service = new LinksService(
      repo as unknown as LinksRepository,
      scheduler as unknown as SchedulerService,
    )
    mockGenerateSlug.mockReturnValue('gen123')
  })

  // ─── createLink ────────────────────────────────────────────────────────────

  describe('createLink', () => {
    describe('custom slug', () => {
      it('creates link when slug is available', async () => {
        repo.getBySlug
          .mockResolvedValueOnce(null)
          .mockResolvedValueOnce(makeLink({ PK: 'my-slug' }))

        await service.createLink({
          originalUrl: 'https://example.com',
          slug: 'my-slug',
        })

        expect(repo.create).toHaveBeenCalledWith(
          expect.objectContaining({ slug: 'my-slug', status: 'active' }),
        )
      })

      it('throws Conflict when custom slug is taken', async () => {
        repo.getBySlug.mockResolvedValueOnce(makeLink())

        await expect(
          service.createLink({
            originalUrl: 'https://example.com',
            slug: 'taken',
          }),
        ).rejects.toMatchObject({ status: 409 })
      })
    })

    describe('auto-generated slug', () => {
      it('creates link when first generated slug is available', async () => {
        repo.getBySlug
          .mockResolvedValueOnce(null)
          .mockResolvedValueOnce(makeLink({ PK: 'gen123' }))

        await service.createLink({ originalUrl: 'https://example.com' })

        expect(repo.create).toHaveBeenCalledWith(
          expect.objectContaining({ slug: 'gen123' }),
        )
      })

      it('retries on collision and creates on second attempt', async () => {
        mockGenerateSlug
          .mockReturnValueOnce('taken1')
          .mockReturnValueOnce('free1')

        repo.getBySlug
          .mockResolvedValueOnce(makeLink({ PK: 'taken1' }))
          .mockResolvedValueOnce(null)
          .mockResolvedValueOnce(makeLink({ PK: 'free1' }))

        const result = await service.createLink({
          originalUrl: 'https://example.com',
        })

        expect(repo.create).toHaveBeenCalledWith(
          expect.objectContaining({ slug: 'free1' }),
        )
        expect(result.PK).toBe('free1')
      })

      it('throws InternalServerError after 3 consecutive collisions', async () => {
        mockGenerateSlug
          .mockReturnValueOnce('col1')
          .mockReturnValueOnce('col2')
          .mockReturnValueOnce('col3')

        repo.getBySlug
          .mockResolvedValueOnce(makeLink())
          .mockResolvedValueOnce(makeLink())
          .mockResolvedValueOnce(makeLink())

        await expect(
          service.createLink({ originalUrl: 'https://example.com' }),
        ).rejects.toMatchObject({ status: 500 })

        expect(repo.create).not.toHaveBeenCalled()
      })
    })

    describe('expiry scheduling', () => {
      it('schedules expiry when expiresAt is provided', async () => {
        repo.getBySlug
          .mockResolvedValueOnce(null)
          .mockResolvedValueOnce(makeLink())

        await service.createLink({
          userId: 'user-1',
          originalUrl: 'https://example.com',
          expiresAt: future,
        })

        expect(scheduler.scheduleExpiry).toHaveBeenCalledWith(
          'gen123',
          'user-1',
          future,
        )
      })

      it('does not schedule when expiresAt is not provided', async () => {
        repo.getBySlug
          .mockResolvedValueOnce(null)
          .mockResolvedValueOnce(makeLink())

        await service.createLink({ originalUrl: 'https://example.com' })

        expect(scheduler.scheduleExpiry).not.toHaveBeenCalled()
      })

      it('does not throw when scheduling fails (soft failure)', async () => {
        repo.getBySlug
          .mockResolvedValueOnce(null)
          .mockResolvedValueOnce(makeLink())
        scheduler.scheduleExpiry.mockRejectedValueOnce(new Error('AWS error'))

        await expect(
          service.createLink({
            originalUrl: 'https://example.com',
            expiresAt: future,
          }),
        ).resolves.not.toThrow()
      })

      it('does not schedule when no schedulerService', async () => {
        const serviceNoScheduler = new LinksService(
          repo as unknown as LinksRepository,
        )
        repo.getBySlug
          .mockResolvedValueOnce(null)
          .mockResolvedValueOnce(makeLink())

        await serviceNoScheduler.createLink({
          originalUrl: 'https://example.com',
          expiresAt: future,
        })

        expect(scheduler.scheduleExpiry).not.toHaveBeenCalled()
      })
    })
  })

  // ─── updateLink ────────────────────────────────────────────────────────────

  describe('updateLink', () => {
    describe('authorization', () => {
      it('throws NotFound when link does not exist', async () => {
        repo.getBySlug.mockResolvedValueOnce(null)

        await expect(
          service.updateLink('user-1', 'abc', { status: 'inactive' }),
        ).rejects.toMatchObject({ status: 404 })
      })

      it('throws Forbidden when link belongs to another user', async () => {
        repo.getBySlug.mockResolvedValueOnce(makeLink({ userId: 'other-user' }))

        await expect(
          service.updateLink('user-1', 'abc', { status: 'inactive' }),
        ).rejects.toMatchObject({ status: 403 })
      })

      it('throws Gone when link is deleted', async () => {
        repo.getBySlug.mockResolvedValueOnce(makeLink({ status: 'deleted' }))

        await expect(
          service.updateLink('user-1', 'abc', { status: 'inactive' }),
        ).rejects.toMatchObject({ status: 410 })
      })
    })

    describe('scheduler management', () => {
      function mockUpdate(
        current: Partial<LinkItem>,
        updated?: Partial<LinkItem>,
      ) {
        repo.getBySlug
          .mockResolvedValueOnce(makeLink(current))
          .mockResolvedValueOnce(makeLink(updated ?? current))
      }

      it('cancels scheduler when deactivating', async () => {
        mockUpdate({ status: 'active', expiresAt: future })

        await service.updateLink('user-1', 'abc123', { status: 'inactive' })

        expect(scheduler.cancelExpiry).toHaveBeenCalledWith('abc123')
        expect(scheduler.scheduleExpiry).not.toHaveBeenCalled()
      })

      it('reschedules when reactivating inactive link with future expiresAt', async () => {
        mockUpdate({ status: 'inactive', expiresAt: future })

        await service.updateLink('user-1', 'abc123', { status: 'active' })

        expect(scheduler.scheduleExpiry).toHaveBeenCalledWith(
          'abc123',
          'user-1',
          future,
        )
        expect(scheduler.cancelExpiry).not.toHaveBeenCalled()
      })

      it('clears stale expiresAt and does not reschedule when reactivating inactive link with past expiresAt', async () => {
        mockUpdate({ status: 'inactive', expiresAt: past })

        await service.updateLink('user-1', 'abc123', { status: 'active' })

        expect(repo.update).toHaveBeenCalledWith(
          'abc123',
          expect.objectContaining({ expiresAt: null }),
        )
        expect(scheduler.scheduleExpiry).not.toHaveBeenCalled()
      })

      it('clears stale expiresAt and does not reschedule when reactivating expired link', async () => {
        mockUpdate({ status: 'expired', expiresAt: past })

        await service.updateLink('user-1', 'abc123', { status: 'active' })

        expect(repo.update).toHaveBeenCalledWith(
          'abc123',
          expect.objectContaining({ expiresAt: null }),
        )
        expect(scheduler.scheduleExpiry).not.toHaveBeenCalled()
      })

      it('cancels and reschedules when reactivating expired link with new future expiresAt', async () => {
        mockUpdate({ status: 'expired', expiresAt: past })

        await service.updateLink('user-1', 'abc123', {
          status: 'active',
          expiresAt: future,
        })

        expect(scheduler.cancelExpiry).toHaveBeenCalledWith('abc123')
        expect(scheduler.scheduleExpiry).toHaveBeenCalledWith(
          'abc123',
          'user-1',
          future,
        )
      })

      it('cancels scheduler when removing expiresAt', async () => {
        mockUpdate({ status: 'active', expiresAt: future })

        await service.updateLink('user-1', 'abc123', { expiresAt: null })

        expect(scheduler.cancelExpiry).toHaveBeenCalledWith('abc123')
      })

      it('cancels and reschedules when updating expiresAt to new value', async () => {
        const newFuture = future + 7200
        mockUpdate({ status: 'active', expiresAt: future })

        await service.updateLink('user-1', 'abc123', { expiresAt: newFuture })

        expect(scheduler.cancelExpiry).toHaveBeenCalledWith('abc123')
        expect(scheduler.scheduleExpiry).toHaveBeenCalledWith(
          'abc123',
          'user-1',
          newFuture,
        )
      })

      it('does not create duplicate scheduler when setting active on already active link', async () => {
        mockUpdate({ status: 'active', expiresAt: future })

        await service.updateLink('user-1', 'abc123', { status: 'active' })

        expect(scheduler.scheduleExpiry).not.toHaveBeenCalled()
        expect(scheduler.cancelExpiry).not.toHaveBeenCalled()
      })

      it('does not throw when scheduler fails (soft failure)', async () => {
        repo.getBySlug
          .mockResolvedValueOnce(
            makeLink({ status: 'active', expiresAt: future }),
          )
          .mockResolvedValueOnce(makeLink())
        scheduler.cancelExpiry.mockRejectedValueOnce(new Error('AWS error'))

        await expect(
          service.updateLink('user-1', 'abc123', { status: 'inactive' }),
        ).resolves.not.toThrow()
      })
    })
  })

  // ─── deleteLink ────────────────────────────────────────────────────────────

  describe('deleteLink', () => {
    it('throws NotFound when link does not exist', async () => {
      repo.getBySlug.mockResolvedValueOnce(null)

      await expect(service.deleteLink('user-1', 'abc')).rejects.toMatchObject({
        status: 404,
      })
    })

    it('throws Forbidden when link belongs to another user', async () => {
      repo.getBySlug.mockResolvedValueOnce(makeLink({ userId: 'other' }))

      await expect(service.deleteLink('user-1', 'abc')).rejects.toMatchObject({
        status: 403,
      })
    })

    it('throws Gone when link is already deleted', async () => {
      repo.getBySlug.mockResolvedValueOnce(makeLink({ status: 'deleted' }))

      await expect(service.deleteLink('user-1', 'abc')).rejects.toMatchObject({
        status: 410,
      })
    })

    it('deletes link and cancels scheduler', async () => {
      repo.getBySlug.mockResolvedValueOnce(makeLink())

      await service.deleteLink('user-1', 'abc123')

      expect(repo.deleteOne).toHaveBeenCalledWith('abc123')
      expect(scheduler.cancelExpiry).toHaveBeenCalledWith('abc123')
    })

    it('does not throw when cancelExpiry fails (soft failure)', async () => {
      repo.getBySlug.mockResolvedValueOnce(makeLink())
      scheduler.cancelExpiry.mockRejectedValueOnce(new Error('AWS error'))

      await expect(
        service.deleteLink('user-1', 'abc123'),
      ).resolves.not.toThrow()
      expect(repo.deleteOne).toHaveBeenCalled()
    })
  })

  // ─── bulkDeleteLinks ───────────────────────────────────────────────────────

  describe('bulkDeleteLinks', () => {
    it('bulk deletes all existing links for the same user', async () => {
      repo.getBySlug
        .mockResolvedValueOnce(makeLink({ PK: 'abc' }))
        .mockResolvedValueOnce(makeLink({ PK: 'def' }))

      await service.bulkDeleteLinks('user-1', ['abc', 'def'])

      expect(repo.bulkDelete).toHaveBeenCalledWith(['abc', 'def'])
    })

    it('throws Forbidden if any link belongs to another user', async () => {
      repo.getBySlug
        .mockResolvedValueOnce(makeLink({ PK: 'abc', userId: 'user-1' }))
        .mockResolvedValueOnce(makeLink({ PK: 'def', userId: 'other-user' }))

      await expect(
        service.bulkDeleteLinks('user-1', ['abc', 'def']),
      ).rejects.toMatchObject({ status: 403 })

      expect(repo.bulkDelete).not.toHaveBeenCalled()
    })

    it('skips non-existent slugs — no DynamoDB poisoning', async () => {
      repo.getBySlug
        .mockResolvedValueOnce(makeLink({ PK: 'abc' }))
        .mockResolvedValueOnce(null)

      await service.bulkDeleteLinks('user-1', ['abc', 'ghost'])

      expect(repo.bulkDelete).toHaveBeenCalledWith(['abc'])
      expect(scheduler.cancelExpiry).toHaveBeenCalledWith('abc')
      expect(scheduler.cancelExpiry).not.toHaveBeenCalledWith('ghost')
    })

    it('calls bulkDelete with empty array when all slugs are non-existent', async () => {
      repo.getBySlug.mockResolvedValue(null)

      await service.bulkDeleteLinks('user-1', ['ghost1', 'ghost2'])

      expect(repo.bulkDelete).toHaveBeenCalledWith([])
    })

    it('retries failed getBySlug and succeeds', async () => {
      vi.useFakeTimers()

      repo.getBySlug
        .mockRejectedValueOnce(new Error('DynamoDB timeout'))
        .mockResolvedValueOnce(makeLink({ PK: 'abc' }))

      const promise = service.bulkDeleteLinks('user-1', ['abc'])
      await vi.runAllTimersAsync()
      await promise

      expect(repo.bulkDelete).toHaveBeenCalledWith(['abc'])

      vi.useRealTimers()
    })

    it('throws InternalServerError when all retries are exhausted', async () => {
      vi.useFakeTimers()

      repo.getBySlug.mockRejectedValue(new Error('DynamoDB timeout'))

      const promise = service.bulkDeleteLinks('user-1', ['abc'])
      promise.catch(() => {})
      await vi.runAllTimersAsync()

      await expect(promise).rejects.toMatchObject({ status: 500 })
      expect(repo.bulkDelete).not.toHaveBeenCalled()

      vi.useRealTimers()
    })
  })

  // ─── deleteAllUserLinks ────────────────────────────────────────────────────

  describe('deleteAllUserLinks', () => {
    it('cancels schedulers only for links with expiresAt', async () => {
      repo.getAll.mockResolvedValueOnce({
        items: [
          makeLink({ PK: 'with-expiry', expiresAt: future }),
          makeLink({ PK: 'no-expiry' }),
        ],
        nextCursor: undefined,
      })

      await service.deleteAllUserLinks('user-1')

      expect(scheduler.cancelExpiry).toHaveBeenCalledWith('with-expiry')
      expect(scheduler.cancelExpiry).not.toHaveBeenCalledWith('no-expiry')
      expect(repo.deleteAllByUser).toHaveBeenCalledWith('user-1')
    })

    it('handles pagination and processes all pages', async () => {
      repo.getAll
        .mockResolvedValueOnce({
          items: [makeLink({ PK: 'link-1', expiresAt: future })],
          nextCursor: 'cursor-1',
        })
        .mockResolvedValueOnce({
          items: [makeLink({ PK: 'link-2', expiresAt: future })],
          nextCursor: undefined,
        })

      await service.deleteAllUserLinks('user-1')

      expect(scheduler.cancelExpiry).toHaveBeenCalledWith('link-1')
      expect(scheduler.cancelExpiry).toHaveBeenCalledWith('link-2')
      expect(repo.deleteAllByUser).toHaveBeenCalledWith('user-1')
    })

    it('skips scheduler calls when no schedulerService', async () => {
      const serviceNoScheduler = new LinksService(
        repo as unknown as LinksRepository,
      )
      repo.getAll.mockResolvedValueOnce({
        items: [makeLink({ expiresAt: future })],
        nextCursor: undefined,
      })

      await serviceNoScheduler.deleteAllUserLinks('user-1')

      expect(scheduler.cancelExpiry).not.toHaveBeenCalled()
      expect(repo.deleteAllByUser).toHaveBeenCalledWith('user-1')
    })
  })
})

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ClicksService } from '../clicks.service'
import type { ClicksRepository } from '../../repositories/clicks.repository'
import type {
  LinksRepository,
  LinkItem,
} from '../../repositories/links.repository'

function makeLink(overrides?: Partial<LinkItem>): LinkItem {
  return {
    PK: 'abc123',
    SK: 'LINK',
    originalUrl: 'https://example.com',
    status: 'active',
    createdAt: 1000000,
    updatedAt: 1000001,
    clickCount: 5,
    userId: 'user-1',
    ...overrides,
  }
}

describe('ClicksService', () => {
  let linksRepo: { getBySlug: ReturnType<typeof vi.fn> }
  let clicksRepo: { getBySlug: ReturnType<typeof vi.fn> }
  let service: ClicksService

  beforeEach(() => {
    vi.clearAllMocks()
    linksRepo = { getBySlug: vi.fn() }
    clicksRepo = { getBySlug: vi.fn() }
    service = new ClicksService(
      clicksRepo as unknown as ClicksRepository,
      linksRepo as unknown as LinksRepository,
    )
  })

  it('throws NotFound when link does not exist', async () => {
    linksRepo.getBySlug.mockResolvedValueOnce(null)

    await expect(
      service.getClicks({ userId: 'user-1', slug: 'abc' }),
    ).rejects.toMatchObject({ status: 404 })
  })

  it('throws Forbidden when link belongs to another user', async () => {
    linksRepo.getBySlug.mockResolvedValueOnce(makeLink({ userId: 'other' }))

    await expect(
      service.getClicks({ userId: 'user-1', slug: 'abc' }),
    ).rejects.toMatchObject({ status: 403 })
  })

  it('returns paginated clicks for the link owner', async () => {
    const mockClicks = { items: [], nextCursor: undefined }
    linksRepo.getBySlug.mockResolvedValueOnce(makeLink())
    clicksRepo.getBySlug.mockResolvedValueOnce(mockClicks)

    const result = await service.getClicks({ userId: 'user-1', slug: 'abc123' })

    expect(clicksRepo.getBySlug).toHaveBeenCalledWith(
      expect.objectContaining({ slug: 'abc123' }),
    )
    expect(result).toBe(mockClicks)
  })

  it('passes date range and cursor to repository', async () => {
    linksRepo.getBySlug.mockResolvedValueOnce(makeLink())
    clicksRepo.getBySlug.mockResolvedValueOnce({
      items: [],
      nextCursor: undefined,
    })

    await service.getClicks({
      userId: 'user-1',
      slug: 'abc123',
      from: 1000000,
      to: 2000000,
      cursor: 'cursor-token',
    })

    expect(clicksRepo.getBySlug).toHaveBeenCalledWith({
      slug: 'abc123',
      from: 1000000,
      to: 2000000,
      cursor: 'cursor-token',
    })
  })
})

import { describe, it, expect } from 'vitest'
import { mapLink, mapPaginatedLinks } from '../links.mapper'
import type { LinkItem } from '../../repositories/links.repository'

const baseItem: LinkItem = {
  PK: 'abc123',
  SK: 'LINK',
  originalUrl: 'https://example.com',
  status: 'active',
  createdAt: 1000000,
  updatedAt: 1000001,
  clickCount: 5,
  userId: 'user-1',
}

describe('mapLink', () => {
  it('maps PK to slug', () => {
    expect(mapLink(baseItem).slug).toBe('abc123')
  })

  it('maps all required fields correctly', () => {
    const result = mapLink(baseItem)
    expect(result).toMatchObject({
      slug: 'abc123',
      originalUrl: 'https://example.com',
      status: 'active',
      createdAt: 1000000,
      updatedAt: 1000001,
      clickCount: 5,
    })
  })

  it('includes expiresAt when defined', () => {
    const result = mapLink({ ...baseItem, expiresAt: 2000000 })
    expect(result.expiresAt).toBe(2000000)
  })

  it('omits expiresAt when undefined', () => {
    const result = mapLink(baseItem)
    expect('expiresAt' in result).toBe(false)
  })

  it('does not expose DynamoDB fields (PK, SK)', () => {
    const result = mapLink(baseItem) as unknown as Record<string, unknown>
    expect('PK' in result).toBe(false)
    expect('SK' in result).toBe(false)
  })

  it('does not expose internal fields (userId)', () => {
    const result = mapLink(baseItem) as unknown as Record<string, unknown>
    expect('userId' in result).toBe(false)
  })
})

describe('mapPaginatedLinks', () => {
  it('maps items array', () => {
    const result = mapPaginatedLinks({
      items: [baseItem],
      nextCursor: undefined,
    })
    expect(result.links).toHaveLength(1)
    expect(result.links[0].slug).toBe('abc123')
  })

  it('includes nextCursor when present', () => {
    const result = mapPaginatedLinks({ items: [], nextCursor: 'cursor-token' })
    expect(result.nextCursor).toBe('cursor-token')
  })

  it('omits nextCursor when absent', () => {
    const result = mapPaginatedLinks({ items: [], nextCursor: undefined })
    expect('nextCursor' in result).toBe(false)
  })
})

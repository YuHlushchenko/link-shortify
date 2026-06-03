import { describe, it, expect } from 'vitest'
import { mapClick, mapPaginatedClicks } from '../clicks.mapper'
import type { ClickItem } from '../../repositories/clicks.repository'

const baseItem: ClickItem = {
  PK: 'abc123',
  SK: 'CLICK#click-1',
  clickId: 'click-1',
  clickedAt: 1000000,
}

describe('mapClick', () => {
  it('maps required fields', () => {
    const result = mapClick(baseItem)
    expect(result).toMatchObject({ clickId: 'click-1', clickedAt: 1000000 })
  })

  it('includes optional fields when present', () => {
    const result = mapClick({
      ...baseItem,
      country: 'UA',
      referrer: 'https://twitter.com',
      userAgent: 'Mozilla/5.0',
    })
    expect(result.country).toBe('UA')
    expect(result.referrer).toBe('https://twitter.com')
    expect(result.userAgent).toBe('Mozilla/5.0')
  })

  it.each(['country', 'referrer', 'userAgent'] as const)(
    'omits %s when absent',
    (field) => {
      const result = mapClick(baseItem)
      expect(field in result).toBe(false)
    },
  )

  it('does not expose DynamoDB fields (PK, SK)', () => {
    const result = mapClick(baseItem) as unknown as Record<string, unknown>
    expect('PK' in result).toBe(false)
    expect('SK' in result).toBe(false)
  })
})

describe('mapPaginatedClicks', () => {
  it('maps items array', () => {
    const result = mapPaginatedClicks({
      items: [baseItem],
      nextCursor: undefined,
    })
    expect(result.clicks).toHaveLength(1)
  })

  it('includes nextCursor when present', () => {
    const result = mapPaginatedClicks({ items: [], nextCursor: 'cursor-token' })
    expect(result.nextCursor).toBe('cursor-token')
  })

  it('omits nextCursor when absent', () => {
    const result = mapPaginatedClicks({ items: [], nextCursor: undefined })
    expect('nextCursor' in result).toBe(false)
  })
})

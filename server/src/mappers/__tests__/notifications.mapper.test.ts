import { describe, it, expect } from 'vitest'
import {
  mapNotification,
  mapPaginatedNotifications,
} from '../notifications.mapper'
import type { NotificationItem } from '../../repositories/notifications.repository'

const baseItem: NotificationItem = {
  PK: 'user-1',
  SK: 'NOTIFICATION#notif-1',
  notificationId: 'notif-1',
  message: 'Your link expired',
  isRead: false,
  createdAt: 1000000,
}

describe('mapNotification', () => {
  it('maps all fields correctly', () => {
    const result = mapNotification(baseItem)
    expect(result).toEqual({
      notificationId: 'notif-1',
      message: 'Your link expired',
      isRead: false,
      createdAt: 1000000,
    })
  })

  it('does not expose DynamoDB fields (PK, SK)', () => {
    const result = mapNotification(baseItem) as unknown as Record<
      string,
      unknown
    >
    expect('PK' in result).toBe(false)
    expect('SK' in result).toBe(false)
  })
})

describe('mapPaginatedNotifications', () => {
  it('maps items array', () => {
    const result = mapPaginatedNotifications({
      items: [baseItem],
      nextCursor: undefined,
    })
    expect(result.notifications).toHaveLength(1)
    expect(result.notifications[0].notificationId).toBe('notif-1')
  })

  it('includes nextCursor when present', () => {
    const result = mapPaginatedNotifications({
      items: [],
      nextCursor: 'cursor-token',
    })
    expect(result.nextCursor).toBe('cursor-token')
  })

  it('omits nextCursor when absent', () => {
    const result = mapPaginatedNotifications({
      items: [],
      nextCursor: undefined,
    })
    expect('nextCursor' in result).toBe(false)
  })
})

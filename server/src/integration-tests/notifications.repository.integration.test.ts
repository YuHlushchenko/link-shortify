import { describe, it, expect } from 'vitest'
import { NotificationsRepository } from '../repositories/notifications.repository'

const repo = new NotificationsRepository()
const uid = () => Math.random().toString(36).slice(2, 10)

function makeInput(userId: string, overrides: Record<string, unknown> = {}) {
  return {
    userId,
    notificationId: uid(),
    message: 'Your link expired',
    createdAt: Math.floor(Date.now() / 1000),
    ...overrides,
  }
}

describe('NotificationsRepository', () => {
  describe('create + getAllByUser', () => {
    it('creates a notification and retrieves it', async () => {
      const userId = 'user-' + uid()
      const input = makeInput(userId)
      await repo.create(input)

      const result = await repo.getAllByUser({ userId })
      expect(result.items.length).toBe(1)
      expect(result.items[0].notificationId).toBe(input.notificationId)
      expect(result.items[0].message).toBe(input.message)
      expect(result.items[0].isRead).toBe(false)
    })

    it('SK starts with NOTIFICATION# prefix', async () => {
      const userId = 'user-' + uid()
      await repo.create(makeInput(userId))

      const result = await repo.getAllByUser({ userId })
      expect(result.items[0].SK).toMatch(/^NOTIFICATION#/)
    })

    it('returns newest notifications first', async () => {
      const userId = 'user-' + uid()
      await repo.create(makeInput(userId, { createdAt: 1000 }))
      await new Promise((r) => setTimeout(r, 5)) // ensure different SK timestamps
      await repo.create(makeInput(userId, { createdAt: 2000 }))

      const result = await repo.getAllByUser({ userId })
      expect(result.items[0].createdAt).toBeGreaterThanOrEqual(
        result.items[1].createdAt,
      )
    })

    it('unreadOnly filters out read notifications', async () => {
      const userId = 'user-' + uid()
      await repo.create(makeInput(userId))
      const toRead = makeInput(userId)
      await repo.create(toRead)

      const all = await repo.getAllByUser({ userId })
      await repo.markAsRead(
        userId,
        all.items.find((n) => n.notificationId === toRead.notificationId)!.SK,
      )

      const unread = await repo.getAllByUser({ userId, unreadOnly: true })
      expect(unread.items.length).toBe(1)
      expect(unread.items[0].isRead).toBe(false)
    })
  })

  describe('getByNotificationId', () => {
    it('returns notification by notificationId', async () => {
      const userId = 'user-' + uid()
      const input = makeInput(userId)
      await repo.create(input)

      const item = await repo.getByNotificationId(userId, input.notificationId)
      expect(item).not.toBeNull()
      expect(item!.notificationId).toBe(input.notificationId)
    })

    it('returns null for unknown notificationId', async () => {
      const item = await repo.getByNotificationId('user-' + uid(), 'no-such-id')
      expect(item).toBeNull()
    })
  })

  describe('markAsRead', () => {
    it('marks notification as read', async () => {
      const userId = 'user-' + uid()
      await repo.create(makeInput(userId))

      const { items } = await repo.getAllByUser({ userId })
      await repo.markAsRead(userId, items[0].SK)

      const updated = await repo.getAllByUser({ userId })
      expect(updated.items[0].isRead).toBe(true)
    })

    it('throws 404 for non-existent notification', async () => {
      await expect(
        repo.markAsRead('user-' + uid(), 'NOTIFICATION#9999999'),
      ).rejects.toMatchObject({ status: 404 })
    })
  })

  describe('getAllByUser pagination', () => {
    it('returns nextCursor and fetches second page', async () => {
      const userId = 'user-' + uid()
      for (let i = 0; i < 21; i++) {
        await new Promise((r) => setTimeout(r, 2)) // unique SK timestamps
        await repo.create(makeInput(userId))
      }

      const page1 = await repo.getAllByUser({ userId })
      expect(page1.items.length).toBe(20)
      expect(page1.nextCursor).toBeDefined()

      const page2 = await repo.getAllByUser({
        userId,
        cursor: page1.nextCursor,
      })
      expect(page2.items.length).toBe(1)
      expect(page2.nextCursor).toBeUndefined()
    })
  })

  describe('markAllAsRead', () => {
    it('marks all unread notifications as read', async () => {
      const userId = 'user-' + uid()
      await repo.create(makeInput(userId))
      await new Promise((r) => setTimeout(r, 5))
      await repo.create(makeInput(userId))

      await repo.markAllAsRead(userId)

      const result = await repo.getAllByUser({ userId })
      expect(result.items.every((n) => n.isRead)).toBe(true)
    })
  })

  describe('deleteAllByUser', () => {
    it('deletes all notifications for user', async () => {
      const userId = 'user-' + uid()
      await repo.create(makeInput(userId))
      await new Promise((r) => setTimeout(r, 5))
      await repo.create(makeInput(userId))

      await repo.deleteAllByUser(userId)

      const result = await repo.getAllByUser({ userId })
      expect(result.items).toHaveLength(0)
    })

    it('deletes all notifications across pagination and batch chunks', async () => {
      const userId = 'user-' + uid()
      for (let i = 0; i < 26; i++) {
        await new Promise((r) => setTimeout(r, 2))
        await repo.create(makeInput(userId))
      }

      await repo.deleteAllByUser(userId)

      const result = await repo.getAllByUser({ userId })
      expect(result.items).toHaveLength(0)
    })
  })
})

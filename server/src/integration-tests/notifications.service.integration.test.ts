import { describe, it, expect, beforeEach } from 'vitest'
import { NotificationsService } from '../services/notifications.service'
import { NotificationsRepository } from '../repositories/notifications.repository'

const uid = () => Math.random().toString(36).slice(2, 10)

describe('NotificationsService', () => {
  let repo: NotificationsRepository
  let service: NotificationsService

  beforeEach(() => {
    repo = new NotificationsRepository()
    service = new NotificationsService(repo)
  })

  describe('createExpiredLinkNotification', () => {
    it('creates a notification with a message containing the slug', async () => {
      const userId = 'user-' + uid()
      const slug = 'my-link-' + uid()

      await service.createExpiredLinkNotification(userId, slug)

      const result = await service.getNotifications({ userId })
      expect(result.items.length).toBe(1)
      expect(result.items[0].message).toContain(slug)
      expect(result.items[0].isRead).toBe(false)
    })
  })

  describe('markNotificationRead', () => {
    it('marks a notification as read', async () => {
      const userId = 'user-' + uid()
      await service.createExpiredLinkNotification(userId, 'slug-' + uid())
      const { items } = await service.getNotifications({ userId })
      const notificationId = items[0].notificationId

      await service.markNotificationRead(userId, notificationId)

      const updated = await service.getNotifications({ userId })
      expect(updated.items[0].isRead).toBe(true)
    })

    it('throws 404 if notification does not exist', async () => {
      await expect(
        service.markNotificationRead(
          'user-' + uid(),
          'non-existent-id-' + uid(),
        ),
      ).rejects.toMatchObject({ status: 404 })
    })
  })

  describe('markAllNotificationsRead', () => {
    it('marks all notifications as read', async () => {
      const userId = 'user-' + uid()
      await service.createExpiredLinkNotification(userId, 'slug-1-' + uid())
      await new Promise((r) => setTimeout(r, 5)) // ensure unique SK timestamps
      await service.createExpiredLinkNotification(userId, 'slug-2-' + uid())
      await new Promise((r) => setTimeout(r, 5))
      await service.createExpiredLinkNotification(userId, 'slug-3-' + uid())

      await service.markAllNotificationsRead(userId)

      const unread = await service.getNotifications({
        userId,
        unreadOnly: true,
      })
      expect(unread.items.length).toBe(0)
    })

    it('does nothing when user has no notifications', async () => {
      await expect(
        service.markAllNotificationsRead('user-empty-' + uid()),
      ).resolves.toBeUndefined()
    })
  })

  describe('getNotifications', () => {
    it('returns all notifications for user', async () => {
      const userId = 'user-' + uid()
      await service.createExpiredLinkNotification(userId, 'slug-1-' + uid())
      await new Promise((r) => setTimeout(r, 5))
      await service.createExpiredLinkNotification(userId, 'slug-2-' + uid())

      const result = await service.getNotifications({ userId })

      expect(result.items.length).toBe(2)
    })

    it('filters unread notifications only', async () => {
      const userId = 'user-' + uid()
      await service.createExpiredLinkNotification(userId, 'slug-1-' + uid())
      await new Promise((r) => setTimeout(r, 5))
      await service.createExpiredLinkNotification(userId, 'slug-2-' + uid())

      const { items } = await service.getNotifications({ userId })
      await service.markNotificationRead(userId, items[0].notificationId)

      const unread = await service.getNotifications({
        userId,
        unreadOnly: true,
      })
      expect(unread.items.length).toBe(1)
      expect(unread.items[0].isRead).toBe(false)
    })
  })
})

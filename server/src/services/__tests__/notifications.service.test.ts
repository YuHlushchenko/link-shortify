import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NotificationsService } from '../notifications.service'
import type {
  NotificationsRepository,
  NotificationItem,
} from '../../repositories/notifications.repository'

function makeNotification(
  overrides?: Partial<NotificationItem>,
): NotificationItem {
  return {
    PK: 'user-1',
    SK: 'NOTIFICATION#notif-1',
    notificationId: 'notif-1',
    message: 'Your link expired',
    isRead: false,
    createdAt: 1000000,
    ...overrides,
  }
}

describe('NotificationsService', () => {
  let repo: {
    getAllByUser: ReturnType<typeof vi.fn>
    getByNotificationId: ReturnType<typeof vi.fn>
    markAsRead: ReturnType<typeof vi.fn>
    markAllAsRead: ReturnType<typeof vi.fn>
    create: ReturnType<typeof vi.fn>
  }
  let service: NotificationsService

  beforeEach(() => {
    vi.clearAllMocks()
    repo = {
      getAllByUser: vi.fn(),
      getByNotificationId: vi.fn(),
      markAsRead: vi.fn().mockResolvedValue(undefined),
      markAllAsRead: vi.fn().mockResolvedValue(undefined),
      create: vi.fn().mockResolvedValue(undefined),
    }
    service = new NotificationsService(
      repo as unknown as NotificationsRepository,
    )
  })

  describe('markNotificationRead', () => {
    it('throws NotFound when notification does not exist', async () => {
      repo.getByNotificationId.mockResolvedValueOnce(null)

      await expect(
        service.markNotificationRead('user-1', 'notif-1'),
      ).rejects.toMatchObject({ status: 404 })

      expect(repo.markAsRead).not.toHaveBeenCalled()
    })

    it('marks notification as read using SK from DB', async () => {
      const notification = makeNotification({ SK: 'NOTIFICATION#notif-1' })
      repo.getByNotificationId.mockResolvedValueOnce(notification)

      await service.markNotificationRead('user-1', 'notif-1')

      expect(repo.markAsRead).toHaveBeenCalledWith(
        'user-1',
        'NOTIFICATION#notif-1',
      )
    })
  })

  describe('createExpiredLinkNotification', () => {
    it('creates notification with correct message format', async () => {
      await service.createExpiredLinkNotification('user-1', 'my-link')

      expect(repo.create).toHaveBeenCalledWith(
        expect.objectContaining({
          userId: 'user-1',
          message: "Your link 'my-link' has expired and been deactivated.",
        }),
      )
    })

    it('generates a unique notificationId', async () => {
      await service.createExpiredLinkNotification('user-1', 'link-a')
      await service.createExpiredLinkNotification('user-1', 'link-b')

      const [call1, call2] = repo.create.mock.calls
      expect(call1[0].notificationId).toBeTruthy()
      expect(call1[0].notificationId).not.toBe(call2[0].notificationId)
    })
  })

  describe('markAllNotificationsRead', () => {
    it('delegates to repository', async () => {
      await service.markAllNotificationsRead('user-1')

      expect(repo.markAllAsRead).toHaveBeenCalledWith('user-1')
    })
  })
})

import createHttpError from 'http-errors'
import { nanoid } from 'nanoid'
import {
  NotificationsRepository,
  PaginatedNotifications,
} from '../repositories/notifications.repository'
import { createLayerLogger } from '../common/logger'
import { LogLayer } from '../common/types'

const logger = createLayerLogger(LogLayer.SERVICE)

export interface GetNotificationsInput {
  userId: string
  unreadOnly?: boolean
  cursor?: string
}

export class NotificationsService {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async getNotifications(
    input: GetNotificationsInput,
  ): Promise<PaginatedNotifications> {
    return this.notificationsRepository.getAllByUser(input)
  }

  async markNotificationRead(
    userId: string,
    notificationId: string,
  ): Promise<void> {
    const notification = await this.notificationsRepository.getByNotificationId(
      userId,
      notificationId,
    )

    if (!notification) throw createHttpError.NotFound('Notification not found')

    await this.notificationsRepository.markAsRead(userId, notification.SK)

    logger.info({
      text: 'notification marked as read',
      notificationId,
      userId,
    })
  }

  async createExpiredLinkNotification(
    userId: string,
    slug: string,
  ): Promise<void> {
    const now = Math.floor(Date.now() / 1000)

    await this.notificationsRepository.create({
      userId,
      notificationId: nanoid(),
      message: `Your link '${slug}' has expired and been deactivated.`,
      createdAt: now,
    })

    logger.info({ text: 'expired link notification created', userId, slug })
  }

  async markAllNotificationsRead(userId: string): Promise<void> {
    await this.notificationsRepository.markAllAsRead(userId)

    logger.info({ text: 'all notifications marked as read', userId })
  }
}

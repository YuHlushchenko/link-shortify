import createHttpError from 'http-errors'
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

  async getNotifications(input: GetNotificationsInput): Promise<PaginatedNotifications> {
    return this.notificationsRepository.getAllByUser(input)
  }

  async markNotificationRead(userId: string, notificationId: string): Promise<void> {
    const notification = await this.notificationsRepository.getByNotificationId(userId, notificationId)

    if (!notification) throw createHttpError.NotFound('Notification not found')

    await this.notificationsRepository.markAsRead(userId, notification.SK)

    logger.info({ text: 'notification marked as read', notificationId, userId })
  }

  async markAllNotificationsRead(userId: string): Promise<void> {
    await this.notificationsRepository.markAllAsRead(userId)

    logger.info({ text: 'all notifications marked as read', userId })
  }
}

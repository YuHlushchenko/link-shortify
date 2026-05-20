import { NotificationItem, PaginatedNotifications } from '../repositories/notifications.repository'

export interface NotificationResponse {
  notificationId: string
  message: string
  isRead: boolean
  createdAt: number
}

export interface PaginatedNotificationsResponse {
  notifications: NotificationResponse[]
  nextCursor?: string
}

export function mapNotification(item: NotificationItem): NotificationResponse {
  return {
    notificationId: item.notificationId,
    message: item.message,
    isRead: item.isRead,
    createdAt: item.createdAt,
  }
}

export function mapPaginatedNotifications(paginated: PaginatedNotifications): PaginatedNotificationsResponse {
  return {
    notifications: paginated.items.map(mapNotification),
    ...(paginated.nextCursor ? { nextCursor: paginated.nextCursor } : {}),
  }
}

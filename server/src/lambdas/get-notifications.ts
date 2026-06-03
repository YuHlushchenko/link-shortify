import { NotificationsRepository } from '../repositories/notifications.repository'
import { NotificationsService } from '../services/notifications.service'
import { mapPaginatedNotifications } from '../mappers/notifications.mapper'
import { createHandler } from '../common/middleware'
import { createLayerLogger } from '../common/logger'
import { LogLayer } from '../common/types'

const logger = createLayerLogger(LogLayer.LAMBDA)

const notificationsService = new NotificationsService(
  new NotificationsRepository(),
)

export const handler = createHandler(async (event) => {
  const userId = event.requestContext.authorizer.jwt.claims.sub as string
  const q = event.queryStringParameters ?? {}

  const result = await notificationsService.getNotifications({
    userId,
    unreadOnly: q.unreadOnly === 'true',
    cursor: q.cursor,
  })

  logger.info({
    text: 'GET /notifications',
    userId,
    count: result.items.length,
  })

  return { statusCode: 200, body: mapPaginatedNotifications(result) }
})

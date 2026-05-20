import { NotificationsRepository } from '../repositories/notifications.repository'
import { NotificationsService } from '../services/notifications.service'
import { createHandler } from '../common/middleware'
import { createLayerLogger } from '../common/logger'
import { LogLayer } from '../common/types'

const logger = createLayerLogger(LogLayer.LAMBDA)

const notificationsService = new NotificationsService(new NotificationsRepository())

export const handler = createHandler(async (event) => {
  const userId = event.requestContext.authorizer.jwt.claims.sub as string

  await notificationsService.markAllNotificationsRead(userId)

  logger.info({ text: 'PATCH /notifications', userId })

  return { statusCode: 204 }
})

import { LinksRepository } from '../repositories/links.repository'
import { NotificationsRepository } from '../repositories/notifications.repository'
import { NotificationsService } from '../services/notifications.service'
import { createLayerLogger } from '../common/logger'
import { LogLayer } from '../common/types'

const logger = createLayerLogger(LogLayer.LAMBDA)

const linksRepository = new LinksRepository()
const notificationsService = new NotificationsService(
  new NotificationsRepository(),
)

interface ExpireLinkEvent {
  slug: string
}

export const handler = async (event: ExpireLinkEvent): Promise<void> => {
  const { slug } = event

  logger.info({ text: 'expire-link triggered', slug })

  const link = await linksRepository.getBySlug(slug)

  if (!link || link.status !== 'active') {
    logger.info({ text: 'expire-link: link not active, skipping', slug })
    return
  }

  await linksRepository.update(slug, { status: 'expired' })

  // Use current userId from DB — link may have been claimed after schedule was created
  if (link.userId) {
    await notificationsService.createExpiredLinkNotification(link.userId, slug)
    logger.info({
      text: 'link expired and notification sent',
      slug,
      userId: link.userId,
    })
  } else {
    logger.info({ text: 'link expired (anonymous, no notification)', slug })
  }
}

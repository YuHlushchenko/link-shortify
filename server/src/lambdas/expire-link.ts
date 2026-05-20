import { LinksRepository } from "../repositories/links.repository";
import { NotificationsRepository } from "../repositories/notifications.repository";
import { NotificationsService } from "../services/notifications.service";
import { createLayerLogger } from "../common/logger";
import { LogLayer } from "../common/types";

const logger = createLayerLogger(LogLayer.LAMBDA);

const linksRepository = new LinksRepository();
const notificationsService = new NotificationsService(
  new NotificationsRepository(),
);

interface ExpireLinkEvent {
  slug: string;
  userId: string;
}

export const handler = async (event: ExpireLinkEvent): Promise<void> => {
  const { slug, userId } = event;

  logger.info({ text: "expire-link triggered", slug, userId });

  const link = await linksRepository.getBySlug(slug);

  if (!link || link.status !== "active") {
    logger.info({ text: "expire-link: link not active, skipping", slug });
    return;
  }

  await linksRepository.update(slug, { status: "expired" });
  await notificationsService.createExpiredLinkNotification(userId, slug);

  logger.info({ text: "link expired and notification sent", slug, userId });
};

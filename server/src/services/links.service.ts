import { customAlphabet } from "nanoid";
import createHttpError from "http-errors";
import {
  LinksRepository,
  LinkItem,
  PaginatedLinks,
  LinkStatus,
} from "../repositories/links.repository";
import { SchedulerService } from "./scheduler.service";
import { createLayerLogger } from "../common/logger";
import { LogLayer } from "../common/types";

const logger = createLayerLogger(LogLayer.SERVICE);

// URL-safe alphabet without lookalike chars
const generateSlug = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 6);

export interface GetLinksInput {
  userId: string;
  sortBy?: "createdAt" | "clickCount";
  order?: "asc" | "desc";
  status?: LinkStatus;
  cursor?: string;
}

export interface CreateLinkInput {
  userId: string;
  originalUrl: string;
  slug?: string;
  expiresAt?: number;
}

export interface UpdateLinkInput {
  status?: LinkStatus;
  expiresAt?: number | null;
}

export class LinksService {
  constructor(
    private linksRepository: LinksRepository,
    private schedulerService?: SchedulerService,
  ) {}

  async getLinks(input: GetLinksInput): Promise<PaginatedLinks> {
    return this.linksRepository.getAll(input);
  }

  async createLink(input: CreateLinkInput): Promise<LinkItem> {
    const now = Math.floor(Date.now() / 1000);
    let slug = input.slug;

    if (slug) {
      const existing = await this.linksRepository.getBySlug(slug);
      if (existing) {
        throw createHttpError.Conflict("Slug already exists");
      }
    } else {
      // generate unique slug, retry up to 3 times on collision
      for (let attempt = 0; attempt < 3; attempt++) {
        slug = generateSlug();
        const existing = await this.linksRepository.getBySlug(slug);
        if (!existing) break;
        if (attempt === 2)
          throw createHttpError.InternalServerError(
            "Failed to generate unique slug",
          );
      }
    }

    await this.linksRepository.create({
      slug: slug!,
      userId: input.userId,
      originalUrl: input.originalUrl,
      status: "active",
      createdAt: now,
      updatedAt: now,
      expiresAt: input.expiresAt,
    });

    if (input.expiresAt && this.schedulerService) {
      await this.schedulerService
        .scheduleExpiry(slug!, input.userId, input.expiresAt)
        .catch((err) =>
          logger.warn({
            text: "failed to schedule link expiry",
            slug,
            error: err?.message ?? err,
          }),
        );
    }

    logger.info({ text: "link created", slug, userId: input.userId });

    return (await this.linksRepository.getBySlug(slug!))!;
  }

  async updateLink(
    userId: string,
    slug: string,
    input: UpdateLinkInput,
  ): Promise<LinkItem> {
    const link = await this.linksRepository.getBySlug(slug);

    if (!link) throw createHttpError.NotFound("Link not found");
    if (link.userId !== userId)
      throw createHttpError.Forbidden("Access denied");
    if (link.status === "deleted")
      throw createHttpError.Gone("Link has been deleted");

    await this.linksRepository.update(slug, input);

    if (this.schedulerService) {
      await this.manageScheduleOnUpdate(slug, link.userId, input).catch((err) =>
        logger.warn({
          text: "failed to manage expiry schedule on update",
          slug,
          error: err?.message ?? err,
        }),
      );
    }

    return (await this.linksRepository.getBySlug(slug))!;
  }

  private async manageScheduleOnUpdate(
    slug: string,
    userId: string,
    input: UpdateLinkInput,
  ): Promise<void> {
    const deactivating = input.status === "inactive";
    const removingExpiry = input.expiresAt === null;
    const updatingExpiry = typeof input.expiresAt === "number";

    if (deactivating || removingExpiry) {
      await this.schedulerService!.cancelExpiry(slug);
    } else if (updatingExpiry) {
      await this.schedulerService!.cancelExpiry(slug);
      await this.schedulerService!.scheduleExpiry(
        slug,
        userId,
        input.expiresAt!,
      );
    }
  }

  async deleteLink(userId: string, slug: string): Promise<void> {
    const link = await this.linksRepository.getBySlug(slug);

    if (!link) throw createHttpError.NotFound("Link not found");
    if (link.userId !== userId)
      throw createHttpError.Forbidden("Access denied");

    await this.schedulerService?.cancelExpiry(slug).catch((err) =>
      logger.warn({
        text: "failed to cancel expiry schedule on delete",
        slug,
        error: err?.message ?? err,
      }),
    );
    await this.linksRepository.deleteOne(slug);

    logger.info({ text: "link deleted", slug, userId });
  }

  async bulkDeleteLinks(userId: string, slugs: string[]): Promise<void> {
    const linkMap = new Map<string, LinkItem | null>();
    let failedSlugs = slugs;

    const initial = await Promise.allSettled(
      slugs.map((slug) => this.linksRepository.getBySlug(slug)),
    );

    const stillPending: string[] = [];
    initial.forEach((result, index) => {
      const slug = slugs[index];
      if (result.status === "fulfilled") {
        linkMap.set(slug, result.value);
      } else {
        stillPending.push(slug);
        logger.error({
          text: "Failed to fetch link for ownership check",
          slug,
          error: result.reason?.message || result.reason,
        });
      }
    });

    failedSlugs = stillPending;

    for (let retry = 1; retry <= 2; retry++) {
      if (failedSlugs.length === 0) break;

      await new Promise((resolve) => setTimeout(resolve, 500 * retry));

      const retryResults = await Promise.allSettled(
        failedSlugs.map((slug) => this.linksRepository.getBySlug(slug)),
      );
      const nextFailed: string[] = [];

      retryResults.forEach((result, i) => {
        const slug = failedSlugs[i];
        if (result.status === "fulfilled") {
          linkMap.set(slug, result.value);
          logger.info({ text: "link fetch retry succeeded", retry, slug });
        } else {
          nextFailed.push(slug);
          logger.error({
            text: "link fetch retry failed",
            retry,
            slug,
            error: result.reason?.message || result.reason,
          });
        }
      });

      failedSlugs = nextFailed;
    }

    if (failedSlugs.length > 0) {
      throw createHttpError.InternalServerError(
        "Failed to verify ownership for some links",
      );
    }

    const unauthorized = [...linkMap.values()].find(
      (link) => link && link.userId !== userId,
    );
    if (unauthorized) throw createHttpError.Forbidden("Access denied");

    if (this.schedulerService) {
      await Promise.allSettled(
        slugs.map((s) => this.schedulerService!.cancelExpiry(s)),
      );
    }
    await this.linksRepository.bulkDelete(slugs);

    logger.info({ text: "bulk delete links", count: slugs.length, userId });
  }

  async deleteAllUserLinks(userId: string): Promise<void> {
    if (this.schedulerService) {
      let cursor: string | undefined;
      do {
        const page = await this.linksRepository.getAll({ userId, cursor });
        const slugsWithExpiry = page.items
          .filter((l) => l.expiresAt !== undefined)
          .map((l) => l.PK);
        if (slugsWithExpiry.length > 0) {
          await Promise.allSettled(
            slugsWithExpiry.map((s) => this.schedulerService!.cancelExpiry(s)),
          );
        }
        cursor = page.nextCursor;
      } while (cursor);
    }

    await this.linksRepository.deleteAllByUser(userId);
  }
}

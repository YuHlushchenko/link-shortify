import { LinkItem, PaginatedLinks } from "../repositories/links.repository";

export interface LinkResponse {
  slug: string;
  originalUrl: string;
  status: string;
  createdAt: number;
  updatedAt: number;
  expiresAt?: number;
  clickCount: number;
}

export interface PaginatedLinksResponse {
  links: LinkResponse[];
  nextCursor?: string;
}

export function mapLink(item: LinkItem): LinkResponse {
  return {
    slug: item.PK,
    originalUrl: item.originalUrl,
    status: item.status,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    clickCount: item.clickCount,
    ...(item.expiresAt !== undefined ? { expiresAt: item.expiresAt } : {}),
  };
}

export function mapPaginatedLinks(
  paginated: PaginatedLinks,
): PaginatedLinksResponse {
  return {
    links: paginated.items.map(mapLink),
    ...(paginated.nextCursor ? { nextCursor: paginated.nextCursor } : {}),
  };
}

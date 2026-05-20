import { ClickItem, PaginatedClicks } from "../repositories/clicks.repository";

export interface ClickResponse {
  clickId: string;
  clickedAt: number;
  country?: string;
  referrer?: string;
  userAgent?: string;
}

export interface PaginatedClicksResponse {
  clicks: ClickResponse[];
  nextCursor?: string;
}

export function mapClick(item: ClickItem): ClickResponse {
  return {
    clickId: item.clickId,
    clickedAt: item.clickedAt,
    ...(item.country ? { country: item.country } : {}),
    ...(item.referrer ? { referrer: item.referrer } : {}),
    ...(item.userAgent ? { userAgent: item.userAgent } : {}),
  };
}

export function mapPaginatedClicks(
  paginated: PaginatedClicks,
): PaginatedClicksResponse {
  return {
    clicks: paginated.items.map(mapClick),
    ...(paginated.nextCursor ? { nextCursor: paginated.nextCursor } : {}),
  };
}

import createHttpError from "http-errors";
import { IValidator, ValidationError, LogLayer } from "../common/types";
import { createLayerLogger } from "../common/logger";
import { LinkStatus } from "../repositories/links.repository";

const logger = createLayerLogger(LogLayer.VALIDATION);

export enum LinkSortBy {
  CREATED_AT = "createdAt",
  CLICK_COUNT = "clickCount",
}

export enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

const VALID_SORT_BY = Object.values(LinkSortBy);
const VALID_ORDER = Object.values(SortOrder);
const VALID_STATUSES: LinkStatus[] = ["active", "inactive", "deleted"];

export interface GetLinksRequest {
  sortBy?: unknown;
  order?: unknown;
  status?: unknown;
}

export class GetLinksValidator implements IValidator<GetLinksRequest> {
  private errors: ValidationError[] = [];

  validate(request: GetLinksRequest): void {
    this.errors = [];

    this.validateSortBy(request.sortBy);
    this.validateOrder(request.order);
    this.validateStatus(request.status);

    if (this.errors.length > 0) {
      logger.warn({ text: "GetLinks validation failed", errors: this.errors });
      throw createHttpError.BadRequest(JSON.stringify({ errors: this.errors }));
    }
  }

  private validateSortBy(value: unknown): void {
    if (value === undefined || value === null) return;

    if (!VALID_SORT_BY.includes(value as LinkSortBy)) {
      this.errors.push({
        field: "sortBy",
        message: `'sortBy' must be one of: ${VALID_SORT_BY.join(", ")}`,
      });
    }
  }

  private validateOrder(value: unknown): void {
    if (value === undefined || value === null) return;

    if (!VALID_ORDER.includes(value as SortOrder)) {
      this.errors.push({
        field: "order",
        message: `'order' must be one of: ${VALID_ORDER.join(", ")}`,
      });
    }
  }

  private validateStatus(value: unknown): void {
    if (value === undefined || value === null) return;

    if (!VALID_STATUSES.includes(value as LinkStatus)) {
      this.errors.push({
        field: "status",
        message: `'status' must be one of: ${VALID_STATUSES.join(", ")}`,
      });
    }
  }
}

import createHttpError from "http-errors";
import { IValidator, ValidationError, LogLayer } from "../common/types";
import { createLayerLogger } from "../common/logger";

const logger = createLayerLogger(LogLayer.VALIDATION);

const VALID_URL_PROTOCOLS = new Set(["http:", "https:"]);
const ORIGINAL_URL_MAX_LENGTH = 2048;
const SLUG_PATTERN = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/;
const SLUG_MIN_LENGTH = 3;
const SLUG_MAX_LENGTH = 50;

export interface CreateLinkRequest {
  originalUrl: unknown;
  slug?: unknown;
  expiresAt?: unknown;
}

export class CreateLinkValidator implements IValidator<CreateLinkRequest> {
  private errors: ValidationError[] = [];

  validate(request: CreateLinkRequest): void {
    this.errors = [];

    this.validateOriginalUrl(request.originalUrl);
    this.validateSlug(request.slug);
    this.validateExpiresAt(request.expiresAt);

    if (this.errors.length > 0) {
      logger.warn({
        text: "CreateLink validation failed",
        errors: this.errors,
      });
      throw createHttpError.BadRequest(JSON.stringify({ errors: this.errors }));
    }
  }

  private validateOriginalUrl(value: unknown): void {
    if (!value || typeof value !== "string" || value.trim() === "") {
      this.errors.push({
        field: "originalUrl",
        message: "'originalUrl' is required",
      });
      return;
    }

    if (value.length > ORIGINAL_URL_MAX_LENGTH) {
      this.errors.push({
        field: "originalUrl",
        message: `'originalUrl' must not exceed ${ORIGINAL_URL_MAX_LENGTH} characters`,
      });
      return;
    }

    let parsed: URL;
    try {
      parsed = new URL(value);
    } catch {
      this.errors.push({
        field: "originalUrl",
        message: "'originalUrl' must be a valid URL",
      });
      return;
    }

    if (!VALID_URL_PROTOCOLS.has(parsed.protocol)) {
      this.errors.push({
        field: "originalUrl",
        message: "'originalUrl' must use http or https",
      });
    }
  }

  private validateSlug(value: unknown): void {
    if (value === undefined || value === null) return;

    if (typeof value !== "string") {
      this.errors.push({ field: "slug", message: "'slug' must be a string" });
      return;
    }

    if (value.length < SLUG_MIN_LENGTH || value.length > SLUG_MAX_LENGTH) {
      this.errors.push({
        field: "slug",
        message: `'slug' must be between ${SLUG_MIN_LENGTH} and ${SLUG_MAX_LENGTH} characters`,
      });
      return;
    }

    if (!SLUG_PATTERN.test(value)) {
      this.errors.push({
        field: "slug",
        message:
          "'slug' must contain only lowercase letters, digits, and hyphens, and cannot start or end with a hyphen",
      });
    }
  }

  private validateExpiresAt(value: unknown): void {
    if (value === undefined || value === null) return;

    if (typeof value !== "number" || !Number.isInteger(value)) {
      this.errors.push({
        field: "expiresAt",
        message: "'expiresAt' must be an integer Unix timestamp",
      });
      return;
    }

    const now = Math.floor(Date.now() / 1000);
    if (value <= now) {
      this.errors.push({
        field: "expiresAt",
        message: "'expiresAt' must be in the future",
      });
    }
  }
}

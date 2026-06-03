import createHttpError from 'http-errors'
import { IValidator, ValidationError, LogLayer } from '../common/types'
import { createLayerLogger } from '../common/logger'
import { LinkStatus } from '../repositories/links.repository'

const logger = createLayerLogger(LogLayer.VALIDATION)

const UPDATABLE_STATUSES: LinkStatus[] = ['active', 'inactive']

export interface UpdateLinkRequest {
  slug: string
  status?: unknown
  expiresAt?: unknown
}

export class UpdateLinkValidator implements IValidator<UpdateLinkRequest> {
  private errors: ValidationError[] = []

  validate(request: UpdateLinkRequest): void {
    this.errors = []

    this.validateSlug(request.slug)
    this.validateAtLeastOneField(request)
    this.validateStatus(request.status)
    this.validateExpiresAt(request.expiresAt)

    if (this.errors.length > 0) {
      logger.warn({
        text: 'UpdateLink validation failed',
        slug: request.slug,
        errors: this.errors,
      })
      throw createHttpError.BadRequest(JSON.stringify({ errors: this.errors }))
    }
  }

  private validateSlug(value: string): void {
    if (!value || value.trim() === '') {
      this.errors.push({
        field: 'slug',
        message: "'slug' path parameter is required",
      })
    }
  }

  private validateAtLeastOneField(request: UpdateLinkRequest): void {
    if (request.status === undefined && request.expiresAt === undefined) {
      this.errors.push({
        field: 'body',
        message: 'At least one field must be provided: status, expiresAt',
      })
    }
  }

  private validateStatus(value: unknown): void {
    if (value === undefined) return

    if (!UPDATABLE_STATUSES.includes(value as LinkStatus)) {
      this.errors.push({
        field: 'status',
        message: `'status' must be one of: ${UPDATABLE_STATUSES.join(', ')}`,
      })
    }
  }

  private validateExpiresAt(value: unknown): void {
    if (value === undefined || value === null) return

    if (typeof value !== 'number' || !Number.isInteger(value)) {
      this.errors.push({
        field: 'expiresAt',
        message:
          "'expiresAt' must be an integer Unix timestamp or null to remove expiration",
      })
      return
    }

    const now = Math.floor(Date.now() / 1000)
    if (value <= now) {
      this.errors.push({
        field: 'expiresAt',
        message: "'expiresAt' must be in the future",
      })
    }
  }
}

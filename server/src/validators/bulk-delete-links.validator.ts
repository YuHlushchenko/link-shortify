import createHttpError from 'http-errors'
import { IValidator, ValidationError, LogLayer } from '../common/types'
import { createLayerLogger } from '../common/logger'

const logger = createLayerLogger(LogLayer.VALIDATION)

const MAX_BULK_DELETE = 100
const SLUG_MAX_LENGTH = 50

export interface BulkDeleteLinksRequest {
  slugs: unknown
}

export class BulkDeleteLinksValidator
  implements IValidator<BulkDeleteLinksRequest>
{
  private errors: ValidationError[] = []

  validate(request: BulkDeleteLinksRequest): void {
    this.errors = []

    this.validateSlugs(request.slugs)

    if (this.errors.length > 0) {
      logger.warn({
        text: 'BulkDeleteLinks validation failed',
        errors: this.errors,
      })
      throw createHttpError.BadRequest(JSON.stringify({ errors: this.errors }))
    }
  }

  private validateSlugs(value: unknown): void {
    if (!Array.isArray(value)) {
      this.errors.push({ field: 'slugs', message: "'slugs' must be an array" })
      return
    }

    if (value.length === 0) {
      this.errors.push({
        field: 'slugs',
        message: "'slugs' must not be empty",
      })
      return
    }

    if (value.length > MAX_BULK_DELETE) {
      this.errors.push({
        field: 'slugs',
        message: `'slugs' must not exceed ${MAX_BULK_DELETE} items`,
      })
      return
    }

    const hasNonStrings = value.some((s) => typeof s !== 'string')
    if (hasNonStrings) {
      this.errors.push({
        field: 'slugs',
        message: "'slugs' must contain only strings",
      })
      return
    }

    const hasEmpty = value.some((s) => (s as string).trim() === '')
    if (hasEmpty) {
      this.errors.push({
        field: 'slugs',
        message: "'slugs' must not contain empty strings",
      })
      return
    }

    const hasTooLong = (value as string[]).some(
      (s) => s.length > SLUG_MAX_LENGTH,
    )
    if (hasTooLong) {
      this.errors.push({
        field: 'slugs',
        message: `'slugs' items must not exceed ${SLUG_MAX_LENGTH} characters`,
      })
      return
    }

    const uniqueSlugs = new Set(value as string[])
    if (uniqueSlugs.size !== value.length) {
      this.errors.push({
        field: 'slugs',
        message: "'slugs' must not contain duplicate values",
      })
    }
  }
}

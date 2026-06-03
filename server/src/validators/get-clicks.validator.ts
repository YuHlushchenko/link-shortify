import createHttpError from 'http-errors'
import { IValidator, ValidationError, LogLayer } from '../common/types'
import { createLayerLogger } from '../common/logger'

const logger = createLayerLogger(LogLayer.VALIDATION)

export interface GetClicksRequest {
  slug: string
  from?: unknown
  to?: unknown
}

export class GetClicksValidator implements IValidator<GetClicksRequest> {
  private errors: ValidationError[] = []

  validate(request: GetClicksRequest): void {
    this.errors = []

    this.validateSlug(request.slug)
    this.validateDateRange(request.from, request.to)

    if (this.errors.length > 0) {
      logger.warn({
        text: 'GetClicks validation failed',
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

  private validateDateRange(from: unknown, to: unknown): void {
    const fromNum = from !== undefined && from !== '' ? Number(from) : null
    const toNum = to !== undefined && to !== '' ? Number(to) : null

    if (fromNum !== null && (!Number.isInteger(fromNum) || isNaN(fromNum))) {
      this.errors.push({
        field: 'from',
        message: "'from' must be an integer Unix timestamp",
      })
    }

    if (toNum !== null && (!Number.isInteger(toNum) || isNaN(toNum))) {
      this.errors.push({
        field: 'to',
        message: "'to' must be an integer Unix timestamp",
      })
    }

    if (
      fromNum !== null &&
      toNum !== null &&
      !isNaN(fromNum) &&
      !isNaN(toNum) &&
      fromNum > toNum
    ) {
      this.errors.push({
        field: 'from/to',
        message: "'from' must not be greater than 'to'",
      })
    }
  }
}

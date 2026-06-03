import { describe, it, expect } from 'vitest'
import { HttpError } from 'http-errors'
import { GetLinksValidator } from '../get-links.validator'

function getErrors(fn: () => void) {
  try {
    fn()
    return []
  } catch (e) {
    if (e instanceof HttpError && e.status === 400) {
      return JSON.parse(e.message).errors as {
        field: string
        message: string
      }[]
    }
    throw e
  }
}

const validator = new GetLinksValidator()
const validate = (req: object) => () => validator.validate(req as never)

describe('GetLinksValidator', () => {
  describe('valid input', () => {
    it('accepts empty params (all optional)', () => {
      expect(validate({})).not.toThrow()
    })

    it('accepts all valid params', () => {
      expect(
        validate({
          sortBy: 'createdAt',
          order: 'asc',
          status: 'active',
          from: '1000000',
          to: '2000000',
        }),
      ).not.toThrow()
    })
  })

  describe('sortBy', () => {
    it.each(['createdAt', 'clickCount'])('accepts sortBy: %s', (sortBy) => {
      expect(validate({ sortBy })).not.toThrow()
    })

    it('rejects invalid sortBy', () => {
      const errors = getErrors(validate({ sortBy: 'invalid' }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'sortBy',
          message: expect.stringContaining('createdAt'),
        }),
      )
    })
  })

  describe('order', () => {
    it.each(['asc', 'desc'])('accepts order: %s', (order) => {
      expect(validate({ order })).not.toThrow()
    })

    it('rejects invalid order', () => {
      const errors = getErrors(validate({ order: 'random' }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'order',
          message: expect.stringContaining('asc'),
        }),
      )
    })
  })

  describe('status', () => {
    it.each(['active', 'inactive', 'expired'])(
      'accepts status: %s',
      (status) => {
        expect(validate({ status })).not.toThrow()
      },
    )

    it('rejects deleted status (not filterable)', () => {
      const errors = getErrors(validate({ status: 'deleted' }))
      expect(errors).toContainEqual(
        expect.objectContaining({ field: 'status' }),
      )
    })

    it('rejects invalid status', () => {
      const errors = getErrors(validate({ status: 'unknown' }))
      expect(errors).toContainEqual(
        expect.objectContaining({ field: 'status' }),
      )
    })
  })

  describe('date range', () => {
    it('accepts valid from and to as string numbers (query params)', () => {
      expect(validate({ from: '1000000', to: '2000000' })).not.toThrow()
    })

    it('accepts from without to', () => {
      expect(validate({ from: '1000000' })).not.toThrow()
    })

    it('accepts from equal to to', () => {
      expect(validate({ from: '1000000', to: '1000000' })).not.toThrow()
    })

    it('rejects from greater than to', () => {
      const errors = getErrors(validate({ from: '2000000', to: '1000000' }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'from/to',
          message: expect.stringContaining('greater'),
        }),
      )
    })

    it.each([
      ['non-numeric string', 'abc'],
      ['float string', '1234.5'],
    ])('rejects from as %s', (_, from) => {
      const errors = getErrors(validate({ from }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'from',
          message: expect.stringContaining('integer'),
        }),
      )
    })

    it('treats empty string from as not provided (no error)', () => {
      expect(validate({ from: '' })).not.toThrow()
    })

    it('treats empty string to as not provided (no error)', () => {
      expect(validate({ to: '' })).not.toThrow()
    })

    it('treats both empty strings as not provided (no from>to error)', () => {
      expect(validate({ from: '', to: '' })).not.toThrow()
    })
  })

  describe('multiple errors', () => {
    it('collects sortBy and order errors simultaneously', () => {
      const errors = getErrors(validate({ sortBy: 'bad', order: 'bad' }))
      expect(errors.map((e) => e.field)).toEqual(
        expect.arrayContaining(['sortBy', 'order']),
      )
    })
  })
})

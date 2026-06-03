import { describe, it, expect } from 'vitest'
import { HttpError } from 'http-errors'
import { GetClicksValidator } from '../get-clicks.validator'

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

const validator = new GetClicksValidator()
const validate = (req: object) => () => validator.validate(req as never)

describe('GetClicksValidator', () => {
  describe('valid input', () => {
    it('accepts slug only', () => {
      expect(validate({ slug: 'abc' })).not.toThrow()
    })

    it('accepts slug with date range', () => {
      expect(
        validate({ slug: 'abc', from: '1000000', to: '2000000' }),
      ).not.toThrow()
    })
  })

  describe('slug', () => {
    it.each([
      ['missing', {}],
      ['empty string', { slug: '' }],
      ['whitespace only', { slug: '   ' }],
    ])('rejects %s slug', (_, req) => {
      const errors = getErrors(validate(req))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'slug',
          message: expect.stringContaining('required'),
        }),
      )
    })
  })

  describe('date range', () => {
    it('accepts valid from and to', () => {
      expect(
        validate({ slug: 'abc', from: '1000000', to: '2000000' }),
      ).not.toThrow()
    })

    it('rejects from greater than to', () => {
      const errors = getErrors(
        validate({ slug: 'abc', from: '2000000', to: '1000000' }),
      )
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'from/to',
          message: expect.stringContaining('greater'),
        }),
      )
    })

    it('rejects non-numeric from', () => {
      const errors = getErrors(validate({ slug: 'abc', from: 'abc' }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'from',
          message: expect.stringContaining('integer'),
        }),
      )
    })

    it('treats empty string from as not provided (no error)', () => {
      expect(validate({ slug: 'abc', from: '' })).not.toThrow()
    })

    it('treats empty string to as not provided (no error)', () => {
      expect(validate({ slug: 'abc', to: '' })).not.toThrow()
    })
  })
})

import { describe, it, expect } from 'vitest'
import { HttpError } from 'http-errors'
import { UpdateLinkValidator } from '../update-link.validator'

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

const future = Math.floor(Date.now() / 1000) + 3600
const past = Math.floor(Date.now() / 1000) - 1

const validator = new UpdateLinkValidator()
const validate = (req: object) => () => validator.validate(req as never)

describe('UpdateLinkValidator', () => {
  describe('valid input', () => {
    it('accepts status only', () => {
      expect(validate({ slug: 'abc', status: 'active' })).not.toThrow()
    })

    it('accepts expiresAt only', () => {
      expect(validate({ slug: 'abc', expiresAt: future })).not.toThrow()
    })

    it('accepts both fields', () => {
      expect(
        validate({ slug: 'abc', status: 'inactive', expiresAt: future }),
      ).not.toThrow()
    })

    it('accepts null expiresAt to remove expiration', () => {
      expect(validate({ slug: 'abc', expiresAt: null })).not.toThrow()
    })
  })

  describe('slug', () => {
    it.each([
      ['missing', { status: 'active' }],
      ['empty string', { slug: '', status: 'active' }],
      ['whitespace only', { slug: '   ', status: 'active' }],
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

  describe('atLeastOneField', () => {
    it('rejects when both status and expiresAt are undefined', () => {
      const errors = getErrors(validate({ slug: 'abc' }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'body',
          message: expect.stringContaining('At least one'),
        }),
      )
    })
  })

  describe('status', () => {
    it.each(['active', 'inactive'])('accepts status: %s', (status) => {
      expect(validate({ slug: 'abc', status })).not.toThrow()
    })

    it.each([
      ['deleted', 'deleted'],
      ['expired', 'expired'],
      ['random string', 'random'],
      ['number', 123],
    ])('rejects status: %s', (_, status) => {
      const errors = getErrors(validate({ slug: 'abc', status }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'status',
          message: expect.stringContaining('active, inactive'),
        }),
      )
    })
  })

  describe('expiresAt', () => {
    it('accepts future timestamp', () => {
      expect(validate({ slug: 'abc', expiresAt: future })).not.toThrow()
    })

    it('accepts null (remove expiry)', () => {
      expect(validate({ slug: 'abc', expiresAt: null })).not.toThrow()
    })

    it('rejects past timestamp', () => {
      const errors = getErrors(validate({ slug: 'abc', expiresAt: past }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'expiresAt',
          message: expect.stringContaining('future'),
        }),
      )
    })

    it.each([
      ['float', 1234567890.5],
      ['string', '1234567890'],
      ['NaN', NaN],
    ])('rejects non-integer: %s', (_, value) => {
      const errors = getErrors(validate({ slug: 'abc', expiresAt: value }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'expiresAt',
          message: expect.stringContaining('integer'),
        }),
      )
    })
  })

  describe('multiple errors', () => {
    it('collects slug and body errors simultaneously', () => {
      const errors = getErrors(validate({ slug: '' }))
      expect(errors.map((e) => e.field)).toEqual(
        expect.arrayContaining(['slug', 'body']),
      )
    })
  })
})

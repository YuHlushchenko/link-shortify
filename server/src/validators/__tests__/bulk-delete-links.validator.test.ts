import { describe, it, expect } from 'vitest'
import { HttpError } from 'http-errors'
import { BulkDeleteLinksValidator } from '../bulk-delete-links.validator'

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

const validator = new BulkDeleteLinksValidator()
const validate = (req: object) => () => validator.validate(req as never)

describe('BulkDeleteLinksValidator', () => {
  describe('valid input', () => {
    it('accepts array with one slug', () => {
      expect(validate({ slugs: ['abc'] })).not.toThrow()
    })

    it('accepts array with multiple slugs', () => {
      expect(validate({ slugs: ['abc', 'def', 'ghi'] })).not.toThrow()
    })

    it('accepts exactly 100 slugs', () => {
      const slugs = Array.from({ length: 100 }, (_, i) => `slug${i}`)
      expect(validate({ slugs })).not.toThrow()
    })
  })

  describe('slugs structure', () => {
    it.each([
      ['missing', {}],
      ['null', { slugs: null }],
      ['string', { slugs: 'abc' }],
      ['object', { slugs: { a: 1 } }],
    ])('rejects non-array slugs: %s', (_, req) => {
      const errors = getErrors(validate(req))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'slugs',
          message: expect.stringContaining('array'),
        }),
      )
    })

    it('rejects empty array', () => {
      const errors = getErrors(validate({ slugs: [] }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'slugs',
          message: expect.stringContaining('empty'),
        }),
      )
    })

    it('rejects array exceeding 100 items', () => {
      const slugs = Array.from({ length: 101 }, (_, i) => `slug${i}`)
      const errors = getErrors(validate({ slugs }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'slugs',
          message: expect.stringContaining('100'),
        }),
      )
    })

    it('rejects array containing non-strings', () => {
      const errors = getErrors(validate({ slugs: ['abc', 123, true] }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'slugs',
          message: expect.stringContaining('only strings'),
        }),
      )
    })

    it('rejects array containing empty strings', () => {
      const errors = getErrors(validate({ slugs: ['abc', ''] }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'slugs',
          message: expect.stringContaining('empty strings'),
        }),
      )
    })

    it('rejects array containing whitespace-only strings', () => {
      const errors = getErrors(validate({ slugs: ['abc', '   '] }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'slugs',
          message: expect.stringContaining('empty strings'),
        }),
      )
    })
  })

  describe('individual slug constraints', () => {
    it('rejects slugs exceeding 50 characters', () => {
      const errors = getErrors(validate({ slugs: ['abc', 'a'.repeat(51)] }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'slugs',
          message: expect.stringContaining('50'),
        }),
      )
    })

    it('accepts slugs of exactly 50 characters', () => {
      expect(validate({ slugs: ['a'.repeat(50)] })).not.toThrow()
    })
  })

  describe('duplicates', () => {
    it('rejects array with duplicate slugs', () => {
      const errors = getErrors(validate({ slugs: ['abc', 'def', 'abc'] }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'slugs',
          message: expect.stringContaining('duplicate'),
        }),
      )
    })

    it('accepts array with all unique slugs', () => {
      expect(validate({ slugs: ['abc', 'def', 'ghi'] })).not.toThrow()
    })
  })
})

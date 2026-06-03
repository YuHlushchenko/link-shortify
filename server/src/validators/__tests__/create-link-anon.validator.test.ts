import { describe, it, expect } from 'vitest'
import { HttpError } from 'http-errors'
import { CreateLinkAnonValidator } from '../create-link-anon.validator'

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

const validator = new CreateLinkAnonValidator()
const validate = (req: object) => () => validator.validate(req as never)

const validBase = {
  fingerprint: 'abc123def456',
  originalUrl: 'https://example.com',
}

describe('CreateLinkAnonValidator', () => {
  describe('valid input', () => {
    it('accepts minimal valid input', () => {
      expect(validate(validBase)).not.toThrow()
    })

    it('accepts all optional fields', () => {
      expect(
        validate({ ...validBase, slug: 'my-slug', expiresAt: future }),
      ).not.toThrow()
    })
  })

  describe('fingerprint', () => {
    it.each([
      ['missing', { originalUrl: 'https://example.com' }],
      ['null', { ...validBase, fingerprint: null }],
      ['empty string', { ...validBase, fingerprint: '' }],
      ['whitespace only', { ...validBase, fingerprint: '   ' }],
    ])('rejects %s', (_, req) => {
      const errors = getErrors(validate(req))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'fingerprint',
          message: expect.stringContaining('required'),
        }),
      )
    })

    it('rejects fingerprint exceeding 256 characters', () => {
      const errors = getErrors(
        validate({ ...validBase, fingerprint: 'a'.repeat(257) }),
      )
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'fingerprint',
          message: expect.stringContaining('256'),
        }),
      )
    })

    it('accepts fingerprint of exactly 256 characters', () => {
      expect(
        validate({ ...validBase, fingerprint: 'a'.repeat(256) }),
      ).not.toThrow()
    })

    it('accepts typical fingerprint format', () => {
      expect(
        validate({
          ...validBase,
          fingerprint: 'abc123def456abc123def456abc123de',
        }),
      ).not.toThrow()
    })
  })

  describe('originalUrl', () => {
    it('rejects missing originalUrl', () => {
      const errors = getErrors(validate({ fingerprint: 'abc123' }))
      expect(errors).toContainEqual(
        expect.objectContaining({ field: 'originalUrl' }),
      )
    })

    it('rejects private address', () => {
      const errors = getErrors(
        validate({ ...validBase, originalUrl: 'http://192.168.1.1' }),
      )
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'originalUrl',
          message: expect.stringContaining('private'),
        }),
      )
    })

    it('rejects invalid protocol', () => {
      const errors = getErrors(
        validate({ ...validBase, originalUrl: 'ftp://example.com' }),
      )
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'originalUrl',
          message: expect.stringContaining('http or https'),
        }),
      )
    })
  })

  describe('multiple errors', () => {
    it('collects fingerprint and originalUrl errors simultaneously', () => {
      const errors = getErrors(validate({ fingerprint: '', originalUrl: '' }))
      expect(errors.map((e) => e.field)).toEqual(
        expect.arrayContaining(['fingerprint', 'originalUrl']),
      )
    })
  })
})

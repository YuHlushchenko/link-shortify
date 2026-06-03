import { describe, it, expect } from 'vitest'
import { HttpError } from 'http-errors'
import { CreateLinkValidator } from '../create-link.validator'

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

const validator = new CreateLinkValidator()
const validate = (req: object) => () => validator.validate(req as never)

describe('CreateLinkValidator', () => {
  describe('valid input', () => {
    it('accepts minimal valid input', () => {
      expect(validate({ originalUrl: 'https://example.com' })).not.toThrow()
    })

    it('accepts all optional fields', () => {
      expect(
        validate({
          originalUrl: 'https://example.com',
          slug: 'my-slug',
          expiresAt: future,
        }),
      ).not.toThrow()
    })
  })

  describe('originalUrl', () => {
    it.each([
      ['missing', {}],
      ['null', { originalUrl: null }],
      ['empty string', { originalUrl: '' }],
      ['whitespace only', { originalUrl: '   ' }],
      ['number', { originalUrl: 42 }],
    ])('rejects %s', (_, req) => {
      const errors = getErrors(validate(req))
      expect(errors).toContainEqual(
        expect.objectContaining({ field: 'originalUrl' }),
      )
    })

    it('rejects URL exceeding 2048 characters', () => {
      const errors = getErrors(
        validate({ originalUrl: 'https://example.com/' + 'a'.repeat(2048) }),
      )
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'originalUrl',
          message: expect.stringContaining('2048'),
        }),
      )
    })

    it('rejects invalid URL format', () => {
      const errors = getErrors(validate({ originalUrl: 'not-a-url' }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'originalUrl',
          message: expect.stringContaining('valid URL'),
        }),
      )
    })

    it.each([
      ['ftp', 'ftp://example.com'],
      ['javascript', 'javascript:alert(1)'],
      ['file', 'file:///etc/passwd'],
      ['data', 'data:text/html,<h1>x</h1>'],
    ])('rejects %s protocol', (_, url) => {
      const errors = getErrors(validate({ originalUrl: url }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'originalUrl',
          message: expect.stringContaining('http or https'),
        }),
      )
    })

    it.each([
      ['localhost', 'http://localhost/path'],
      ['127.0.0.1', 'http://127.0.0.1/'],
      ['10.x private', 'http://10.0.0.1/'],
      ['172.16-31 private', 'http://172.16.0.1/'],
      ['192.168.x private', 'http://192.168.1.1/'],
      ['AWS metadata', 'http://169.254.169.254/latest/meta-data/'],
      ['IPv6 loopback', 'http://[::1]/'],
    ])('rejects private address: %s', (_, url) => {
      const errors = getErrors(validate({ originalUrl: url }))
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'originalUrl',
          message: expect.stringContaining('private'),
        }),
      )
    })

    it('accepts http protocol', () => {
      expect(validate({ originalUrl: 'http://example.com' })).not.toThrow()
    })

    it('accepts https protocol', () => {
      expect(
        validate({ originalUrl: 'https://example.com/path?q=1' }),
      ).not.toThrow()
    })
  })

  describe('slug (optional)', () => {
    it('accepts absent slug', () => {
      expect(validate({ originalUrl: 'https://example.com' })).not.toThrow()
    })

    it('accepts null slug', () => {
      expect(
        validate({ originalUrl: 'https://example.com', slug: null }),
      ).not.toThrow()
    })

    it('rejects non-string slug', () => {
      const errors = getErrors(
        validate({ originalUrl: 'https://example.com', slug: 123 }),
      )
      expect(errors).toContainEqual(expect.objectContaining({ field: 'slug' }))
    })

    it('rejects slug shorter than 3 characters', () => {
      const errors = getErrors(
        validate({ originalUrl: 'https://example.com', slug: 'ab' }),
      )
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'slug',
          message: expect.stringContaining('between 3 and 50'),
        }),
      )
    })

    it('accepts slug of exactly 3 characters', () => {
      expect(
        validate({ originalUrl: 'https://example.com', slug: 'abc' }),
      ).not.toThrow()
    })

    it('rejects slug longer than 50 characters', () => {
      const errors = getErrors(
        validate({ originalUrl: 'https://example.com', slug: 'a'.repeat(51) }),
      )
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'slug',
          message: expect.stringContaining('between 3 and 50'),
        }),
      )
    })

    it('accepts slug of exactly 50 characters', () => {
      expect(
        validate({ originalUrl: 'https://example.com', slug: 'a'.repeat(50) }),
      ).not.toThrow()
    })

    it.each([
      ['uppercase letters', 'MySlug'],
      ['leading hyphen', '-my-slug'],
      ['trailing hyphen', 'my-slug-'],
      ['spaces', 'my slug'],
      ['special chars', 'my_slug!'],
    ])('rejects slug with %s', (_, slug) => {
      const errors = getErrors(
        validate({ originalUrl: 'https://example.com', slug }),
      )
      expect(errors).toContainEqual(expect.objectContaining({ field: 'slug' }))
    })

    it('accepts slug with hyphens in the middle', () => {
      expect(
        validate({ originalUrl: 'https://example.com', slug: 'my-link-123' }),
      ).not.toThrow()
    })
  })

  describe('expiresAt (optional)', () => {
    it('accepts absent expiresAt', () => {
      expect(validate({ originalUrl: 'https://example.com' })).not.toThrow()
    })

    it('accepts null expiresAt', () => {
      expect(
        validate({ originalUrl: 'https://example.com', expiresAt: null }),
      ).not.toThrow()
    })

    it('accepts valid future timestamp', () => {
      expect(
        validate({ originalUrl: 'https://example.com', expiresAt: future }),
      ).not.toThrow()
    })

    it('rejects past timestamp', () => {
      const errors = getErrors(
        validate({ originalUrl: 'https://example.com', expiresAt: past }),
      )
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'expiresAt',
          message: expect.stringContaining('future'),
        }),
      )
    })

    it.each([
      ['float', 1234567890.5],
      ['NaN', NaN],
      ['Infinity', Infinity],
      ['string', '1234567890'],
    ])('rejects non-integer %s', (_, value) => {
      const errors = getErrors(
        validate({ originalUrl: 'https://example.com', expiresAt: value }),
      )
      expect(errors).toContainEqual(
        expect.objectContaining({
          field: 'expiresAt',
          message: expect.stringContaining('integer'),
        }),
      )
    })
  })

  describe('multiple errors', () => {
    it('collects errors from multiple fields simultaneously', () => {
      const errors = getErrors(
        validate({ originalUrl: '', slug: '-bad', expiresAt: past }),
      )
      expect(errors.map((e) => e.field)).toEqual(
        expect.arrayContaining(['originalUrl', 'slug', 'expiresAt']),
      )
    })
  })
})

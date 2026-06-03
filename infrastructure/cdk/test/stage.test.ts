import { getResourcePrefix, getLambdaPrefix, getStackPrefix } from '../utils/stage'

describe('getResourcePrefix', () => {
  it('returns empty string for prod', () => {
    expect(getResourcePrefix('prod')).toBe('')
  })
  it('returns "dev-" for dev', () => {
    expect(getResourcePrefix('dev')).toBe('dev-')
  })
})

describe('getLambdaPrefix', () => {
  it('returns empty string for prod', () => {
    expect(getLambdaPrefix('prod')).toBe('')
  })
  it('returns "Dev-" for dev', () => {
    expect(getLambdaPrefix('dev')).toBe('Dev-')
  })
})

describe('getStackPrefix', () => {
  it('returns empty string for prod', () => {
    expect(getStackPrefix('prod')).toBe('')
  })
  it('returns "Dev" for dev', () => {
    expect(getStackPrefix('dev')).toBe('Dev')
  })
})

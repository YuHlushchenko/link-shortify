import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  clearMocks: true,

  // rootDir points to client/ root so paths in other options are relative to it
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>config/jest/jest.setup.ts'],

  moduleNameMapper: {
    '^.+\\.(svg)$': '<rootDir>/src/shared/config/jest/__mocks__/fileMock.ts',
    'next/image': '<rootDir>/src/shared/config/jest/__mocks__/next/image.ts',
    '^@/(.*)$': '<rootDir>/src/$1',

    // next-intl is ESM-only and can't be transformed by Jest — mock it
    '^next-intl$': '<rootDir>/src/shared/config/jest/__mocks__/next-intl.tsx',
    '^next-intl/(.*)$':
      '<rootDir>/src/shared/config/jest/__mocks__/next-intl.tsx',
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)

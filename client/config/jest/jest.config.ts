import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  clearMocks: true, // Automatically clear mock calls, instances and results before every test (looks like it doesn't)

  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>config/jest/jest.setup.ts'], // щоб отримати доступ до ф-ї toBeInTheDocument() для тестів реакт-компонентів
  // A set of global variables that need to be available in all test environments
  //   globals: {
  //     __IS_DEV__: true,
  //   },
  // щоб працювали абсолютні імпорти в файлах з тестами
  // modulePaths: ['<rootDir>src'],

  moduleNameMapper: {
    // '^.+\\.(svg)$': 'jest-transformer-svg', // Мок для SVG як React компонента
    '^.+\\.(svg)$': '<rootDir>/src/shared/config/jest/__mocks__/fileMock.ts', // Мок для SVG як React компонента
    '\\.svg\\?url$': '<rootDir>/src/shared/config/jest/__mocks__/fileMock.ts', // Мок для SVG з параметром ?url
    'next/image': '<rootDir>/src/shared/config/jest/__mocks__/next/image.ts',
    '^@/(.*)$': '<rootDir>/src/$1', // absolute imports
    // '\\.(css|scss|sass)$': 'identity-obj-proxy', // Для CSS модулів
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)

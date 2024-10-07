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
  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,

  //! розкоментовуємо усе корисне
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // A set of global variables that need to be available in all test environments
  //   globals: {
  //     __IS_DEV__: true,
  //   },
  // щоб отримати доступ до ф-ї toBeInTheDocument() для тестів реакт-компонентів
  //   setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  // щоб працювали абсолютні імпорти в файлах з тестами
  //   modulePaths: ['<rootDir>src'],
  // The root directory that Jest should scan for tests and modules within
  // rootDir: '../../', //* вказала шлях вручну
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    include: ['src/integration-tests/**/*.integration.test.ts'],
    globalSetup: ['src/integration-tests/setup.ts'],
    testTimeout: 15000,
    env: {
      NODE_ENV: 'local',
      DYNAMODB_ENDPOINT:
        process.env.DYNAMODB_ENDPOINT ?? 'http://localhost:8000',
      LINKS_TABLE_NAME: 'test-links',
      CLICKS_TABLE_NAME: 'test-clicks',
      LOG_LEVEL: 'silent',
    },
  },
})

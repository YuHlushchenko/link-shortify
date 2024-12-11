import type { StorybookConfig } from '@storybook/nextjs'

import path, { join, dirname } from 'path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: [
    '../../src/**/*.mdx',
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
    'storybook-next-intl',
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {},
  },
  staticDirs: ['../../public'],
  webpackFinal: async (config) => {
    // Перевірка на наявність config.resolve
    if (!config.resolve) {
      config.resolve = {
        alias: {},
      }
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../../src'),
    }

    // svgr

    config.module = config.module || {}
    config.module.rules = config.module.rules || []

    // // This modifies the existing image rule to exclude .svg files
    const imageRule = config.module.rules.find(
      (rule) =>
        typeof rule === 'object' &&
        rule?.test instanceof RegExp &&
        rule.test.test('.png'), // Check for image rules
    ) as { test: RegExp; exclude?: RegExp[] | RegExp }

    if (imageRule) {
      imageRule.exclude = /\.svg$/ // Exclude SVG files
    }

    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ['@svgr/webpack'], // Використовуємо SVGR для всіх SVG
    // })

    // Add separate handling for .svg files based on query parameters
    config.module.rules.push(
      {
        test: /\.svg$/,
        resourceQuery: /url/, // Match `?url`
        type: 'asset/resource', // Handle as file loader
      },
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/, // Match JS/TS files
        resourceQuery: { not: [/url/] }, // Exclude `?url`
        use: ['@svgr/webpack'], // Handle as React components
      },
    )

    // Повертаємо змінену конфігурацію
    return config
  },
}

export default config

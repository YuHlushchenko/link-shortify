// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'
import type { StorybookConfig } from '@storybook/nextjs-vite'
import type { InlineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

import path, { join, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: [
    '../../src/**/*.mdx',
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs-vite'),
    options: {},
  },
  staticDirs: ['../../public'],
  viteFinal: async (config: InlineConfig) => {
    // Resolve @/ alias (mirrors tsconfig paths)
    config.resolve = config.resolve ?? {}
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../../src'),
      // Next.js allows bare `public/` imports via tsconfig baseUrl — mirror that in Vite
      public: path.resolve(__dirname, '../../public'),
    }

    config.plugins = config.plugins ?? []

    // *.svg?url imports return an asset URL string in Next.js (via webpack file-loader).
    // Intercept them before vite-plugin-storybook-nextjs-image gets a chance to hijack them.
    config.plugins.push({
      name: 'storybook-svg-url',
      enforce: 'pre',
      resolveId(id: string) {
        if (/\.svg\?url$/.test(id)) return `\0svg-url:${id}`
      },
      load(id: string) {
        if (!id.startsWith('\0svg-url:')) return
        // Strip virtual prefix and ?url — return the public-relative path as the URL
        const filePath = id.replace('\0svg-url:', '').replace(/\?url$/, '')
        // public/ paths are served from / in Storybook (staticDirs: ['../../public'])
        const publicUrl = filePath.replace(/^public/, '')
        return `export default ${JSON.stringify(publicUrl)}`
      },
    })

    // *.svg (without ?url) → React component via SVGR.
    config.plugins.push(
      svgr({ svgrOptions: { exportType: 'default' }, include: /\.svg$/ }),
    )

    // Known bug: vite-plugin-storybook-nextjs-image hijacks all .svg imports in its
    // resolveId hook before SVGR can transform them (returns a Next.js image descriptor
    // object instead of a React component). Patch it to pass .svg files through.
    // See: https://github.com/storybookjs/vite-plugin-storybook-nextjs/issues/48
    config.plugins = (config.plugins as any[]).flat().map((plugin: any) => {
      if (plugin?.name === 'vite-plugin-storybook-nextjs-image') {
        return {
          ...plugin,
          resolveId(id: string, importer: string) {
            if (id.endsWith('.svg') || /\.svg\?/.test(id)) return null
            return plugin.resolveId?.call(this, id, importer)
          },
        }
      }
      return plugin
    })

    return config
  },
}

export default config

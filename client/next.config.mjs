import createNextIntlPlugin from 'next-intl/plugin'
import bundleAnalyzer from '@next/bundle-analyzer'

const withNextIntl = createNextIntlPlugin('./src/app/i18n/request.ts')

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    // Use the modern Dart Sass compiler API (works as of Sass 1.85+ / Next.js 16)
    api: 'modern-compiler',
  },

  images: {
    // Allow quality=10 used in BgCover for the decorative swirl (intentionally low — it's a background element)
    qualities: [10, 75],
  },

  // Next.js 16 uses Turbopack by default — configure SVGR here for `next dev`
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Webpack config applies for `next build` (production still uses webpack)
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },

  // !Experimental features
  // experimental: {
  //   staleTimes: {
  //     dynamic: 30,
  //     static: 180,
  //   },
  // },
}

export default withBundleAnalyzer(withNextIntl(nextConfig))

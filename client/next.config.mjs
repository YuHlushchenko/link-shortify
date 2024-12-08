import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/app/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    // Use the new Dart Sass compiler
    // api: 'modern-compiler', // should work, but doesn't
    silenceDeprecations: ['legacy-js-api'], // Disable deprecation warnings (sass)
    // TODO: try again when sass is updated
  },

  // TODO: check if Next.js 15 has better support for SVG imports
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

  // experimental: {
  //   turbo: {
  //     loaders: {
  //       '.svg': ['@svgr/webpack'],
  //     },
  //   },
  // },
}

export default withNextIntl(nextConfig)

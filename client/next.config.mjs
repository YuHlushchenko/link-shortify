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
}

export default withNextIntl(nextConfig)

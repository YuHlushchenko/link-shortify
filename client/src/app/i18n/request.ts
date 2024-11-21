// import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import { TLocale } from '../types/global'

export default getRequestConfig(
  async ({
    // locale
    requestLocale,
  }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale

    // Ensure that the incoming locale is valid
    if (!locale || !routing.locales.includes(locale as TLocale)) {
      locale = routing.defaultLocale
    }

    return {
      messages: (await import(`../../../public/locales/${locale}/common.json`))
        .default,
    }
  },
)

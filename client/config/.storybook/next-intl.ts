// en
import enNotFoundPage from '../../public/locales/en/notFoundPage.json'
import enErrorPage from '../../public/locales/en/errorPage.json'
import enCommon from '../../public/locales/en/common.json'

// uk
import ukNotFoundPage from '../../public/locales/uk/notFoundPage.json'
import ukErrorPage from '../../public/locales/uk/errorPage.json'
import ukCommon from '../../public/locales/uk/common.json'

const messagesByLocale: Record<string, any> = {
  en: {
    ...enNotFoundPage,
    ...enErrorPage,
    ...enCommon,
  },
  uk: {
    ...ukNotFoundPage,
    ...ukErrorPage,
    ...ukCommon,
  },
}

const nextIntl = {
  defaultLocale: 'en',
  messagesByLocale,
  // formats: {
  //   /* your settings */
  // },
  // defaultTranslationValues: {
  //   /* your settings */
  // },
  // onError: (error) => console.error(error),
  // getMessageFallback: ({ namespace, key }) => `${namespace}.${key}`,
}

export default nextIntl

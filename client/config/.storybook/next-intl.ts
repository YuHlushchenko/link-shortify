// en
import enNotFoundPage from '../../public/locales/en/notFoundPage.json'
import enErrorPage from '../../public/locales/en/errorPage.json'

// uk
import ukNotFoundPage from '../../public/locales/uk/notFoundPage.json'
import ukErrorPage from '../../public/locales/uk/errorPage.json'

const messagesByLocale: Record<string, any> = {
  en: {
    ...enNotFoundPage,
    ...enErrorPage,
  },
  uk: {
    ...ukNotFoundPage,
    ...ukErrorPage,
  },
}

const nextIntl = {
  defaultLocale: 'en',
  messagesByLocale,
  //   formats: {/* your settings */},
  //   defaultTranslationValues: {/* your settings */},
  //   onError: (error) => console.error(error),
  // getMessageFallback: ({namespace, key}) => `${namespace}.${key}`,
}

export default nextIntl

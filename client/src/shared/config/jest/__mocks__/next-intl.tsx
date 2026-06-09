// Mock for next-intl — avoids ESM transform issues in Jest (next-intl@4 is ESM-only).
// Components under test use translations, but unit tests verify UI behaviour,
// not the i18n library itself, so returning the key as the translation is fine.
import React from 'react'

export const NextIntlClientProvider = ({
  children,
}: {
  children: React.ReactNode
  locale?: string
  messages?: Record<string, unknown>
}) => <>{children}</>

export const useTranslations = () => (key: string) => key

export const useLocale = () => 'en'

export const useFormatter = () => ({})

export const useMessages = () => ({})

export const useNow = () => new Date()

export const useTimeZone = () => 'UTC'

// next-intl/routing
export const defineRouting = (config: Record<string, unknown>) => config

// next-intl/navigation
export const createNavigation = () => ({
  Link: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
  redirect: (href: string) => href,
  usePathname: () => '/',
  useRouter: () => ({ push: () => {}, replace: () => {}, back: () => {} }),
})

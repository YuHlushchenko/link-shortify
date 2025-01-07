import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'

import commonEn from 'public/locales/en/common.json'
import commonUk from 'public/locales/uk/common.json'

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    push: jest.fn(),
    prefetch: jest.fn(),
    replace: jest.fn(),
  }),
  useParams: () => ({ locale: 'en' }),
  useSelectedLayoutSegment: () => ({ locale: 'en' }),
}))

const AllTheProviders = ({
  children,
  locale = 'en',
}: {
  children: React.ReactNode
  locale?: string
}) => (
  <NextIntlClientProvider
    locale={locale}
    messages={{
      en: {
        common: commonEn,
      },
      uk: {
        common: commonUk,
      },
    }}
  >
    {children}
  </NextIntlClientProvider>
)

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & { locale?: string },
) => {
  const { locale = 'en', ...renderOptions } = options || {}
  return render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders locale={locale}>{children}</AllTheProviders>
    ),
    ...renderOptions,
  })
}

export * from '@testing-library/react'
export { customRender as render }

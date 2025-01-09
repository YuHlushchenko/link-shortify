import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import fs from 'fs'
import path from 'path'

import { IChildren, TLocale } from '@/app/types/global'

//* func for dynamic loading of all localization files for a specific language
const loadLocaleMessages = (locale: TLocale) => {
  const messages: Record<string, string> = {}
  const localePath = path.join(process.cwd(), 'public', 'locales', locale)

  // Read all files from the folder of the corresponding language
  const files = fs.readdirSync(localePath)

  files.forEach((file) => {
    if (file.endsWith('.json')) {
      const filePath = path.join(localePath, file)
      const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'))
      Object.assign(messages, fileContent) // Join all files into one object
    }
  })

  return messages
}

const AllTheProviders = ({
  children,
  locale = 'en',
}: {
  children: IChildren
  locale?: TLocale
}) => {
  const messages = loadLocaleMessages(locale)

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & { locale?: TLocale },
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

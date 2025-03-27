import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { geistSans, geistMono, monserat } from '@/app/fonts'
import { IChildren, TLocale } from '@/app/types/global'

import { Theme } from '@/shared/const/theme'

import '@/app/styles/index.scss'

interface IProps {
  children: IChildren
  params: Promise<{ locale: TLocale }> // since Next.js 15 `params` is asynchronous
}

export const metadata: Metadata = {
  title: 'Link-Shortify',
  description: 'Link-Shortify description',
}

const RootLayout = async ({ children, params }: Readonly<IProps>) => {
  //Route "/[locale]" used `params.locale`. `params` should be awaited before using its properties.
  //Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis
  const { locale } = await params
  const messages = await getMessages({ locale })

  // for cookie "data_theme" always to be one of the available themes,
  // even if it was tampered with by the user
  const availableThemes = Object.values(Theme)
  const rawTheme = (await cookies()).get('app_theme')?.value

  const themeFromCookies = availableThemes.includes(rawTheme as Theme)
    ? (rawTheme as Theme)
    : Theme.DARK

  return (
    <html
      lang={locale}
      className={`${geistSans.className} ${geistMono.variable} ${monserat.variable}`}
      // suppressHydrationWarning
    >
      <body data-theme={themeFromCookies}>
        <NextIntlClientProvider messages={messages}>
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout

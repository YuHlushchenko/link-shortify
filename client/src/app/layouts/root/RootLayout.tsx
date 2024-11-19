import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { geistSans, geistMono, monserat } from '@/app/fonts'
import { IChildren, TLocale } from '@/app/types/global'

import { ThemeWrapper } from '@/app/wrappers'

import { Theme } from '@/shared/const/theme'
import '@/app/styles/index.scss'

interface IProps {
  children: IChildren
  params: { locale: TLocale }
}

export const metadata: Metadata = {
  title: 'Link-Shortify',
  description: 'Link-Shortify description',
}

const RootLayout = async ({
  children,
  params: { locale },
}: Readonly<IProps>) => {
  const messages = await getMessages({ locale })

  const themeFromCookies = cookies().get('app_theme')?.value || Theme.DARK

  return (
    <html
      lang={locale}
      className={`${geistSans.className} ${geistMono.variable} ${monserat.variable}`}
    >
      <body data-theme={themeFromCookies}>
        <ThemeWrapper />
        <NextIntlClientProvider messages={messages}>
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout

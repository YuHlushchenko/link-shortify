import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { geistSans, geistMono, monserat } from '../../fonts'

import { IChildren } from '../../types/global'
import { Theme } from '@/shared/const/theme'

import '@/app/styles/index.scss'
import { ThemeWrapper } from '@/app/wrappers'

interface IProps {
  children: IChildren
  params: { locale: string }
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
    <html lang={locale}>
      <body
        className={`${geistSans.className} ${geistMono.variable} ${monserat.variable}`}
        data-theme={themeFromCookies}
      >
        <ThemeWrapper />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout

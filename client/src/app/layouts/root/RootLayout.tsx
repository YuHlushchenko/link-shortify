import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { inter, geistMono, monserat } from '@/app/fonts'
import { IChildren } from '@/app/types/global'

import { AuthProvider } from '@/app/auth/AuthProvider'
import { CustomToaster } from '@/shared/ui/CustomToaster/CustomToaster'

import { Theme } from '@/shared/const/theme'

import '@/app/styles/tailwind.css'
import '@/app/styles/index.scss'

interface IProps {
  children: IChildren
  // Next.js 16 generates params.locale as string; we narrow to TLocale after validation in request.ts
  params: Promise<{ locale: string }>
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
      className={`${inter.variable} ${geistMono.variable} ${monserat.variable}`}
    >
      <body data-theme={themeFromCookies}>
        <NextIntlClientProvider messages={messages}>
          <AuthProvider>
            <main>{children}</main>
          </AuthProvider>
        </NextIntlClientProvider>

        <CustomToaster />
      </body>
    </html>
  )
}

export default RootLayout

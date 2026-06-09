import 'loki/configure-react'
import React from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { useGlobals } from 'storybook/preview-api'
import nextIntlConfig from './next-intl'

import type { Preview, Decorator } from '@storybook/nextjs-vite'

import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator'

import { monserat } from '../../src/app/fonts/index' // google font

import './font.css' //local fonts

// Додаємо заглушку для оптимізації зображень у Storybook
// layout='fill' замінюємо його на width='100%' та height='100%'
// const OriginalNextImage = require('next/image').default

// Object.defineProperty(require('next/image'), 'default', {
//   configurable: true,
//   value: (props) => {
//     // Додаємо заглушку для оптимізації зображень у Storybook
//     const { width, height, style, ...rest } = props
//     return (
//       <OriginalNextImage
//         {...rest}
//         width={width || '100%'}
//         height={height || '100%'}
//         style={{ ...style, width: width || '100%', height: height || '100%' }}
//         unoptimized
//       />
//     )
//   },
// })

// Inline next-intl decorator — wraps every story with NextIntlClientProvider.
// Replaces storybook-next-intl addon which doesn't load reliably in Storybook 10.
const withNextIntl: Decorator = (Story, context) => {
  const [{ locale }] = useGlobals()
  const currentLocale = (locale as string) || nextIntlConfig.defaultLocale
  const messages = nextIntlConfig.messagesByLocale[currentLocale] || {}

  return (
    <NextIntlClientProvider locale={currentLocale} messages={messages}>
      <Story {...context} />
    </NextIntlClientProvider>
  )
}

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    layout: 'fullscreen', // removes default padding
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // Locale toolbar — replaces storybook-next-intl / storybook-i18n toolbar
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English', right: '🇺🇸' },
          { value: 'uk', title: 'Українська', right: '🇺🇦' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    locale: 'en',
  },
  //* global decorators for every story
  decorators: [
    withNextIntl,
    ThemeDecorator,
    (Story) => (
      <div
        id='root'
        style={{
          fontFamily: 'var(--font-geist-sans)', //? setting as default font for storybook
        }}
        className={`${monserat.variable}`}
      >
        <Story />
      </div>
    ),
  ],
}

export default preview

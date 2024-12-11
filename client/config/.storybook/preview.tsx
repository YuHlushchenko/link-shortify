import React from 'react'
import nextIntl from './next-intl'

import type { Preview } from '@storybook/react'

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

const preview: Preview = {
  parameters: {
    nextIntl,
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
  //* global decorators for every story
  decorators: [
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
  initialGlobals: {
    locale: 'en',
    locales: {
      en: {
        icon: '🇺🇸',
        title: 'English',
      },
      uk: {
        icon: '🇺🇦',
        title: 'Українська',
      },
    },
  },
}

export default preview

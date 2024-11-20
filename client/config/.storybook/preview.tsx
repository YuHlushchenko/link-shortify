import React from 'react'
import type { Preview } from '@storybook/react'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator'

import { monserat } from '../../src/app/fonts/index' // google font

import './font.css' //local fonts

const preview: Preview = {
  parameters: {
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
}

export default preview

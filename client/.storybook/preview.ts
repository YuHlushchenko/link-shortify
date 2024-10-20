import type { Preview } from '@storybook/react'
import { ThemeDecorator } from '../src/shared/config/storybook/ThemeDecorator'

export const decorators = [ThemeDecorator]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview

import { Decorator } from '@storybook/react'
import { Theme } from '@/shared/const/theme'

import '@/app/styles/index.scss'

export const ThemeDecorator: Decorator = (Story, context) => {
  const theme = context.globals?.theme || Theme.DARK

  return (
    <div
      data-theme={`${theme}`}
      style={{
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
        // styling storybook preview
        minHeight: '100svh',
        padding: '1rem 4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Story />
    </div>
  )
}

import { Decorator } from '@storybook/react'
import { geistSans, geistMono, monserat } from '@/app/fonts'
import '@/app/styles/themes/dark.scss'
import '@/app/styles/themes/light.scss'
import { Theme } from '@/shared/const/theme'

export const ThemeDecorator: Decorator = (Story, context) => {
  const theme = context.globals?.theme || Theme.DARK

  return (
    <div
      data-theme={`${theme}`}
      className={`${geistSans.className} ${geistMono.variable} ${monserat.variable}`}
    >
      <Story />
    </div>
  )
}

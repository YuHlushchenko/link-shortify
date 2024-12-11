import { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/const/theme'

import { ThemeSwitcher } from './ThemeSwitcher'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
} as Meta<typeof ThemeSwitcher>

export default meta

type Story = StoryObj<typeof ThemeSwitcher>

export const Dark: Story = {
  globals: {
    theme: Theme.DARK,
  },
}

export const Light: Story = {
  globals: {
    theme: Theme.LIGHT,
  },
}

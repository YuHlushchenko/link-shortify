// LangSwitcher.stories.tsx
import { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/const/theme'

import LangSwitcher from './LangSwitcher'

const meta: Meta<typeof LangSwitcher> = {
  title: 'features/LangSwitcher',
  component: LangSwitcher,
} as Meta<typeof LangSwitcher>

export default meta

type Story = StoryObj<typeof LangSwitcher>

export const Dark: Story = {}

export const Light: Story = {
  globals: {
    theme: Theme.LIGHT,
  },
}

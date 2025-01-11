import { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/shared/const/theme'

import Navbar from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'Widgets/Navbar',
  component: Navbar,
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Default: Story = {}

export const Light: Story = {
  globals: {
    theme: Theme.LIGHT,
  },
}

import { Meta, StoryObj } from '@storybook/react'

import { Theme } from '@/shared/const/theme'

import InputLink from './InputLink'

const meta: Meta<typeof InputLink> = {
  title: 'Widgets/InputLink',
  component: InputLink,
  args: {
    // isAutoPaste: false,
    // isAutoPastePending: true,
  },
}

export default meta

type Story = StoryObj<typeof InputLink>

export const Default: Story = {}

export const Light: Story = {
  globals: {
    theme: Theme.LIGHT,
  },
}

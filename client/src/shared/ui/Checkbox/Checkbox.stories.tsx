import { Meta, StoryObj } from '@storybook/react'
import Checkbox from './Checkbox'

import { Theme } from '@/shared/const/theme'

export default {
  title: 'Shared/Checkbox',
  component: Checkbox,
  argTypes: {
    isChecked: { control: 'boolean' },
    isPending: { control: 'boolean' },
    toggleCheck: { action: 'toggled' },
  },
} as Meta<typeof Checkbox>

type Story = StoryObj<typeof Checkbox>

const defaultArgs = {
  id: 'test-checkbox',
  name: 'testName',
  label: 'Test Checkbox',
  isChecked: false,
  isPending: false,
}

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
}

export const DefaultLight: Story = {
  args: {
    ...defaultArgs,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

export const Checked: Story = {
  args: {
    ...defaultArgs,
    isChecked: true,
  },
}

export const Pending: Story = {
  args: {
    ...defaultArgs,
    isPending: true,
  },
}

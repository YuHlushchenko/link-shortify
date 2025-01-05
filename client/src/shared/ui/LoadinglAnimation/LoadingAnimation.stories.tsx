import { Meta, StoryObj } from '@storybook/react'
import LoadingAnimation from './LoadinglAnimation'

const meta: Meta<typeof LoadingAnimation> = {
  title: 'Shared/LoadingAnimation',
  component: LoadingAnimation,
  argTypes: {
    circlesCount: {
      control: 'number',
    },
    scale: {
      control: 'number',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

type Story = StoryObj<typeof LoadingAnimation>

export const Default: Story = {
  args: {
    circlesCount: 100,
  },
}

export const Scaled: Story = {
  args: {
    circlesCount: 100,
    scale: 0.2,
  },
}

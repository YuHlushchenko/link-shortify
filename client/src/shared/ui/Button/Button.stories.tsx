import { Meta, StoryObj } from '@storybook/react'
import Button, { TButtonClassName } from './Button'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

// Storybook meta-інформація про компонент
const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  argTypes: {
    className: {
      control: 'select',
      options: [
        'default',
        'outlineWhite',
        'transparent',
        'transparentActive',
        'disabled',
      ],
    },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Button>

// Приклад кнопки за замовчуванням
export const Default: Story = {
  args: {
    children: 'Default Button',
    className: 'default' as TButtonClassName,
    disabled: false,
  },
  decorators: [ThemeDecorator],
}

// Приклад кнопки з

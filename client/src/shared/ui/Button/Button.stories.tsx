import { Meta, StoryObj } from '@storybook/react'
import Button, { TButtonClassName } from './Button'
import { Theme } from '@/shared/const/theme'

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
}

// Приклад кнопки за замовчуванням для світлої теми
export const DefaultLIGHT: Story = {
  args: {
    children: 'Default Button LIGHT',
    className: 'default' as TButtonClassName,
    disabled: false,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

// Приклад кнопки з контуром
export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    className: 'outlined' as TButtonClassName,
    disabled: false,
  },
}

// Приклад кнопки з контуром для світлої теми
export const OutlinedLight: Story = {
  args: {
    children: 'Outlined Light Button',
    className: 'outlined' as TButtonClassName,
    disabled: false,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

// Приклад кнопки заблокованої кнопки
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    className: 'default' as TButtonClassName,
    disabled: true,
  },
}

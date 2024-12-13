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
      options: ['default', 'accent'],
    },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    // href: { control: 'text' },
    // iconLeft: { control: 'text' },
    // iconRight: { control: 'text' },
  },
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
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

// Приклад акцентної кнопки
export const Accent: Story = {
  args: {
    children: 'Accent Button',
    className: 'accent' as TButtonClassName,
    disabled: false,
  },
}

// Приклад акцентної кнопки для світлої теми
export const AccentLIGHT: Story = {
  args: {
    children: 'Accent Button LIGHT',
    className: 'accent' as TButtonClassName,
    disabled: false,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

// Приклад заблокованої кнопки
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    className: 'default' as TButtonClassName,
    disabled: true,
  },
}

// Приклад заблокованої кнопки для світлої теми
export const DisabledLIGHT: Story = {
  args: {
    children: 'Disabled Button LIGHT',
    className: 'default' as TButtonClassName,
    disabled: true,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

// Приклад акцентної заблокованої кнопки
export const DisabledAccent: Story = {
  args: {
    children: 'Disabled Accent Button',
    className: 'accent' as TButtonClassName,
    disabled: true,
  },
}

// Приклад акцентної заблокованої кнопки для світлої теми
export const DisabledAccentLIGHT: Story = {
  args: {
    children: 'Disabled Accent Button LIGHT',
    className: 'accent' as TButtonClassName,
    disabled: true,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

// Приклад кнопки з загрузкою
export const Loading: Story = {
  args: {
    children: 'Loading Button',
    className: 'default' as TButtonClassName,
    isLoading: true,
  },
}

// Приклад акцентної кнопки з загрузкою
export const LoadingAccent: Story = {
  args: {
    children: 'Loading Accent Button',
    className: 'accent' as TButtonClassName,
    isLoading: true,
  },
}

// Приклад кнопки з лівою іконкою
export const IconLeft: Story = {
  args: {
    children: 'Icon Left Button',
    className: 'default' as TButtonClassName,
    iconLeft: '👈',
  },
}

// Приклад акцентної кнопки з лівою іконкою
export const IconLeftAccent: Story = {
  args: {
    children: 'Icon Left Accent Button',
    className: 'accent' as TButtonClassName,
    iconLeft: '👈',
  },
}

// Приклад кнопки з правою іконкою світла теми
export const IconRight: Story = {
  args: {
    children: 'Icon Right Button LIGHT',
    className: 'default' as TButtonClassName,
    iconRight: '👉',
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

// Приклад акцентної кнопки з правою іконкою світла теми
export const IconRightAccent: Story = {
  args: {
    children: 'Icon Right Accent Button LIGHT',
    className: 'accent' as TButtonClassName,
    iconRight: '👉',
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

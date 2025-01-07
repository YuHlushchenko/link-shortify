import { Meta, StoryObj } from '@storybook/react'
import Button, { TButtonClassName } from './Button'
import { Theme } from '@/shared/const/theme'

import LinkSvg from 'public/assets/svgs/link.svg'

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
    isRounded: { control: 'boolean' },
    iconLeftContainerStyle: { control: 'object' },
    iconRightContainerStyle: { control: 'object' },
    href: { control: 'text' },
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

export const Default: Story = {
  args: {
    children: 'Default Button',
    className: 'default' as TButtonClassName,
    disabled: false,
  },
}

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

export const Accent: Story = {
  args: {
    children: 'Accent Button',
    className: 'accent' as TButtonClassName,
    disabled: false,
  },
}

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

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    className: 'default' as TButtonClassName,
    disabled: true,
  },
}

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

export const DisabledAccent: Story = {
  args: {
    children: 'Disabled Accent Button',
    className: 'accent' as TButtonClassName,
    disabled: true,
  },
}

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

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    className: 'default' as TButtonClassName,
    isLoading: true,
  },
}

export const LoadingLIGHT: Story = {
  args: {
    children: 'Loading Button LIGHT',
    className: 'default' as TButtonClassName,
    isLoading: true,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

export const LoadingAccent: Story = {
  args: {
    children: 'Loading Accent Button',
    className: 'accent' as TButtonClassName,
    isLoading: true,
  },
}

export const LoadingAccentLIGHT: Story = {
  args: {
    children: 'Loading Accent Button LIGHT',
    className: 'accent' as TButtonClassName,
    isLoading: true,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

export const IconLeft: Story = {
  args: {
    children: 'Icon Left Button',
    className: 'default' as TButtonClassName,
    iconLeft: <LinkSvg />,
  },
}

export const IconLeftLIGHT: Story = {
  args: {
    children: 'Icon Left Button LIGHT',
    className: 'default' as TButtonClassName,
    iconLeft: <LinkSvg />,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

export const IconLeftAccent: Story = {
  args: {
    children: 'Icon Left Accent Button',
    className: 'accent' as TButtonClassName,
    iconLeft: <LinkSvg />,
  },
}

export const IconLeftAccentLIGHT: Story = {
  args: {
    children: 'Icon Left Accent Button LIGHT',
    className: 'accent' as TButtonClassName,
    iconLeft: <LinkSvg />,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

export const IconRight: Story = {
  args: {
    children: 'Icon Right Button LIGHT',
    className: 'default' as TButtonClassName,
    iconRight: <LinkSvg />,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

export const IconRightLIGHT: Story = {
  args: {
    children: 'Icon Right Button LIGHT',
    className: 'default' as TButtonClassName,
    iconRight: <LinkSvg />,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

export const IconRightAccent: Story = {
  args: {
    children: 'Icon Right Accent Button LIGHT',
    className: 'accent' as TButtonClassName,
    iconRight: <LinkSvg />,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

export const IconRightAccentLIGHT: Story = {
  args: {
    children: 'Icon Right Accent Button LIGHT',
    className: 'accent' as TButtonClassName,
    iconRight: <LinkSvg />,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

export const Rounded: Story = {
  args: {
    children: <LinkSvg />,
    className: 'default' as TButtonClassName,
    isRounded: true,
  },
}

export const RoundedLIGHT: Story = {
  args: {
    children: <LinkSvg />,
    className: 'default' as TButtonClassName,
    isRounded: true,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

export const RoundedAccent: Story = {
  args: {
    children: <LinkSvg />,
    className: 'accent' as TButtonClassName,
    isRounded: true,
  },
}

export const RoundedAccentLIGHT: Story = {
  args: {
    children: <LinkSvg />,
    className: 'accent' as TButtonClassName,
    isRounded: true,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

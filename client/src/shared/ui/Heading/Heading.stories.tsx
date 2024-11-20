import { Meta, StoryObj } from '@storybook/react'
import Heading, { THeadingClassName } from './Heading'
import { HeadingColor } from './Heading.type'

const meta: Meta<typeof Heading> = {
  title: 'Shared/Heading',
  component: Heading,
  argTypes: {
    className: {
      control: 'select',
      options: ['default300', 'default', 'subTitle', 'title', 'lg'],
    },
    color: {
      control: 'select',
      options: [
        HeadingColor.PRIMARY,
        HeadingColor.SECONDARY,
        HeadingColor.ACCENT,
        HeadingColor.TEXT,
        HeadingColor.TEXT_INVERTED,
      ],
    },
  },
}

export default meta

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    children: 'Default Heading',
    className: 'default' as THeadingClassName,
    color: HeadingColor.SECONDARY,
  },
}

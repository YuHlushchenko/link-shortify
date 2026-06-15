import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Heading, { THeadingVariant } from './Heading'
import { HeadingColor } from './Heading.type'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof Heading> = {
  title: 'Shared/Heading',
  component: Heading,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display',
        'title',
        'subtitle',
        'heading',
        'headingThin',
      ] satisfies THeadingVariant[],
    },
    gradient: { control: 'boolean' },
    color: {
      control: 'select',
      options: Object.values(HeadingColor),
    },
  },
}

export default meta

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    children: 'Default Heading',
    variant: 'heading',
    color: HeadingColor.DEFAULT,
  },
}

export const DefaultLIGHT: Story = {
  args: {
    children: 'Default Heading',
    variant: 'heading',
    color: HeadingColor.DEFAULT,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

export const Hero: Story = {
  args: {
    tag: 'h1',
    children: 'Shorten Your Loooong Links :)',
    variant: 'display',
    gradient: true,
  },
}

export const HeroLIGHT: Story = {
  args: {
    tag: 'h1',
    children: 'Shorten Your Loooong Links :)',
    variant: 'display',
    gradient: true,
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

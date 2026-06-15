import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Text, { TTextVariant } from './Text'
import { TextColor } from './Text.type'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof Text> = {
  title: 'Shared/Text',
  component: Text,
  argTypes: {
    variant: {
      control: 'select',
      options: ['body', 'caption', 'label', 'mono'] satisfies TTextVariant[],
    },
    color: {
      control: 'select',
      options: Object.values(TextColor),
    },
  },
}

export default meta

type Story = StoryObj<typeof Text>

export const Body: Story = {
  args: {
    children:
      'Link-Shortify streamlines your links into clean, shareable URLs.',
    variant: 'body',
  },
}

export const BodyLIGHT: Story = {
  args: {
    children:
      'Link-Shortify streamlines your links into clean, shareable URLs.',
    variant: 'body',
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

export const Caption: Story = {
  args: {
    children: 'Oct 8, 2023 · 4,313 clicks',
    variant: 'caption',
  },
}

export const CaptionLIGHT: Story = {
  args: {
    children: 'Oct 8, 2023 · 4,313 clicks',
    variant: 'caption',
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

export const Label: Story = {
  args: {
    children: 'Total clicks',
    variant: 'label',
  },
}

export const LabelLIGHT: Story = {
  args: {
    children: 'Total clicks',
    variant: 'label',
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

export const Mono: Story = {
  args: {
    children: 'lshfy.co/Bn41aCOlnxj',
    variant: 'mono',
  },
}

export const MonoLIGHT: Story = {
  args: {
    children: 'lshfy.co/Bn41aCOlnxj',
    variant: 'mono',
  },
  globals: {
    theme: Theme.LIGHT,
  },
}

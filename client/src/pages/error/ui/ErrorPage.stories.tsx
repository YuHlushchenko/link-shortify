import { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/const/theme'

import ErrorPage from './ErrorPage'

const meta: Meta<typeof ErrorPage> = {
  title: 'pages/ErrorPage',
  component: ErrorPage,
} as Meta<typeof ErrorPage>

export default meta

type Story = StoryObj<typeof ErrorPage>

export const Dark: Story = {}

export const Light: Story = {
  globals: {
    theme: Theme.LIGHT,
  },
}

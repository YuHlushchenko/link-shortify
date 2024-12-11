import { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/const/theme'

import NotFoundPage from './NotFoundPage'

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    loki: {
      skip: true,
    },
  },
} as Meta<typeof NotFoundPage>

export default meta

type Story = StoryObj<typeof NotFoundPage>

export const Dark: Story = {}

export const Light: Story = {
  globals: {
    theme: Theme.LIGHT,
  },
}

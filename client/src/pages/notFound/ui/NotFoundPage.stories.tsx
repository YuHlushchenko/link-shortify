import { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/const/theme'
import NotFoundPage from './NotFoundPage'

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    locale: 'en',
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          zIndex: 1,
          //   width: '100%',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof NotFoundPage>

export default meta

type Story = StoryObj<typeof NotFoundPage>

export const Dark: Story = {}

export const Light: Story = {
  globals: {
    locale: 'en',
    theme: Theme.LIGHT,
  },
}

import { Meta, StoryObj } from '@storybook/react'
import BgCover from './BgCover'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof BgCover> = {
  title: 'Shared/BgCover',
  component: BgCover,
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof BgCover>

// for dark theme
export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div
        style={{
          zIndex: 1,
          width: '100%',
          minHeight: '100svh',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

// for light theme
export const DefaultLIGHT: Story = {
  args: {},
  globals: {
    theme: Theme.LIGHT,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          zIndex: 1,
          width: '100%',
          minHeight: '100svh',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

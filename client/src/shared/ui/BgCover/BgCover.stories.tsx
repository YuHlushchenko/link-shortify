import { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Theme } from '@/shared/const/theme'

import BgCover from './BgCover'

const meta: Meta<typeof BgCover> = {
  title: 'Shared/BgCover',
  component: BgCover,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      // position:fixed creates a stacking context — BgCover (-z-10) renders behind
      // this transparent wrapper, which itself sits above ThemeDecorator's background
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof BgCover>

export const Dark: Story = {}

export const Light: Story = {
  globals: {
    theme: Theme.LIGHT,
  },
}

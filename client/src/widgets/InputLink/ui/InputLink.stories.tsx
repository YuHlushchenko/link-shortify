import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Theme } from '@/shared/const/theme'
import InputLink from './InputLink'

const VIEWPORTS = {
  mobile: {
    name: 'Mobile (390px)',
    styles: { width: '390px', height: '844px' },
    type: 'mobile' as const,
  },
  desktop: {
    name: 'Desktop (1280px)',
    styles: { width: '1280px', height: '800px' },
    type: 'desktop' as const,
  },
}

const meta: Meta<typeof InputLink> = {
  title: 'Widgets/InputLink',
  component: InputLink,
  parameters: {
    viewport: { options: VIEWPORTS },
  },
  decorators: [(Story) => <Story />],
}

export default meta
type Story = StoryObj<typeof InputLink>

// ─── Controlled wrapper ──────────────────────────────────────────────────────

const Demo = ({
  isAutoPastePending = false,
}: {
  isAutoPastePending?: boolean
}) => {
  const [inputValue, setInputValue] = useState('')
  const [isPlaceholder, setPlaceholder] = useState(true)
  return (
    <InputLink
      inputValue={inputValue}
      setInputValue={setInputValue}
      isPlaceholder={isPlaceholder}
      setPlaceholder={setPlaceholder}
      isAutoPaste={false}
      pasteFromClipboard={() => {}}
      isAutoPastePending={isAutoPastePending}
    />
  )
}

// ─── Desktop (> 750px) — text + icon button ──────────────────────────────────

const DesktopWrapper = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '2rem' }}>{children}</div>
)

export const Desktop: Story = {
  render: () => (
    <DesktopWrapper>
      <Demo />
    </DesktopWrapper>
  ),
}

export const DesktopLight: Story = {
  render: () => (
    <DesktopWrapper>
      <Demo />
    </DesktopWrapper>
  ),
  globals: { theme: Theme.LIGHT },
}

export const DesktopAutoPastePending: Story = {
  render: () => (
    <DesktopWrapper>
      <Demo isAutoPastePending />
    </DesktopWrapper>
  ),
}

// ─── Mobile (≤ 750px) — rounded icon button ──────────────────────────────────

const MobileWrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{ width: '100%', boxSizing: 'border-box', padding: '1rem 0.5rem' }}
  >
    {children}
  </div>
)

export const Mobile: Story = {
  render: () => (
    <MobileWrapper>
      <Demo />
    </MobileWrapper>
  ),
  globals: { viewport: { value: 'mobile' } },
}

export const MobileLight: Story = {
  render: () => (
    <MobileWrapper>
      <Demo />
    </MobileWrapper>
  ),
  globals: { theme: Theme.LIGHT, viewport: { value: 'mobile' } },
}

export const MobileAutoPastePending: Story = {
  render: () => (
    <MobileWrapper>
      <Demo isAutoPastePending />
    </MobileWrapper>
  ),
  globals: { viewport: { value: 'mobile' } },
}

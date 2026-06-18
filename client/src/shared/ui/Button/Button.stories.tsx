import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Button, { ButtonVariant } from './Button'
import { Theme } from '@/shared/const/theme'

import LinkSvg from 'public/assets/svgs/link.svg'

const ButtonIcon = () => (
  <LinkSvg style={{ width: '16px', height: '16px', flexShrink: 0 }} />
)

const RoundedIcon = () => (
  <span
    style={{ display: 'block', width: '20px', height: '20px', flexShrink: 0 }}
  >
    <LinkSvg style={{ width: '100%', height: '100%' }} />
  </span>
)

const VARIANTS: ButtonVariant[] = [
  'primary',
  'secondary',
  'ghost',
  'destructive',
]

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: VARIANTS },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    isRounded: { control: 'boolean' },
    isGlowing: { control: 'boolean' },
    href: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '1.5rem' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof Button>

// ─── helpers ────────────────────────────────────────────────────────────────

const Row = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <span
      style={{
        fontSize: '11px',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: '#949CB1',
      }}
    >
      {label}
    </span>
    <div
      style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  </div>
)

const Grid = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    {children}
  </div>
)

// ─── All Variants overview ───────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <Grid>
      <Row label='Default'>
        {VARIANTS.map((v) => (
          <Button key={v} variant={v}>
            {v}
          </Button>
        ))}
      </Row>
      <Row label='Disabled'>
        {VARIANTS.map((v) => (
          <Button key={v} variant={v} disabled>
            {v}
          </Button>
        ))}
      </Row>
      <Row label='Loading'>
        {VARIANTS.map((v) => (
          <Button key={v} variant={v} isLoading>
            {v}
          </Button>
        ))}
      </Row>
      <Row label='Glowing (primary only)'>
        <Button variant='primary' isGlowing>
          primary
        </Button>
        <Button variant='primary' isGlowing disabled>
          primary · disabled
        </Button>
      </Row>
    </Grid>
  ),
}

export const AllVariantsLight: Story = {
  ...AllVariants,
  globals: { theme: Theme.LIGHT },
}

// ─── With icon left ──────────────────────────────────────────────────────────

export const WithIconLeft: Story = {
  render: () => (
    <Grid>
      <Row label='Icon left'>
        {VARIANTS.map((v) => (
          <Button key={v} variant={v} iconLeft={<ButtonIcon />}>
            {v}
          </Button>
        ))}
      </Row>
      <Row label='Icon left · glowing (primary only)'>
        <Button variant='primary' iconLeft={<ButtonIcon />} isGlowing>
          primary
        </Button>
      </Row>
      <Row label='Icon left · disabled'>
        {VARIANTS.map((v) => (
          <Button key={v} variant={v} iconLeft={<ButtonIcon />} disabled>
            {v}
          </Button>
        ))}
      </Row>
    </Grid>
  ),
}

export const WithIconLeftLight: Story = {
  ...WithIconLeft,
  globals: { theme: Theme.LIGHT },
}

// ─── With icon right ─────────────────────────────────────────────────────────

export const WithIconRight: Story = {
  render: () => (
    <Grid>
      <Row label='Icon right'>
        {VARIANTS.map((v) => (
          <Button key={v} variant={v} iconRight={<ButtonIcon />}>
            {v}
          </Button>
        ))}
      </Row>
      <Row label='Icon right · glowing (primary only)'>
        <Button variant='primary' iconRight={<ButtonIcon />} isGlowing>
          primary
        </Button>
      </Row>
      <Row label='Icon right · disabled'>
        {VARIANTS.map((v) => (
          <Button key={v} variant={v} iconRight={<ButtonIcon />} disabled>
            {v}
          </Button>
        ))}
      </Row>
    </Grid>
  ),
}

export const WithIconRightLight: Story = {
  ...WithIconRight,
  globals: { theme: Theme.LIGHT },
}

// ─── Rounded (icon-only) ─────────────────────────────────────────────────────

export const Rounded: Story = {
  render: () => (
    <Grid>
      <Row label='Rounded · default'>
        {VARIANTS.map((v) => (
          <Button key={v} variant={v} isRounded>
            <RoundedIcon />
          </Button>
        ))}
      </Row>
      <Row label='Rounded · glowing (primary only)'>
        <Button variant='primary' isRounded isGlowing>
          <RoundedIcon />
        </Button>
      </Row>
      <Row label='Rounded · disabled'>
        {VARIANTS.map((v) => (
          <Button key={v} variant={v} isRounded disabled>
            <RoundedIcon />
          </Button>
        ))}
      </Row>
      <Row label='Rounded · loading'>
        {VARIANTS.map((v) => (
          <Button key={v} variant={v} isRounded isLoading>
            <RoundedIcon />
          </Button>
        ))}
      </Row>
    </Grid>
  ),
}

export const RoundedLight: Story = {
  ...Rounded,
  globals: { theme: Theme.LIGHT },
}

// ─── Playground (controls) ───────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    disabled: false,
    isLoading: false,
    isRounded: false,
    isGlowing: false,
  },
}

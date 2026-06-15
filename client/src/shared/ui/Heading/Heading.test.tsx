import { render, screen } from '@/shared/config/jest/AllTheProviders'

import Heading from './Heading'
import { HeadingColor } from './Heading.type'

describe('Heading', () => {
  test('to be in the document', () => {
    render(<Heading>Heading</Heading>)
    expect(screen.getByText('Heading')).toBeInTheDocument()
  })
  test('if tag', () => {
    render(<Heading tag='h1'>Heading</Heading>)
    expect(screen.getByText('Heading').tagName).toBe('H1')
  })
  test('if variant', () => {
    render(<Heading variant='display'>Heading</Heading>)
    // display variant applies text-h1 from the variants map
    expect(screen.getByText('Heading')).toHaveClass('text-h1')
  })
  test('if style', () => {
    render(<Heading style={{ color: 'red' }}>Heading</Heading>)
    // jsdom 26 (Jest 30) normalizes named colors to rgb()
    expect(screen.getByText('Heading')).toHaveStyle('color: rgb(255, 0, 0)')
  })
  test('if color', () => {
    render(<Heading color={HeadingColor.ACCENT}>Heading</Heading>)
    expect(screen.getByText('Heading')).toHaveStyle(
      `color: var(${HeadingColor.ACCENT})`,
    )
  })
  test('if gradient', () => {
    render(<Heading gradient>Heading</Heading>)
    const el = screen.getByText('Heading')
    expect(el).toHaveClass('text-h1-gradient')
    // color style is not applied when gradient is active
    expect(el).not.toHaveStyle('color: var(--fg-2)')
  })
})

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
  test('if className', () => {
    render(<Heading className='title'>Heading</Heading>)
    expect(screen.getByText('Heading')).toHaveClass('title')
  })
  test('if style', () => {
    render(<Heading style={{ color: 'red' }}>Heading</Heading>)
    expect(screen.getByText('Heading')).toHaveStyle('color: red')
  })
  test('if color', () => {
    render(<Heading color={HeadingColor.ACCENT}>Heading</Heading>)
    expect(screen.getByText('Heading')).toHaveStyle(
      `color: var(${HeadingColor.ACCENT})`,
    )
  })
})

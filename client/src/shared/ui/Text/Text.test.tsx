import { render, screen } from '@/shared/config/jest/AllTheProviders'
import Text from './Text'
import { TextColor } from './Text.type'

describe('Text', () => {
  test('renders children', () => {
    render(<Text>Some text</Text>)
    expect(screen.getByText('Some text')).toBeInTheDocument()
  })

  describe('default tags per variant', () => {
    test('body renders as <p>', () => {
      render(<Text variant='body'>Body</Text>)
      expect(screen.getByText('Body').tagName).toBe('P')
    })
    test('caption renders as <span>', () => {
      render(<Text variant='caption'>Caption</Text>)
      expect(screen.getByText('Caption').tagName).toBe('SPAN')
    })
    test('label renders as <span>', () => {
      render(<Text variant='label'>Label</Text>)
      expect(screen.getByText('Label').tagName).toBe('SPAN')
    })
    test('mono renders as <span>', () => {
      render(<Text variant='mono'>Mono</Text>)
      expect(screen.getByText('Mono').tagName).toBe('SPAN')
    })
  })

  test('tag override', () => {
    render(<Text tag='div'>Div</Text>)
    expect(screen.getByText('Div').tagName).toBe('DIV')
  })

  describe('variant classes', () => {
    test('body applies text-lg', () => {
      render(<Text variant='body'>Body</Text>)
      expect(screen.getByText('Body')).toHaveClass('text-lg')
    })
    test('caption applies text-md', () => {
      render(<Text variant='caption'>Caption</Text>)
      expect(screen.getByText('Caption')).toHaveClass('text-md')
    })
    test('label applies uppercase and font-semibold', () => {
      render(<Text variant='label'>Label</Text>)
      const el = screen.getByText('Label')
      expect(el).toHaveClass('uppercase')
      expect(el).toHaveClass('font-semibold')
    })
    test('mono applies font-mono', () => {
      render(<Text variant='mono'>Mono</Text>)
      expect(screen.getByText('Mono')).toHaveClass('font-mono')
    })
  })

  describe('default colors per variant', () => {
    test('body defaults to --fg-2', () => {
      render(<Text variant='body'>Body</Text>)
      expect(screen.getByText('Body')).toHaveStyle(
        `color: var(${TextColor.DEFAULT})`,
      )
    })
    test('caption defaults to --fg-3', () => {
      render(<Text variant='caption'>Caption</Text>)
      expect(screen.getByText('Caption')).toHaveStyle(
        `color: var(${TextColor.MUTED})`,
      )
    })
    test('label defaults to --fg-3', () => {
      render(<Text variant='label'>Label</Text>)
      expect(screen.getByText('Label')).toHaveStyle(
        `color: var(${TextColor.MUTED})`,
      )
    })
    test('mono defaults to --fg-2', () => {
      render(<Text variant='mono'>Mono</Text>)
      expect(screen.getByText('Mono')).toHaveStyle(
        `color: var(${TextColor.DEFAULT})`,
      )
    })
  })

  test('color override', () => {
    render(<Text color={TextColor.ACCENT}>Text</Text>)
    expect(screen.getByText('Text')).toHaveStyle(
      `color: var(${TextColor.ACCENT})`,
    )
  })

  test('className override via twMerge', () => {
    render(<Text className='text-[20px]'>Text</Text>)
    expect(screen.getByText('Text')).toHaveClass('text-[20px]')
  })

  test('style override', () => {
    render(<Text style={{ opacity: 0.5 }}>Text</Text>)
    expect(screen.getByText('Text')).toHaveStyle('opacity: 0.5')
  })
})

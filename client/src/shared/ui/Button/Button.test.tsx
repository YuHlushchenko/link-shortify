import { render, screen, fireEvent } from '@/shared/config/jest/AllTheProviders'

import Button from './Button'

describe('Button', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  test('renders link when href is provided', () => {
    render(<Button href='/test'>Go to test</Button>)
    const linkElement = screen.getByText('Go to test').closest('a')
    expect(linkElement).toHaveAttribute('href', '/test')
  })

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn()
    render(
      <Button disabled onClick={handleClick}>
        Click me
      </Button>,
    )
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  test('disables button element when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  test('does not call onClick when isLoading', () => {
    const handleClick = jest.fn()
    render(
      <Button isLoading onClick={handleClick}>
        Click me
      </Button>,
    )
    fireEvent.click(screen.getByTestId('btn-loading'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  test('renders loading indicator when isLoading is true', () => {
    render(<Button isLoading>Loading</Button>)
    expect(screen.getByTestId('btn-loading')).toBeInTheDocument()
    expect(screen.queryByText('Loading')).not.toBeInTheDocument()
  })

  test('renders icons when provided', () => {
    render(
      <Button
        iconLeft={<span data-testid='icon-left'>L</span>}
        iconRight={<span data-testid='icon-right'>R</span>}
      >
        Icon Button
      </Button>,
    )
    expect(screen.getByTestId('icon-left')).toBeInTheDocument()
    expect(screen.getByTestId('icon-right')).toBeInTheDocument()
  })

  test('renders as button element by default', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('applies extra className', () => {
    render(<Button className='my-custom-class'>Styled</Button>)
    expect(screen.getByRole('button')).toHaveClass('my-custom-class')
  })

  test('renders primary variant by default', () => {
    render(<Button>Primary</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-brand-blue')
  })

  test('renders secondary variant', () => {
    render(<Button variant='secondary'>Secondary</Button>)
    const btn = screen.getByRole('button')
    expect(btn).not.toHaveClass('bg-brand-blue')
  })

  test('renders rounded button', () => {
    render(<Button isRounded>R</Button>)
    expect(screen.getByRole('button')).toHaveClass('rounded-full')
  })
})

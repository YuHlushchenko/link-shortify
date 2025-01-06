import {
  render,
  screen,
  fireEvent,
} from '@/shared/config/jest/NextIntlProviderUtils'

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

  test('disables button when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>)
    const buttonElement = screen.getByText('Click me').closest('button')
    expect(buttonElement).toBeDisabled()
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

  test('applies default styles', () => {
    render(<Button className='default'>Styled Button</Button>)
    const buttonElement = screen.getByText('Styled Button')
    expect(buttonElement).toHaveClass('default')
  })

  test('renders loading state', () => {
    render(<Button isLoading>Loading</Button>)
    const loadingElements = screen
      .getByTestId('btn-loading')
      .parentElement?.querySelectorAll('div.circlesContainer')
    expect(loadingElements).not.toBeNull()
  })

  test('renders icons correctly', () => {
    render(
      <Button
        iconLeft={<span data-testid='icon-left'>Left</span>}
        iconRight={<span data-testid='icon-right'>Right</span>}
      >
        Icon Button
      </Button>,
    )
    expect(screen.getByTestId('icon-left')).toBeInTheDocument()
    expect(screen.getByTestId('icon-right')).toBeInTheDocument()
  })

  test('renders rounded button when isRounded is true', () => {
    render(<Button isRounded>Rounded Button</Button>)
    const buttonElement = screen.getByText('Rounded Button')
    expect(buttonElement).toHaveClass('rounded')
  })
})

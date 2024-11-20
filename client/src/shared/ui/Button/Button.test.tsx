import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  test('to be in the document', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
  test('if onClick', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click me</Button>)
    screen.getByText('Click me').click()
    expect(onClick).toHaveBeenCalled()
  })
  test('if type', () => {
    render(<Button type='button'>Click me</Button>)
    expect(screen.getByText('Click me')).toHaveAttribute('type', 'button')
  })
  test('if disabled', () => {
    render(<Button disabled>Click me</Button>)
    expect(screen.getByText('Click me')).toHaveClass('disabled')
    expect(screen.getByText('Click me')).toHaveAttribute('disabled')
  })
  test('if href', () => {
    render(<Button href='/some-link'>Click me</Button>)
    expect(screen.getByText('Click me').closest('a')).toHaveAttribute(
      'href',
      '/some-link',
    )
  })
  test('if style', () => {
    render(<Button style={{ color: 'red' }}>Click me</Button>)
    expect(screen.getByText('Click me')).toHaveStyle('color: red')
  })
  test('if default className', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toHaveClass('default')
  })
  test('if className', () => {
    render(<Button className='outlined'>Click me</Button>)
    expect(screen.getByText('Click me')).toHaveClass('outlined')
  })
})

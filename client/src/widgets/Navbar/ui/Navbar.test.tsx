import { render, screen } from '@/shared/config/jest/AllTheProviders'

import Navbar from './Navbar'

jest.mock('@/features/LangSwitcher', () => ({
  LangSwitcher: () => <div data-testid='lang-switcher'>LangSwitcher</div>,
}))

let mockPathname = '/'

jest.mock('@/app/i18n/routing', () => ({
  usePathname: () => mockPathname,
  Link: ({
    href,
    children,
    ...props
  }: {
    href: string
    children: React.ReactNode
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

describe('Navbar Component', () => {
  beforeEach(() => {
    mockPathname = '/'
  })

  test('renders logo and title', () => {
    render(<Navbar />)

    expect(screen.getByAltText('logo')).toBeInTheDocument()
    expect(screen.getByText('Link-Shortify')).toBeInTheDocument()
  })

  test('renders language switcher', () => {
    render(<Navbar />)

    expect(screen.getByTestId('lang-switcher')).toBeInTheDocument()
  })

  test('renders login button on non-auth page', () => {
    render(<Navbar />)

    const loginLink = screen.getByRole('link', { name: /login/i })
    expect(loginLink).toBeInTheDocument()
    expect(loginLink).toHaveAttribute('href', '/auth/login')
  })

  test('hides login button on auth pages', () => {
    mockPathname = '/auth/login'
    render(<Navbar />)

    expect(
      screen.queryByRole('link', { name: /login/i }),
    ).not.toBeInTheDocument()
  })
})

import { render, screen } from '@/shared/config/jest/AllTheProviders'

import Navbar from './Navbar'

// for avoiding complex logic
jest.mock('@/features/LangSwitcher', () => ({
  LangSwitcher: () => <div data-testid='lang-switcher'>LangSwitcher</div>,
}))

// mock LoginModal to test open/close behaviour
jest.mock('@/features/AuthByUsername', () => ({
  LoginModal: ({ isOpen }: { isOpen: boolean }) =>
    isOpen ? <div data-testid='login-modal'>LoginModal</div> : null,
}))

describe('Navbar Component', () => {
  test('renders logo and title', () => {
    render(<Navbar />)

    const logoImage = screen.getByAltText('logo')
    expect(logoImage).toBeInTheDocument()

    const title = screen.getByText('Link-Shortify')
    expect(title).toBeInTheDocument()
  })

  test('renders language switcher', () => {
    render(<Navbar />)

    const langSwitcher = screen.getByTestId('lang-switcher')
    expect(langSwitcher).toBeInTheDocument()
  })

  test('renders login button with correct href', () => {
    render(<Navbar />)

    const desktopLoginButton = screen.getByRole('link', { name: /login/i })
    expect(desktopLoginButton).toBeInTheDocument()
    expect(desktopLoginButton).toHaveAttribute('href', '/login')
  })
})

import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@/shared/config/jest/AllTheProviders'

import Navbar from './Navbar'

// for avoiding complex logic
jest.mock('@/features/LangSwitcher', () => ({
  LangSwitcher: () => <div data-testid='lang-switcher'>LangSwitcher</div>,
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

  test('opens and closes login modal on button click', async () => {
    render(<Navbar />)

    // Check that the login modal is not visible initially
    const modal = screen.queryByTestId('modal')
    expect(modal).not.toBeInTheDocument()

    const loginModal = screen.queryByTestId('login-form-modal')
    expect(loginModal).not.toBeInTheDocument()

    // Simulate clicking the login button (desktop view)
    const loginButtonDesktop = screen.getByRole('button', { name: /login/i })
    fireEvent.click(loginButtonDesktop)

    // Wait for the login modal to appear after clicking the button
    await waitFor(() => {
      expect(screen.getByTestId('modal')).toBeInTheDocument()
      expect(screen.getByTestId('login-form-modal')).toBeInTheDocument()
    })

    // Simulate clicking the close button inside the modal
    const closeButton = screen.getByTestId('close-modal')
    fireEvent.click(closeButton)

    // // Wait for the modal to be closed
    await waitFor(() => {
      expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
      expect(screen.queryByTestId('login-form-modal')).not.toBeInTheDocument()
    })
  })
})

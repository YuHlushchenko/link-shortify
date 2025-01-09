import React from 'react'
import { render, screen, fireEvent } from '@/shared/config/jest/AllTheProviders'

import LangSwitcher from './LangSwitcher'

const mockReplace = jest.fn()

// If the tested component uses features from Next.js, you have to mock them.
jest.mock('@/app/i18n/routing', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    replace: mockReplace,
  }),
}))

afterEach(() => {
  jest.restoreAllMocks()
})

describe('LangSwitcher', () => {
  test('renders language switcher', () => {
    render(<LangSwitcher />)

    expect(screen.getByText('en')).toBeInTheDocument()
    expect(screen.getByText('ua')).toBeInTheDocument()
    expect(screen.getByAltText('Ukrainian flag')).toBeInTheDocument()
    expect(screen.getByAltText('English flag')).toBeInTheDocument()
  })

  test('applies active class to the selected language', () => {
    render(<LangSwitcher />)

    const activeLang = screen.getByText('en').closest('div')

    expect(activeLang).toHaveClass('langContainerActive')
  })

  test('renders skeleton while pending', () => {
    const mockStartTransition = jest.fn((callback) => callback())
    jest
      .spyOn(React, 'useTransition')
      .mockReturnValue([true, mockStartTransition])

    render(<LangSwitcher />)

    expect(screen.getByTestId('lang-switcher-skeleton')).toBeInTheDocument()
  })

  test('toggles language on click', () => {
    render(<LangSwitcher />)

    fireEvent.click(screen.getByRole('button'))

    expect(mockReplace).toHaveBeenCalledTimes(1)
    expect(mockReplace).toHaveBeenCalledWith(
      { pathname: '/' },
      { locale: 'uk' },
    )
  })
})

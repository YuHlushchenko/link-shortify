import React from 'react'
import { render, screen } from '@/shared/config/jest/AllTheProviders'

import ThemeSwitcher from './ThemeSwitcher'

import { Theme } from '@/shared/const/theme'

afterEach(() => {
  jest.restoreAllMocks()
})

describe('ThemeSwitcher', () => {
  test('renders theme switcher', () => {
    const mockStartTransition = jest.fn((callback) => callback())
    jest
      .spyOn(React, 'useTransition')
      .mockReturnValue([true, mockStartTransition])

    render(<ThemeSwitcher initialTheme={Theme.DARK} />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('render svg icon', () => {
    const mockStartTransition = jest.fn((callback) => callback())
    jest
      .spyOn(React, 'useTransition')
      .mockReturnValue([true, mockStartTransition])

    render(<ThemeSwitcher initialTheme={Theme.DARK} />)

    expect(screen.getByTestId('light-theme-icon')).toBeInTheDocument()
  })

  // check text with locale
  //   test('renders theme switcher with ua locale', () => {
  //     const mockStartTransition = jest.fn((callback) => callback())
  //     jest
  //       .spyOn(React, 'useTransition')
  //       .mockReturnValue([true, mockStartTransition])

  //     render(<ThemeSwitcher initialTheme={Theme.DARK} />, { locale: 'uk' })

  //     expect(screen.getByText('Темна Тема')).toBeInTheDocument()
  //   })
})

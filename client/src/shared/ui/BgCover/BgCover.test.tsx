import React from 'react'
import { render, screen } from '@/shared/config/jest/AllTheProviders'

import BgCover from './BgCover'

describe('BgCover', () => {
  test('renders bg cover', () => {
    render(<BgCover />)

    expect(screen.getByAltText('swirl')).toBeInTheDocument()
  })

  test('matches snapshot', () => {
    const { container } = render(<BgCover />)
    expect(container).toMatchSnapshot()
  })
})

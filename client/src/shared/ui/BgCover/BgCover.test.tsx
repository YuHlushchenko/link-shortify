import React from 'react'
import { render } from '@/shared/config/jest/AllTheProviders'

import BgCover from './BgCover'

describe('BgCover', () => {
  test('renders without crashing', () => {
    const { container } = render(<BgCover />)
    expect(container.firstChild).toBeInTheDocument()
  })

  test('matches snapshot', () => {
    const { container } = render(<BgCover />)
    expect(container).toMatchSnapshot()
  })
})

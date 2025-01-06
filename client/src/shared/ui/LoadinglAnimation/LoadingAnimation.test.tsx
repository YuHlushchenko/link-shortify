import { render, screen } from '@/shared/config/jest/NextIntlProviderUtils'
import LoadingAnimation from './LoadinglAnimation'

describe('LoadingAnimation Component', () => {
  test('renders the correct number of circles based on circlesCount prop', () => {
    const circlesCount = 5
    render(<LoadingAnimation circlesCount={circlesCount} />)

    const circles = screen.getAllByTestId('circle')
    expect(circles).toHaveLength(circlesCount * 2)
  })

  test('renders 100 circles by default', () => {
    render(<LoadingAnimation />)

    const circles = screen.getAllByTestId('circle')
    expect(circles).toHaveLength(100 * 2)
  })

  test('applies the correct scale based on scale prop', () => {
    const scale = 2
    render(<LoadingAnimation scale={scale} />)

    const container = screen.getByTestId('loading-animation-container')
    expect(container).toHaveStyle({ transform: `scale(${scale})` })
  })
})

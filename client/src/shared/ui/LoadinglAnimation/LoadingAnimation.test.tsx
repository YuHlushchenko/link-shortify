import { render, screen } from '@testing-library/react'
import LoadingAnimation from './LoadinglAnimation'

describe('LoadingAnimation Component', () => {
  test('renders the correct number of circles based on circlesCount prop', () => {
    const circlesCount = 5
    render(<LoadingAnimation circlesCount={circlesCount} />)

    const circles = screen.getAllByTestId('circle')
    expect(circles).toHaveLength(circlesCount * 2) // два елементи на кожен індекс
  })
})

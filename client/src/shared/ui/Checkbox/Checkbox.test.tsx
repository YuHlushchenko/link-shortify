import { render, screen, fireEvent } from '@/shared/config/jest/AllTheProviders'

import Checkbox from './Checkbox'

describe('Checkbox Component', () => {
  const mockToggleCheck = jest.fn()

  afterEach(() => {
    mockToggleCheck.mockReset()
  })

  const defaultProps = {
    id: 'test-checkbox',
    name: 'testName',
    label: 'Test Checkbox',
    toggleCheck: mockToggleCheck,
    isChecked: false,
    isPending: false,
  }

  it('renders the component with default props', () => {
    render(<Checkbox {...defaultProps} />)

    const inputElement = screen.getByLabelText('Сheckbox Auto Paste')
    const labelElement = screen.getByText('Test Checkbox')

    expect(inputElement).toBeInTheDocument()
    expect(labelElement).toBeInTheDocument()
    expect(inputElement).not.toBeChecked()
  })

  it('renders skeleton when isPending is true', () => {
    render(<Checkbox {...defaultProps} isPending={true} />)

    const skeletonElement = screen.getByRole('presentation')
    expect(skeletonElement).toBeInTheDocument()
  })

  it('handles toggleCheck on checkbox change', () => {
    render(<Checkbox {...defaultProps} />)

    const inputElement = screen.getByLabelText('Сheckbox Auto Paste')

    fireEvent.click(inputElement)
    expect(mockToggleCheck).toHaveBeenCalledTimes(1)
  })

  it('handles Enter key press to toggle check', () => {
    render(<Checkbox {...defaultProps} />)

    const inputElement = screen.getByLabelText('Сheckbox Auto Paste')

    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    expect(mockToggleCheck).toHaveBeenCalledTimes(1)
  })

  it('renders checked state when isChecked is true', () => {
    render(<Checkbox {...defaultProps} isChecked={true} />)

    const circleElement = screen.getByLabelText('Checked')
    expect(circleElement).toBeInTheDocument()
  })
})

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

// Import component to be tested
import Title from './index'

describe('basic first test', () => {
  it('renders an section title', () => {
    render(<Title>Welcome to ReactJS</Title>)

    const sectionTitle = screen.getByRole('heading', { level: 2 })

    expect(sectionTitle).toBeInTheDocument()
  })
})

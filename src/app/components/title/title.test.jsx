import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'

// Import component to be tested
import Title from './index'

describe('Section Title related tests', () => {
  it('renders an section title as a h2 element', () => {
    render(<Title>Welcome to ReactJS</Title>)

    const sectionTitle = screen.getByRole('heading', { level: 2 })

    expect(sectionTitle).toBeInTheDocument()
  })

  it('section title is render text correctly', () => {
    render(<Title>Marketing Site</Title>)
    const getSectionTtitleText = screen.getByText(/Marketing Site/i)

    expect(getSectionTtitleText).toBeInTheDocument()
  })
})

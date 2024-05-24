import type { Meta, StoryObj } from '@storybook/react'

// Import component
import { Title } from '../app/components'

const meta: Meta<typeof Title> = {
  component: Title,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Title>

export const SectionTitle: Story = {
  args: {
    type: 'section',
    children: 'This is a section title'
  },
}

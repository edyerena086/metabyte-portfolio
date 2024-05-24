// Import core libraries
import React, { FC } from 'react'

// Import types
import { SectionTitlePropsInterface } from './types'

const SectionTitle: FC<SectionTitlePropsInterface> = ({ children, subTitle, isCentered }) => {

  const extraStyles = [
    isCentered ? 'text-center' : null
  ]

  return (
    <h2 className={`text-6xl font-bold uppercase ${extraStyles.join(' ')}`}>
      {
        children
      }
    </h2>
  )
}

export default SectionTitle

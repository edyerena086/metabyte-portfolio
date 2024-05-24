// Import core libraries
import React, { FC } from 'react'

// Import types
import { TitleBasePropsInterface } from './types'

const BlockTitle: FC<TitleBasePropsInterface> = ({ children }) => {
  return (
    <h3 className={'text-4xl uppercase font-medium'}>
      {
        children
      }
    </h3>
  )
}

export default BlockTitle

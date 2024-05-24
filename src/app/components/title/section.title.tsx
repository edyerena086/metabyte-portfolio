// Import core libraries
import React, { FC, Fragment } from 'react'

// Import types
import { SectionTitlePropsInterface } from './types'

const SectionTitle: FC<SectionTitlePropsInterface> = ({ children, subTitle, isCentered }) => {

  const extraStyles = [
    isCentered ? 'text-center' : null
  ]

  return (
    <Fragment>
      {
        subTitle 
        && 
        (<h6 className={`font-normal text-lg uppercase ${extraStyles.join(' ')}`}>{ subTitle }</h6>)
      }
      <h2 className={`text-6xl font-medium uppercase ${extraStyles.join(' ')}`}>
        {
          children
        }
      </h2>
    </Fragment>
  )
}

export default SectionTitle

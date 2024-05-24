// Import core libraries
import React, { FC, Fragment } from 'react'

// Import sub-components
import SectionTitle from './section.title'

// Import types
import { TitlePropsInterface } from './types'

const Title: FC<TitlePropsInterface> = ({ children, type = 'section', subTitle, isCentered}) => {

  switch (type) {
    case 'main':
      return (<h1>Hello World</h1>)
  
    default:
      return (<SectionTitle isCentered={isCentered} subTitle={subTitle}>{children}</SectionTitle>)
  }
}

export default Title

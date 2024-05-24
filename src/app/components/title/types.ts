import { ReactNode } from 'react'

type sectionTitle = 'main' | 'section' | 'block'

export interface TitleBasePropsInterface {
  children: ReactNode
  isInverted?: boolean
}

export interface SectionTitlePropsInterface extends TitleBasePropsInterface {
  subTitle?: string
  isCentered?: boolean
}

export interface TitlePropsInterface extends SectionTitlePropsInterface {
  type?: sectionTitle
}

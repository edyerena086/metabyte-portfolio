import { ReactNode } from 'react'

type sectionTitle = 'main' | 'section' | 'block'

export interface SectionTitlePropsInterface {
  children: ReactNode
  subTitle?: string
  isCentered?: boolean
}

export interface TitlePropsInterface extends SectionTitlePropsInterface {
  type?: sectionTitle
}

// components/TitleCaseText.js

import { toTitleCase } from '@/utils/title-case'
import { ReactNode } from 'react'

type Props = {
  children: string | ReactNode
  className?: string
}

const TitleCase = (props: Props) => {
  const { children, ...rest } = props
  const text = typeof children === 'string' ? toTitleCase(children) : children

  return <h1 {...rest}>{text}</h1>
}

export default TitleCase

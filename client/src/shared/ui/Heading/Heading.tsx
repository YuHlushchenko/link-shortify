import React from 'react'
import { IChildren } from '@/app/types/global'
import { HeadingColor } from './Heading.type'

import styles from './Heading.module.scss'

export type THeadingClassName =
  | 'default300'
  | 'default'
  | 'subTitle'
  | 'title'
  | 'lg'

interface IProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  children: IChildren
  className?: THeadingClassName
  style?: React.CSSProperties
  color?: HeadingColor
}

const Heading = ({
  tag = 'h3',
  children,
  className = 'default',
  style,
  color = HeadingColor.SECONDARY,
}: IProps) => {
  const defaultStyle = {
    default300: styles.default300,
    default: styles.default,
    subTitle: styles.subTitle,
    title: styles.title,
    lg: styles.lg,
  }

  return React.createElement(
    tag,
    {
      className: `${defaultStyle[className]}`,
      style: { color: `var(${color})`, ...style },
    },
    children,
  )
}

export default Heading

/* eslint-disable indent */
import React from 'react'
import { Link } from '@/app/i18n/routing'
import { IChildren } from '@/app/types/global'

import styles from './Button.module.scss'

const CIRCLES_COUNT = 3

export type TButtonClassName = 'default' | 'accent'

interface IProps {
  children?: IChildren
  type?: 'button' | 'submit' | 'reset'
  href?: string
  style?: React.CSSProperties
  className?: TButtonClassName
  onClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>,
  ) => void
  disabled?: boolean
  isLoading?: boolean
  iconRight?: IChildren
  iconLeft?: IChildren
  isRounded?: boolean
  iconLeftContainerStyle?: React.CSSProperties // *for positioning and svg size (delete width and height inside svg for changing its size)
  iconRightContainerStyle?: React.CSSProperties
}

const defaultStyle = {
  default: styles.default,
  accent: styles.accent,
  disabled: (className: TButtonClassName) => {
    switch (className) {
      case 'default':
        return styles.disabledDefault
      case 'accent':
        return styles.disabledAccent
      default:
        return styles.disabledDefault
    }
  },
}

const Component = ({
  href,
  children,
  style,
  className = 'default',
  onClick,
  type,
  disabled,
  isLoading,
  iconRight,
  iconLeft,
  isRounded,
  iconLeftContainerStyle,
  iconRightContainerStyle,
}: IProps) =>
  React.createElement(
    href ? 'span' : 'button', // *tag
    // *props
    {
      type: href ? null : type,
      className: `${defaultStyle[className]} ${
        disabled || isLoading ? defaultStyle.disabled(className) : ''
      } ${isRounded ? styles.rounded : ''}`,
      disabled: href ? null : disabled,
      style,
      onClick: disabled ? null : onClick,
    },
    // *children
    iconLeft && (
      <div className={styles.iconLeftContainer} style={iconLeftContainerStyle}>
        <span className={styles.iconLeft}>{iconLeft}</span>
      </div>
    ),

    isLoading ? <ButtonLoading /> : children,

    iconRight && (
      <div
        className={styles.iconRightContainer}
        style={iconRightContainerStyle}
      >
        <span className={styles.iconRight}>{iconRight}</span>
      </div>
    ),
  )

const ButtonLoading = () => (
  <div className={styles.circlesContainer} data-testid='btn-loading'>
    {Array.from({ length: CIRCLES_COUNT }).map((_, i) => (
      <div
        key={i}
        className={styles.circle}
        style={{
          animationDelay: `${i * 0.3}s`,
        }}
      />
    ))}
  </div>
)

const Button = ({ href, children = '', ...props }: IProps) => {
  const ComponentContent = (
    <Component {...props} href={href}>
      {children}
    </Component>
  )

  return href ? <Link href={href}>{ComponentContent}</Link> : ComponentContent
}

export default Button

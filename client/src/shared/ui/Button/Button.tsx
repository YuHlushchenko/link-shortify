import Link from 'next/link'
import { IChildren } from '@/app/types/global'

import styles from './Button.module.scss'

export type TButtonClassName =
  | 'default'
  | 'outlineWhite'
  | 'outlineBlack'
  | 'transparent'
  | 'transparentActive'
  | 'disabled'

interface IProps {
  children: IChildren
  type?: 'button' | 'submit' | 'reset'
  href?: string
  style?: React.CSSProperties
  className?: TButtonClassName
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

const Button = ({
  href,
  children,
  style,
  className = 'default',
  onClick,
  type = 'submit',
  disabled = false,
}: IProps) => {
  const defaultStyle = {
    default: styles.default,
    outlineWhite: styles.outlineWhite,
    outlineBlack: styles.outlineBlack,
    transparent: styles.transparent,
    transparentActive: styles.transparentActive,
    disabled: styles.disabled,
  }

  return href ? (
    <Link href={href}>
      <button
        type={type}
        className={
          !disabled ? `${defaultStyle[className]}` : `${defaultStyle.disabled}`
        }
        disabled={disabled}
        style={style}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      type={type}
      className={
        !disabled ? `${defaultStyle[className]}` : `${defaultStyle.disabled}`
      }
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  )
}

export default Button

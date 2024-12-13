import Link from 'next/link' //TODO: change to next-intl
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
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  isLoading?: boolean
  iconRight?: IChildren
  iconLeft?: IChildren
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

const ButtonComponent = ({
  children = '',
  style,
  className = 'default',
  onClick,
  type = 'button',
  disabled = false,
  isLoading = false,
  iconRight = false,
  iconLeft = false,
}: IProps) => (
  <button
    type={type}
    className={
      disabled || isLoading
        ? `${defaultStyle[className]} ${defaultStyle.disabled(className)}`
        : `${defaultStyle[className]}`
    }
    disabled={disabled}
    style={style}
    onClick={onClick}
  >
    {iconLeft && (
      <div className={styles.iconLeftContainer}>
        <span className={styles.iconLeft}>{iconLeft}</span>
      </div>
    )}

    {isLoading ? <ButtonLoading /> : children}

    {iconRight && (
      <div className={styles.iconRightContainer}>
        <span className={styles.iconRight}>{iconRight}</span>
      </div>
    )}
  </button>
)

const ButtonLoading = () => (
  <div className={styles.circlesContainer}>
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

const Button = ({
  href,
  children = '',
  style,
  className = 'default',
  onClick,
  type = 'button',
  disabled = false,
  isLoading = false,
  iconRight = false,
  iconLeft = false,
}: IProps) => {
  return href ? (
    <Link href={href}>
      <ButtonComponent
        type={type}
        style={style}
        className={className}
        onClick={onClick}
        disabled={disabled}
        isLoading={isLoading}
        iconRight={iconRight}
        iconLeft={iconLeft}
      >
        {children}
      </ButtonComponent>
    </Link>
  ) : (
    <ButtonComponent
      type={type}
      style={style}
      className={className}
      onClick={onClick}
      disabled={disabled}
      isLoading={isLoading}
      iconRight={iconRight}
      iconLeft={iconLeft}
    >
      {children}
    </ButtonComponent>
  )
}

export default Button

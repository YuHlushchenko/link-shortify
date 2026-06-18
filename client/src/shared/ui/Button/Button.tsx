import React from 'react'
import { Link } from '@/app/i18n/routing'
import { IChildren } from '@/app/types/global'
import { twMerge } from '@/shared/lib/twMerge'

const LOADING_CIRCLES_COUNT = 3

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive'

export interface IButtonProps {
  children?: IChildren
  type?: 'button' | 'submit' | 'reset'
  name?: string
  href?: string
  style?: React.CSSProperties
  variant?: ButtonVariant
  className?: string
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
  isGlowing?: boolean
  iconLeftContainerStyle?: React.CSSProperties
  iconRightContainerStyle?: React.CSSProperties
}

const BASE =
  'inline-flex items-center justify-center w-full font-sans text-base leading-2 font-semibold rounded border border-transparent cursor-pointer select-none transition-all duration-300 relative px-1.75 py-1.5 [&_svg_path]:fill-current'

const VARIANT_BASE: Record<ButtonVariant, string> = {
  primary: 'bg-brand-blue text-white shadow-btn-primary',
  secondary: 'bg-(--surface-2) border-(--border) text-(--fg-2)',
  ghost: 'text-(--fg-2)',
  destructive: 'bg-error/15 border-error/30 text-error',
}

const VARIANT_HOVER: Record<ButtonVariant, string> = {
  primary: 'hover:bg-brand-blue-hover',
  secondary:
    'hover:bg-(--surface-3) hover:border-(--border-strong) hover:text-(--fg-1)',
  ghost: 'hover:bg-(--surface-4) hover:text-(--fg-1)',
  destructive: 'hover:bg-error/25 hover:border-error/45',
}

const DOT_COLOR: Record<ButtonVariant, string> = {
  primary: 'bg-white',
  secondary: 'bg-(--fg-2)',
  ghost: 'bg-(--fg-2)',
  destructive: 'bg-error',
}

const Component = ({
  href,
  children,
  name,
  style,
  variant = 'primary',
  className,
  onClick,
  type,
  disabled,
  isLoading,
  iconRight,
  iconLeft,
  isRounded,
  isGlowing,
  iconLeftContainerStyle,
  iconRightContainerStyle,
}: IButtonProps) => {
  const isDisabled = disabled || isLoading
  const hasIcon = !isRounded && (!!iconLeft || !!iconRight)

  const classes = twMerge(
    BASE,
    VARIANT_BASE[variant],
    !isDisabled && VARIANT_HOVER[variant],
    // fixed square size so loading never changes the circle shape
    isRounded && 'rounded-full w-auto p-0 size-5 md:size-[46px] lg:size-6.5',
    hasIcon && 'gap-1',
    isGlowing && !isDisabled && variant === 'primary' && 'shadow-glow-primary',
    isDisabled && 'opacity-50 cursor-not-allowed',
    className,
  )

  return React.createElement(
    href ? 'span' : 'button',
    {
      type: href ? null : type,
      className: classes,
      disabled: href ? null : disabled,
      style,
      onClick: isDisabled ? null : onClick,
      name,
    },
    iconLeft && (
      <span
        className='flex items-center leading-[0]'
        style={iconLeftContainerStyle}
      >
        {iconLeft}
      </span>
    ),
    isLoading ? (
      <ButtonLoading variant={variant} isRounded={isRounded} />
    ) : (
      children
    ),
    iconRight && (
      <span
        className='flex items-center leading-[0]'
        style={iconRightContainerStyle}
      >
        {iconRight}
      </span>
    ),
  )
}

const ButtonLoading = ({
  variant,
  isRounded,
}: {
  variant: ButtonVariant
  isRounded?: boolean
}) => (
  <div
    className={twMerge(
      'flex items-center justify-center gap-0.75',
      !isRounded && 'h-2',
    )}
    data-testid='btn-loading'
  >
    {Array.from({ length: LOADING_CIRCLES_COUNT }).map((_, i) => (
      <span
        key={i}
        className={twMerge(
          'rounded-full animate-[btn-dot_1.3s_infinite_linear]',
          isRounded ? 'size-[5px]' : 'size-0.75',
          DOT_COLOR[variant],
        )}
        style={{ animationDelay: `${i * 0.3}s` }}
      />
    ))}
  </div>
)

const Button = ({ href, children = '', ...props }: IButtonProps) => {
  const ComponentContent = (
    <Component {...props} href={href}>
      {children}
    </Component>
  )

  return href ? <Link href={href}>{ComponentContent}</Link> : ComponentContent
}

export default Button

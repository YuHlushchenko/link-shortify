import React from 'react'
import { twMerge } from '@/shared/lib/twMerge'
import { IChildren } from '@/app/types/global'
import { HeadingColor } from './Heading.type'

export type THeadingVariant =
  | 'display'
  | 'title'
  | 'subtitle'
  | 'heading'
  | 'headingThin'

interface IProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  children: IChildren
  variant?: THeadingVariant
  color?: HeadingColor
  // applies the h1 brand gradient — overrides color prop when true
  gradient?: boolean
  // extra Tailwind classes — merged via twMerge so they override variant defaults
  className?: string
  style?: React.CSSProperties
}

// Variant → Tailwind class map based on Figma typography scale
const variants: Record<THeadingVariant, string> = {
  display: 'text-h1 leading-[1.05] font-extrabold tracking-[-1.5px]',
  title: 'text-h2 leading-[1.15] font-bold',
  subtitle: 'text-h3 leading-[1.3] font-bold',
  heading: 'text-h4 leading-[1.4] font-bold',
  headingThin: 'text-h4 leading-[1.4] font-light',
}

const Heading = ({
  tag = 'h3',
  children,
  variant = 'heading',
  color = HeadingColor.DEFAULT,
  gradient = false,
  className,
  style,
}: IProps) =>
  React.createElement(
    tag,
    {
      className: twMerge(
        variants[variant],
        gradient && 'text-h1-gradient',
        className,
      ),
      // gradient controls text color via CSS; color prop is ignored when gradient is active
      style: gradient ? style : { color: `var(${color})`, ...style },
    },
    children,
  )

export default Heading

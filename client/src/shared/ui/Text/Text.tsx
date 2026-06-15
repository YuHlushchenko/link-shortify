import React from 'react'
import { twMerge } from '@/shared/lib/twMerge'
import { IChildren } from '@/app/types/global'
import { TextColor } from './Text.type'

export type TTextVariant = 'body' | 'caption' | 'label' | 'mono'

type TTextTag = 'p' | 'span' | 'div' | 'label' | 'figcaption' | 'cite' | 'small'

interface IProps {
  tag?: TTextTag
  children: IChildren
  variant?: TTextVariant
  color?: TextColor
  className?: string
  style?: React.CSSProperties
}

const variants: Record<TTextVariant, string> = {
  body: 'text-lg leading-[1.55] font-normal',
  caption: 'text-md leading-[1.5] font-normal',
  label: 'text-[12px] leading-none font-semibold tracking-[0.08em] uppercase',
  mono: 'text-md leading-[1.5] font-normal font-mono',
}

// Each variant has a distinct Figma default color
const defaultColors: Record<TTextVariant, TextColor> = {
  body: TextColor.DEFAULT, // --fg-2
  caption: TextColor.MUTED, // --fg-3
  label: TextColor.MUTED, // --fg-3
  mono: TextColor.DEFAULT, // --fg-2
}

// Semantic defaults — body is a block element, the rest are inline
const defaultTags: Record<TTextVariant, TTextTag> = {
  body: 'p',
  caption: 'span',
  label: 'span',
  mono: 'span',
}

const Text = ({
  tag,
  children,
  variant = 'body',
  color,
  className,
  style,
}: IProps) =>
  React.createElement(
    tag ?? defaultTags[variant],
    {
      className: twMerge(variants[variant], className),
      style: { color: `var(${color ?? defaultColors[variant]})`, ...style },
    },
    children,
  )

export default Text

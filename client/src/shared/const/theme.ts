/* eslint-disable no-unused-vars */
export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

// TODO: remove ThemeColor after full Tailwind migration — old SCSS vars no longer used
export enum ThemeColor {
  BG_COLOR = '--bg-color',
  TEXT_COLOR = '--text-color',
  ACCENT_COLOR = '--accent-color-1',
  ACCENT_COLOR_2 = '--accent-color-2',
  EXTRA_COLOR = '--extra-color',
  GRADIENT_COLOR = '--gradient-color',
  WEBKIT_GRADIENT_COLOR = '--webkit-gradient-color', // ?
  PRIMARY_COLOR_1 = '--primary-color-1',
  SECONDARY_COLOR_1 = '--secondary-color-1',
  SECONDARY_COLOR_2 = '--secondary-color-2',
}

// Design tokens — all CSS vars from tailwind.css. Single source of truth:
// if a var name changes, update it here only.
export enum DesignToken {
  // Foreground
  FG_1 = '--fg-1',
  FG_2 = '--fg-2',
  FG_3 = '--fg-3',
  FG_DISABLED = '--fg-disabled',

  // Background & surfaces
  BG = '--bg',
  SURFACE_1 = '--surface-1',
  SURFACE_2 = '--surface-2',
  SURFACE_3 = '--surface-3',
  SURFACE_4 = '--surface-4',

  // Borders
  BORDER_SUBTLE = '--border-subtle',
  BORDER = '--border',
  BORDER_STRONG = '--border-strong',

  // Brand (static — same in both themes)
  BRAND_BLUE = '--color-brand-blue',
  BRAND_BLUE_HOVER = '--color-brand-blue-hover',
  BRAND_PINK = '--color-brand-pink',
  BRAND_PURPLE = '--color-brand-purple',

  // Semantic
  SUCCESS = '--color-success',
  WARNING = '--color-warning',
  ERROR = '--color-error',
  INFO = '--color-info',
}

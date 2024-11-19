import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

// default font
export const geistSans = localFont({
  preload: true,
  src: './GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
})

// for accent text
export const geistMono = localFont({
  preload: true,
  src: './GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
})

// for buttons
export const monserat = Montserrat({
  preload: true,
  weight: ['500'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-monserat',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
})

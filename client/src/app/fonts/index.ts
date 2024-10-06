import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

// default font
export const geistSans = localFont({
  src: './GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

// for accent text
export const geistMono = localFont({
  src: './GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

// for buttons
export const monserat = Montserrat({
  weight: ['500'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-monserat',
})

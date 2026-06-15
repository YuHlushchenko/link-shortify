import { Inter, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

// Primary font — body text, headings (Inter variable font covers weights 100–900)
export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
})

// Mono font — URLs, slugs, code snippets
export const geistMono = localFont({
  preload: true,
  src: './GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  fallback: ['Courier New', 'monospace'],
})

// Display font — buttons
export const monserat = Montserrat({
  preload: true,
  weight: ['500'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-monserat',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
})

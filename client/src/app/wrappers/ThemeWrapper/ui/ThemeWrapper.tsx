'use client'

import { useCallback, useEffect } from 'react'
// import { useStore } from '@/app/providers/store/createStore'
import { Theme } from '@/shared/const/theme'

const ThemeWrapper = () => {
  // const { setTheme } = useStore()

  const getCookie = useCallback((name: string) => {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))
    return match ? match[2] : undefined
  }, [])

  useEffect(() => {
    const storedTheme: Theme =
      getCookie('app_theme') === Theme.LIGHT ? Theme.LIGHT : Theme.DARK

    if (storedTheme) {
      // setTheme(storedTheme)
      document.cookie = `app_theme=${storedTheme}; max-age=31536000`
    }
    // setTheme(storedTheme)
  }, [])

  return null
}

export default ThemeWrapper

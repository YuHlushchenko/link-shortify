'use client'

import { useTranslations } from 'next-intl'
import { useRef, useEffect, useCallback } from 'react'
import { useStore } from 'zustand'

import { createThemeStore } from '@/app/providers/store/themeStore'
// import useThemeStore from '@/app/providers/store/themeStore'
import { Theme } from '@/shared/const/theme'

import styles from './ThemeSwitcher.module.scss'

import Sun from 'public/assets/svgs/light-theme-icon.svg'
import Moon from 'public/assets/svgs/dark-theme-icon.svg'

interface IProps {
  initialTheme: Theme
}

const ThemeSwitcher = ({ initialTheme }: IProps) => {
  // eslint-disable-next-line react-hooks/refs -- intentional: stable Zustand store instance created once via ref
  const themeStore = useRef(createThemeStore(initialTheme)).current
  const theme = useStore(themeStore).theme
  const setTheme = useStore(themeStore).setTheme

  // const theme = useThemeStore.use.theme()
  // const setTheme = useThemeStore.use.setTheme()

  const t = useTranslations('common')

  const toggleThemeHandler = useCallback(() => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
  }, [theme, setTheme])

  useEffect(() => {
    document.body.setAttribute('data-theme', theme) // syncs <body data-theme="dark|light"> for CSS vars
    document.cookie = `app_theme=${theme}; max-age=2592000; path=/` // persists theme for 30 days (read server-side in RootLayout)
  }, [theme])

  return (
    <div
      className={styles.container}
      role='button'
      tabIndex={0}
      onClick={toggleThemeHandler}
      aria-label='Toggle theme'
      onKeyDown={(e) => e.key === 'Enter' && toggleThemeHandler()}
    >
      <div
        className={`${styles.lightThemeContainer} ${theme === Theme.LIGHT ? styles.lightThemeContainerActive : ''}`}
      >
        <div className={styles.iconContainer}>
          <Sun data-testid='light-theme-icon' />
        </div>
        <p>
          {t('light')}
          {theme === Theme.LIGHT ? ` ${t('theme')}` : ''}
        </p>
      </div>

      <div
        className={`${styles.darkThemeContainer} ${theme === Theme.DARK ? styles.darkThemeContainerActive : ''}`}
      >
        <div className={styles.iconContainer}>
          <Moon />
        </div>
        <p>
          {t('dark')}
          {theme === Theme.DARK ? ` ${t('theme')}` : ''}
        </p>
      </div>
    </div>
  )
}

export default ThemeSwitcher

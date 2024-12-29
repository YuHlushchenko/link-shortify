'use client'

import { useTranslations } from 'next-intl'
import { useRef, useEffect, useCallback } from 'react'
import { useStore } from 'zustand'

import { createThemeStore } from '@/app/providers/store/themeStore'
import { Theme } from '@/shared/const/theme'

import styles from './ThemeSwitcher.module.scss'

import Sun from 'public/assets/svgs/light-theme-icon.svg'
import Moon from 'public/assets/svgs/dark-theme-icon.svg'

interface IProps {
  initialTheme: Theme
}

export const ThemeSwitcher = ({ initialTheme }: IProps) => {
  const themeStore = useRef(createThemeStore(initialTheme)).current
  const theme = useStore(themeStore).theme
  const setTheme = useStore(themeStore).setTheme

  const t = useTranslations('common')

  const toggleThemeHandler = useCallback(() => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
  }, [theme, setTheme])

  useEffect(() => {
    document.body.setAttribute('data-theme', theme) // <body data-theme='app_dark_theme'></body>
    document.cookie = `app_theme=${theme}; max-age=2592000 path=/` // 30 days
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
        className={
          theme === Theme.LIGHT
            ? `${styles.lightThemeContainer} ${styles.lightThemeContainerActive}`
            : `${styles.lightThemeContainer}`
        }
      >
        <div className={styles.iconContainer}>
          <Sun />
        </div>
        <p>
          {t('light')}
          {theme === Theme.LIGHT ? ` ${t('theme')}` : ''}
        </p>
      </div>

      <div
        className={
          theme === Theme.DARK
            ? `${styles.darkThemeContainer} ${styles.darkThemeContainerActive}`
            : `${styles.darkThemeContainer}`
        }
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

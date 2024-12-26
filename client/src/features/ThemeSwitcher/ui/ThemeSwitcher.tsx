'use client'

import { useTranslations } from 'next-intl'
import { useRef, useEffect } from 'react'
import { useStore } from 'zustand'

import { createThemeStore } from '@/app/providers/store/themeStore'
import { Theme } from '@/shared/const/theme'

import styles from './ThemeSwitcher.module.scss'

import Sun from 'public/assets/svgs/light-theme-icon.svg'
import Moon from 'public/assets/svgs/dark-theme-icon.svg'

interface IProps {
  themeFromCookies: Theme
}

export const ThemeSwitcher = ({ themeFromCookies }: IProps) => {
  const themeStore = useRef(createThemeStore(themeFromCookies)).current
  const { theme, setTheme } = useStore(themeStore)

  const t = useTranslations('common')

  const toggleThemeHandler = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    document.cookie = `app_theme=${theme}; max-age=31536000`
  }, [theme])

  return (
    <div
      className={styles.container}
      role='button'
      tabIndex={0}
      onClick={toggleThemeHandler}
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

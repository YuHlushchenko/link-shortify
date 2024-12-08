'use client'

import { useTranslations } from 'next-intl'
import { Theme } from '@/shared/const/theme'
import { useStore } from '@/app/providers/store/createStore'

import styles from './ThemeSwitcher.module.scss'

import Sun from 'public/assets/svgs/light-theme-icon.svg'
import Moon from 'public/assets/svgs/dark-theme-icon.svg'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useStore()
  const t = useTranslations('common')

  const toggleThemeHandler = () => {
    const newTheme =
      document.body.getAttribute('data-theme') === Theme.DARK
        ? Theme.LIGHT
        : Theme.DARK
    document.body.setAttribute('data-theme', newTheme)
    document.cookie = `app_theme=${newTheme}; max-age=31536000`
    setTheme(newTheme)
  }

  return (
    <div className={styles.container}>
      <div role='button' tabIndex={0} onClick={toggleThemeHandler}>
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
    </div>
  )
}

'use client'

import Button from '@/shared/ui/Button/Button'
import { Theme } from '@/shared/const/theme'
import { useStore } from '@/app/providers/store/createStore'

import styles from './ThemeSwitcher.module.scss'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useStore()

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
      <Button onClick={toggleThemeHandler}>Toggle Theme</Button>
      <p>
        Theme:
        <b>{theme}</b>
      </p>
    </div>
  )
}

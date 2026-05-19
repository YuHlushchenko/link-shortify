import { cookies } from 'next/headers'

import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { Theme } from '@/shared/const/theme'

import styles from './AuthLayout.module.scss'

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const themeFromCookies =
    ((await cookies()).get('app_theme')?.value as Theme) || Theme.DARK

  return (
    <>
      {children}
      <div className={styles.themeSwitcherContainer}>
        <ThemeSwitcher initialTheme={themeFromCookies} />
      </div>
    </>
  )
}

export default AuthLayout

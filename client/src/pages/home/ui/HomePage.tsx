// import { useTranslations } from 'next-intl'

import { Link } from '@/app/i18n/routing'
import { cookies } from 'next/headers'

import { PageWrapper } from '@/app/wrappers/PageWrapper/index'

import { ThemeSwitcher } from '@/features/ThemeSwitcher/index'
import { InputLinkWithAutoPaste } from '@/features/InputLinkWithAutoPaste'

import { Theme } from '@/shared/const/theme'
import BgCover from '@/shared/ui/BgCover/BgCover'

import styles from './HomePage.module.scss'

const HomePage = async () => {
  // const t = useTranslations('common')
  // console.log('HomePage') // REALY WORKS IN SERVER-SIDE

  const themeFromCookies =
    ((await cookies()).get('app_theme')?.value as Theme) || Theme.DARK

  return (
    <PageWrapper>
      <div className={styles.container}>
        <BgCover />

        <div className={styles.themeSwitcherContainer}>
          <ThemeSwitcher initialTheme={themeFromCookies} />
        </div>

        <div className={styles.contentContainer}>
          <h2>Shorten Your Loooong Links :)</h2>

          <h3>
            Link-Shortify is an efficient and easy-to-use URL shortening service
            that streamlines your online experience.
          </h3>

          <div className={styles.inputLinkWithAutoPasteContainer}>
            <InputLinkWithAutoPaste
              checkboxId='autoPasteCheckbox'
              checkboxName='autoPasteCheckbox'
              checkboxLabel='Auto Paste from Clipboard'
            />
          </div>

          <div className={styles.linksLeftContainer}>
            <p>
              You can create
              <span> 05 </span>
              more links. <Link href='/login'>Register Now</Link> to enjoy
              Unlimited usage
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default HomePage

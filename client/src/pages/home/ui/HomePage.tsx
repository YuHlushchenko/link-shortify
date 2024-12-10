// import { useTranslations } from 'next-intl'

import { ThemeSwitcher } from '@/features/ThemeSwitcher'

import { PageWrapper } from '@/app/wrappers/PageWrapper/index'
import BgCover from '@/shared/ui/BgCover/BgCover'

import styles from './HomePage.module.scss'

const HomePage = () => {
  // const t = useTranslations('common')

  return (
    <PageWrapper>
      <div className={styles.container}>
        <BgCover />

        <div className={styles.themeSwitcherContainer}>
          <ThemeSwitcher />
        </div>

        <div className={styles.contentContainer}>
          <h2 className={styles.title}>Shorten Your Loooong Links :)</h2>
          <h3 className={styles.description}>
            Link-Shortify is an efficient and easy-to-use URL shortening service
            that streamlines your online experience.
          </h3>
        </div>
      </div>
    </PageWrapper>
  )
}

export default HomePage

// import { useTranslations } from 'next-intl'

import Image from 'next/image'

import { ThemeSwitcher } from '@/features/ThemeSwitcher'

import styles from './HomePage.module.scss'

import SwirlUrl from 'public/assets/svgs/swirl.svg?url'
import PageWrapper from '@/app/wrappers/PageWrapper/PageWrapper'

const HomePage = () => {
  // const t = useTranslations('common')

  return (
    <PageWrapper>
      <div className={styles.container}>
        <div className={styles.bgCoverContainer}>
          <div className={styles.bgSwirlContainer}>
            <Image priority src={SwirlUrl} alt='swirl' />
          </div>

          <div className={styles.bgCubesContainer}>
            <div className={styles.cubeOneContainer}>
              <div className={styles.cubeOne} />
            </div>
            <div className={styles.cubeTwoContainer}>
              <div className={styles.cubeTwo} />
            </div>
            <div className={styles.cubeThreeContainer}>
              <div className={styles.cubeThree} />
            </div>

            <div className={styles.themeSwitcherContainer}>
              <ThemeSwitcher />
            </div>
          </div>
        </div>

        <div className={styles.contentContainer}>
          {/* <h1 className={styles.title}>Welcome to Link-Shortify</h1>
          <p className={styles.description}>
            Shorten your long URLs with ease and share them with the world
          </p> */}
        </div>
      </div>
    </PageWrapper>
  )
}

export default HomePage

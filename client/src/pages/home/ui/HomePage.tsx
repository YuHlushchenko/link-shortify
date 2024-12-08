// import { useTranslations } from 'next-intl'

import Image from 'next/image'

import { ThemeSwitcher } from '@/features/ThemeSwitcher'

import styles from './HomePage.module.scss'

import SwirlUrl from 'public/assets/svgs/swirl.svg?url'

const HomePage = () => {
  // const t = useTranslations('common')

  return (
    <div className={styles.container}>
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
  )
}

export default HomePage

// import { useTranslations } from 'next-intl'

import Image from 'next/image'

import { ThemeSwitcher } from '@/features/ThemeSwitcher'

import styles from './HomePage.module.scss'

import CubeOne from 'public/assets/svgs/cube1.svg'
import CubeTwo from 'public/assets/svgs/cube2.svg?url'
import CubeThree from 'public/assets/svgs/cube3.svg?url'

const HomePage = () => {
  // const t = useTranslations('common')

  return (
    <div className={styles.container}>
      <div className={styles.bgSwirlContainer} />
      <div className={styles.bgCubesContainer}>
        <div className={styles.cubeOneContainer}>
          {/* <Image priority src={CubeOne} alt='cube1' /> */}
          <CubeOne />
        </div>
        <div className={styles.cubeTwoContainer}>
          <Image priority src={CubeTwo} alt='cube2' />
        </div>
        <div className={styles.cubeThreeContainer}>
          <Image priority src={CubeThree} alt='cube3' />
        </div>

        <div className={styles.themeSwitcherContainer}>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}

export default HomePage

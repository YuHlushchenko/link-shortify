// import { useTranslations } from 'next-intl'

// import Heading from '@/shared/ui/Heading/Heading'

// import { Link } from '@/app/i18n/routing'

// import Logo from 'public/assets/svgs/logo.svg'
import Image from 'next/image'

import CubeOne from 'public/assets/svgs/cube1.svg'
import CubeTwo from 'public/assets/svgs/cube2.svg'
import CubeThree from 'public/assets/svgs/cube3.svg'

import styles from './HomePage.module.scss'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'

const HomePage = () => {
  // const t = useTranslations('common')

  return (
    <div className={styles.container}>
      <div className={styles.bgSwirlContainer} />
      <div className={styles.bgCubesContainer}>
        <div className={styles.cubeOneContainer}>
          <Image priority src={CubeOne} alt='cube1' />
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

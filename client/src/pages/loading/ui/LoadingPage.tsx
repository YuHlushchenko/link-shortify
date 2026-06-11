import Image from 'next/image'

import styles from './LoadingPage.module.scss'

// Static path — SVG lives in /public, no bundler processing needed
const Logo = '/assets/svgs/logo.svg'
import LoadingAnimation from '@/shared/ui/LoadinglAnimation/LoadinglAnimation'

const CIRCLES_COUNT = 100

const LoadingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWithTextContainer}>
        <div className={styles.logoContainer}>
          <Image src={Logo} alt='Link-Shortify' fill />
        </div>

        <h1>Link-Shortify</h1>
      </div>

      <LoadingAnimation circlesCount={CIRCLES_COUNT} />
    </div>
  )
}

export default LoadingPage

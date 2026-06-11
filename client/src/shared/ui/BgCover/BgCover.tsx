import Image from 'next/image'

import styles from './BgCover.module.scss'

// Static path — SVG lives in /public, no bundler processing needed
const SwirlUrl = '/assets/svgs/swirl.svg'

const BgCover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bgSwirlContainer}>
        <Image
          priority
          src={SwirlUrl}
          alt='swirl'
          width={400}
          height={400}
          quality={10}
        />
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
      </div>
    </div>
  )
}

export default BgCover

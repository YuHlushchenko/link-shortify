import Image from 'next/image'

import styles from './BgCover.module.scss'

import SwirlUrl from 'public/assets/svgs/swirl.svg?url'

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
          // placeholder='blur'
          // blurDataURL={SwirlUrl}
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

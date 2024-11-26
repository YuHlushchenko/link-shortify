import Image from 'next/image'

import styles from './Loading.module.scss'

import Logo from 'public/assets/svgs/logo.svg'

const CIRCLES_COUNT = 170

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src={Logo} alt='Link-Shortify' width={35} height={35} />
        <h1>Link-Shortify</h1>
      </div>

      {Array.from({ length: CIRCLES_COUNT }).map((_, index) => (
        <div key={index} className={styles.infinityContainer}>
          <div
            className={styles.circleLeft}
            style={{
              animationDelay: `${index * 0.01}s`,
              opacity: 1 - index / CIRCLES_COUNT,
              backgroundColor: `hsl(${(index * 360) / CIRCLES_COUNT}, 100%, 50%)`,
              // makes circle ivisible until it's time to animate
            }}
          />
          <div
            className={styles.circleRight}
            style={{
              animationDelay: `${index * 0.01}s`,
              opacity: 1 - index / CIRCLES_COUNT,
              backgroundColor: `hsl(${(index * 360) / CIRCLES_COUNT}, 100%, 50%)`,
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default Loading

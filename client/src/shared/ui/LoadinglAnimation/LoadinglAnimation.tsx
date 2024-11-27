import styles from './LoadinglAnimation.module.scss'

interface IProps {
  circlesCount: number
  scale?: number
}

const LoadingAnimation = ({ circlesCount, scale = 1 }: IProps) => {
  return (
    <div
      style={{
        transform: `scale(${scale})`,
      }}
    >
      {Array.from({ length: circlesCount }).map((_, index) => (
        <div key={index} className={styles.infinityContainer}>
          <div
            className={styles.circleLeft}
            style={{
              animationDelay: `${index * 0.01}s`,
              opacity: 1 - index / circlesCount,
              backgroundColor: `hsl(${(index * 360) / circlesCount}, 100%, 50%)`,
              // backgroundColor: `hsl(${160 + (index * 60) / circlesCount}, 100%, 50%)`,
            }}
            data-testid='circle'
          />
          <div
            className={styles.circleRight}
            style={{
              animationDelay: `${index * 0.01}s`,
              opacity: 1 - index / circlesCount,
              backgroundColor: `hsl(${(index * 360) / circlesCount}, 100%, 50%)`,
              // backgroundColor: `hsl(${160 + (index * 60) / circlesCount}, 100%, 50%)`,
            }}
            data-testid='circle'
          />
        </div>
      ))}
    </div>
  )
}

export default LoadingAnimation

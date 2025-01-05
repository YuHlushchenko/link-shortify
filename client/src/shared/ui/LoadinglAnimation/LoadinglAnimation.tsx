import styles from './LoadinglAnimation.module.scss'

interface IProps {
  circlesCount?: number
  scale?: number
}

const LoadingAnimation = ({ circlesCount = 100, scale = 1 }: IProps) => {
  return (
    <div
      className={styles.container}
      style={{
        transform: `scale(${scale})`,
      }}
      data-testid='loading-animation-container'
    >
      {Array.from({ length: circlesCount }).map((_, index) => (
        <div key={index} className={styles.infinityContainer}>
          <div
            className={styles.circleLeft}
            style={{
              // animationDelay is negative for skipping the appearance of the animation
              animationDelay: `${index * -0.01}s`,
              opacity: index / circlesCount,
              backgroundColor: `hsl(${227 + (index * (338 - 227)) / circlesCount}, 84%, 50%)`,
            }}
            data-testid='circle'
          />
          <div
            className={styles.circleRight}
            style={{
              animationDelay: `${index * -0.01}s`,
              backgroundColor: `hsl(${227 + (index * (338 - 227)) / circlesCount}, 84%, 50%)`,
              opacity: index / circlesCount,
            }}
            data-testid='circle'
          />
        </div>
      ))}
    </div>
  )
}

export default LoadingAnimation

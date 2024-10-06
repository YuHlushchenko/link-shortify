import Link from 'next/link'

// import styles from "@/styles/pages/notFound.module.sass";

const NotFound = () => {
  return (
    <div
    // className={styles.container}
    >
      <h1>Сторінку не знайдено</h1>
      <h2>
        Повернутися на
        <Link href='/'>головну</Link>
      </h2>
    </div>
  )
}

export default NotFound

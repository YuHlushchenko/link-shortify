import { useTranslations } from 'next-intl'

import Button from '@/shared/ui/Button/Button'

// import styles from "./page.module.css";

const HomePage = () => {
  const t = useTranslations('HomePage')

  return (
    <div
    // className={styles.page}
    >
      <h1>Home</h1>

      <p>Welcome to the Home page</p>
      <code>{t('title')}</code>

      <Button className='disabled'>btn</Button>
    </div>
  )
}

export default HomePage

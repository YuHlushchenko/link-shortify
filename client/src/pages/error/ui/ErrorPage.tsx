'use client'

import { useRouter } from '@/app/i18n/routing'

import Button from '@/shared/ui/Button/Button'

import styles from './ErrorPage.module.scss'

const ErrorPage = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1>500</h1>

        <h2>Sorry! It&apos;s me, not you.</h2>

        <p>Let me help you return to the previous page.</p>

        <div>
          <Button onClick={router.back} aria-label='Go to the previous page'>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage

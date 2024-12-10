'use client'

import { useTranslations } from 'next-intl'
import { useRouter } from '@/app/i18n/routing'

import BgCover from '@/shared/ui/BgCover/BgCover'
import Button from '@/shared/ui/Button/Button'

import styles from './ErrorPage.module.scss'

const ErrorPage = () => {
  const router = useRouter()
  const t = useTranslations('errorPage')

  // Redirect to the home page if there is no history
  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <div
      className={styles.container}
      role='alert'
      aria-labelledby='error-title'
    >
      <div className={styles.bgCoverContainer}>
        <BgCover />
      </div>

      <div className={styles.contentContainer}>
        <h1>500</h1>

        <h2>{t('sorryItAndAposSMeNotYou')}</h2>

        <p>{t('letMeHelpYouReturnToThePreviousPage')}</p>

        <div>
          <Button onClick={handleGoBack} aria-label='go-to-the-previous-page'>
            {t('goBack')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage

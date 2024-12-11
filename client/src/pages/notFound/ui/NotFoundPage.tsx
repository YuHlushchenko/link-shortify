/* eslint-disable react/jsx-one-expression-per-line */
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import Link from 'next/link'

import BgCover from '@/shared/ui/BgCover/BgCover'

import styles from '@/pages/notFound/ui/NotFoundPage.module.scss'

const REDIRECT_TIMER = 10 // Time in seconds before redirect

const NotFound = () => {
  const [remainingTime, setRemainingTime] = useState(REDIRECT_TIMER)
  const router = useRouter()
  const t = useTranslations('notFoundPage')

  const redirectToHome = () => {
    router.push('/')
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1)
      } else {
        redirectToHome()
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [remainingTime])

  return (
    <div
      className={styles.container}
      role='alert'
      aria-labelledby='not-found-title'
    >
      <div className={styles.bgCoverContainer}>
        <BgCover />
      </div>

      <div className={styles.contentContainer}>
        <h1>404</h1>

        <h2>{t('oopsThePageYouAndAposReLookingForDoesnAndAposTExist')}</h2>

        <p>
          {t('youWillBeReturnedToThe')}
          <br />
          <Link href='/' aria-label='home page'>
            {t('homePage')}
          </Link>{' '}
          {t('in')}{' '}
          <span aria-live='polite'>
            {remainingTime >= 10 ? '' : 0}
            {remainingTime}
          </span>
        </p>
      </div>
    </div>
  )
}

export default NotFound

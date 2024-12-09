/* eslint-disable react/jsx-one-expression-per-line */
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import Link from 'next/link'

import BgCover from '@/shared/ui/BgCover/BgCover'

import styles from '@/pages/notFound/ui/NotFound.module.scss'

const REDIRECT_TIMER = 10 // Time in seconds before redirect
const ONE_SECOND = 1000

const NotFound = () => {
  const [remainingTime, setRemainingTime] = useState(REDIRECT_TIMER)
  const router = useRouter()
  const t = useTranslations('notFoundPage')

  const redirectToHome = () => {
    router.push('/')
  }

  useEffect(() => {
    if (remainingTime <= 0) {
      redirectToHome()
    }
  }, [remainingTime])

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(prevTime - 1, 0))
    }, ONE_SECOND)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.bgCoverContainer}>
        <BgCover />
      </div>

      <div className={styles.contentContainer}>
        <h1>404</h1>

        <h2>{t('oopsThePageYouAndAposReLookingForDoesnAndAposTExist')}</h2>

        <p>
          {t('youWillBeReturnedToThe')}
          <br />
          <Link href='/'>{t('homePage')}</Link> {t('in')}{' '}
          <span>
            {remainingTime >= 10 ? '' : 0}
            {remainingTime}
          </span>
        </p>
      </div>
    </div>
  )
}

export default NotFound

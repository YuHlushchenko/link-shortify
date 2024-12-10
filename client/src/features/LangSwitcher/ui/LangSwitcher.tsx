'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useTransition } from 'react'
import { usePathname, useRouter } from '@/app/i18n/routing'
// import { TLocale } from '@/app/types/global'

import styles from './LangSwitcher.module.scss'

import UAFlag from 'public/assets/svgs/ua-flag.svg?url'
import ENFlag from 'public/assets/svgs/en-flag.svg?url'

const LangSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isPending, startTransition] = useTransition()

  const toggleLangHandler = () => {
    const nextLocale = params?.locale === 'uk' ? 'en' : 'uk'

    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale })
    })
  }

  return isPending ? (
    <div>Loading...</div>
  ) : (
    <div
      className={styles.container}
      role='button'
      tabIndex={0}
      onClick={toggleLangHandler}
    >
      <div className={styles.langSwitcherBtn}>
        <div
          className={
            params?.locale === 'uk'
              ? `${styles.langContainer} ${styles.langContainerActive}`
              : styles.langContainer
          }
        >
          <div className={styles.imgContainer}>
            <Image src={UAFlag} alt='ukrainian' />
          </div>

          <p>ua</p>
        </div>

        <div
          className={
            params?.locale === 'en'
              ? `${styles.langContainer} ${styles.langContainerActive}`
              : styles.langContainer
          }
        >
          <div className={styles.imgContainer}>
            <Image src={ENFlag} alt='english' />
          </div>

          <p>en</p>
        </div>
      </div>
    </div>
  )
}

export default LangSwitcher

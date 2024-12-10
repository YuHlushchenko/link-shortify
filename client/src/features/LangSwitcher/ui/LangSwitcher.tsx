'use client'

// import { useParams } from 'next/navigation'
// import { ChangeEvent, ReactNode, useTransition } from 'react'
// import { Link, redirect, usePathname, useRouter } from '@/app/i18n/routing'

import styles from './LangSwitcher.module.scss'

const LangSwitcher = () => {
  //   const router = useRouter()
  //   const pathname = usePathname()
  //   const params = useParams()
  //   const [isPending, startTransition] = useTransition()

  const toggleLangHandler = () => {
    // const nextLocale = router.locale === 'en' ? 'uk' : 'en'
    // startTransition(() => {
    //   router.replace({ pathname, params }, { locale: nextLocale })
    // })
  }

  return (
    <div className={styles.container}>
      <div role='button' tabIndex={0} onClick={toggleLangHandler}>
        LangSwitcher
      </div>
    </div>
  )
}

export default LangSwitcher

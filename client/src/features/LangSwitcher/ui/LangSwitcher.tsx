'use client'

import { FC, useCallback, useTransition } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'

import { usePathname, useRouter } from '@/app/i18n/routing'
import { TLocale } from '@/app/types/global'

import styles from './LangSwitcher.module.scss'

import UAFlagUrl from 'public/assets/svgs/ua-flag.svg?url'
import ENFlagUrl from 'public/assets/svgs/en-flag.svg?url'

interface IRenderBtnProps {
  locale: TLocale
  flagUrl: string
  alt: string
  lang: string
}

const LangSwitcher: FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isPending, startTransition] = useTransition()

  const toggleLangHandler = useCallback(() => {
    const nextLocale = params?.locale === 'uk' ? 'en' : 'uk'

    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale })
    })
  }, [params?.locale, router, pathname])

  const getLangContainerClass = useCallback(
    (lang: TLocale) =>
      `${styles.langContainer} ${params?.locale === lang ? styles.langContainerActive : ''}`,
    [params?.locale],
  )

  const renderBtn = useCallback(
    ({ locale, flagUrl, alt, lang }: IRenderBtnProps) => (
      <div className={getLangContainerClass(locale)}>
        <div className={styles.imgContainer}>
          <Image src={flagUrl} alt={alt} width={24} height={24} />
        </div>
        <p>{lang}</p>
      </div>
    ),
    [getLangContainerClass],
  )

  return isPending ? (
    // TODO: Add skeleton loader
    <div>Loading...</div>
  ) : (
    <div
      className={styles.container}
      role='button'
      tabIndex={0}
      aria-label='Toggle language'
      onKeyDown={(e) => e.key === 'Enter' && toggleLangHandler()}
      onClick={toggleLangHandler}
    >
      <div className={styles.langSwitcherBtn}>
        {renderBtn({
          locale: 'uk',
          flagUrl: UAFlagUrl,
          alt: 'Ukrainian flag',
          lang: 'ua',
        })}

        {renderBtn({
          locale: 'en',
          flagUrl: ENFlagUrl,
          alt: 'English flag',
          lang: 'en',
        })}
      </div>
    </div>
  )
}

export default LangSwitcher

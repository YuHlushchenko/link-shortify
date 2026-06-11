'use client'

import { FC, useCallback, useTransition } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'

import { usePathname, useRouter } from '@/app/i18n/routing'
import { TLocale } from '@/app/types/global'

import styles from './LangSwitcher.module.scss'

// Static paths — SVGs live in /public, served as-is without bundler processing
const UAFlagUrl = '/assets/svgs/ua-flag.svg'
const ENFlagUrl = '/assets/svgs/en-flag.svg'

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

  // Handle undefined or invalid locale gracefully
  const currentLocale =
    params?.locale === 'uk' || params?.locale === 'en' ? params.locale : 'en'

  const toggleLangHandler = useCallback(() => {
    const nextLocale = currentLocale === 'uk' ? 'en' : 'uk'

    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale })
    })
  }, [currentLocale, router, pathname])

  const getLangContainerClass = useCallback(
    (lang: TLocale) =>
      `${styles.langContainer} ${currentLocale === lang ? styles.langContainerActive : ''}`,
    [currentLocale],
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
    <div className={styles.skeleton} data-testid='lang-switcher-skeleton' />
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

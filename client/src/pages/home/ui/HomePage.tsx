// import { useTranslations } from 'next-intl'

import { Link } from '@/app/i18n/routing'
import { cookies } from 'next/headers'

import { PageWrapper } from '@/app/wrappers/PageWrapper/index'

import { ThemeSwitcher } from '@/features/ThemeSwitcher/index'
import { InputLinkWithAutoPaste } from '@/features/InputLinkWithAutoPaste'

import { Theme } from '@/shared/const/theme'

import Heading from '@/shared/ui/Heading/Heading'
import Text from '@/shared/ui/Text/Text'
import { TextColor } from '@/shared/ui/Text/Text.type'

const HomePage = async () => {
  // const t = useTranslations('common')

  const themeFromCookies =
    ((await cookies()).get('app_theme')?.value as Theme) || Theme.DARK

  return (
    <PageWrapper>
      <>
        {/* <div className={styles.themeSwitcherContainer}>
          <ThemeSwitcher initialTheme={themeFromCookies} />
        </div> */}

        <div className='min-h-svh w-full flex flex-col items-center justify-center p-[0_20px] sm:p-[0_30px] md:p-[0_35px] lg:p-[0_45px] xl:p-[0_120px]'>
          <Heading
            gradient
            tag='h1'
            variant='display'
            className='text-center mb-2.5 animate-gradient sm:mb-3 sm:max-w-[75%] md:max-w-full'
          >
            Shorten Your Loooong Links :)
          </Heading>

          <Text
            tag='p'
            className='text-lg text-center sm:max-w-79'
            color={TextColor.MUTED}
          >
            Link-Shortify is an efficient and easy-to-use URL shortening service
            that streamlines your online experience.
          </Text>

          <div className='mt-5.5 w-full'>
            <InputLinkWithAutoPaste
              checkboxId='autoPasteCheckbox'
              checkboxName='autoPasteCheckbox'
              checkboxLabel='Auto Paste from Clipboard'
            />
          </div>

          <div className='mt-2.5 flex items-center justify-center sm:mt-3'>
            <Text variant='caption' className='sm:text-base'>
              <span className='font-bold text-brand-pink'>05 </span>
              free links left ·{' '}
              <Link href='/auth/signup' className='font-bold text-brand-blue'>
                Register Now
              </Link>{' '}
              for unlimited
            </Text>
          </div>
        </div>
      </>
    </PageWrapper>
  )
}

export default HomePage

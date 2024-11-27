import { useTranslations } from 'next-intl'

import LoadingAnimation from '@/shared/ui/LoadinglAnimation/LoadinglAnimation'

import Button from '@/shared/ui/Button/Button'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import Heading from '@/shared/ui/Heading/Heading'

import { Link } from '@/app/i18n/routing'
import { NotFoundPage } from '@/pages/notFound'

const HomePage = () => {
  const t = useTranslations('common')

  return (
    <>
      <h1>Home</h1>

      <p>Welcome to the Home page</p>
      <code>{t('title')}</code>

      <Button className='default'>btn</Button>
      <Heading>Heading</Heading>
      <Link href='/about'>About</Link>
      <ThemeSwitcher />
      <div
        style={{
          width: '100px',
          height: '100px',
          border: '1px solid red',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <LoadingAnimation scale={0.2} circlesCount={100} />
      </div>
      <div
        style={{
          width: '100vw',
          height: '100svh',
          border: '1px solid red',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <NotFoundPage />
      </div>
    </>
  )
}

export default HomePage

// import { useTranslations } from 'next-intl'

// import Button from '@/shared/ui/Button/Button'
// import { ThemeSwitcher } from '@/features/ThemeSwitcher'
// import Heading from '@/shared/ui/Heading/Heading'

// import { Link } from '@/app/i18n/routing'
import { LoadingPage } from '@/pages/loading'

const HomePage = () => {
  // const t = useTranslations('common')

  return (
    <>
      {/* <h1>Home</h1>

      <p>Welcome to the Home page</p>
      <code>{t('title')}</code>

      <Button className='default'>btn</Button>
      <Heading>Heading</Heading>
      <Link href='/about'>About</Link> */}
      {/* <ThemeSwitcher /> */}
      <LoadingPage />
    </>
  )
}

export default HomePage

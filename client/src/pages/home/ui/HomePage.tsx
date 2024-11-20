import { useTranslations } from 'next-intl'

import Button from '@/shared/ui/Button/Button'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import Heading from '@/shared/ui/Heading/Heading'

const HomePage = () => {
  const t = useTranslations('HomePage')

  return (
    <>
      <h1>Home</h1>

      <p>Welcome to the Home page</p>
      <code>{t('title')}</code>

      <Button className='default'>btn</Button>
      <Heading>Heading</Heading>
      <ThemeSwitcher />
    </>
  )
}

export default HomePage

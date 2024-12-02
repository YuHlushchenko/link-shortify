import { useTranslations } from 'next-intl'

// import LoadingAnimation from '@/shared/ui/LoadinglAnimation/LoadinglAnimation'

// import Button from '@/shared/ui/Button/Button'
// import { ThemeSwitcher } from '@/features/ThemeSwitcher'
// import Heading from '@/shared/ui/Heading/Heading'

// import { Link } from '@/app/i18n/routing'
// import { ErrorPage } from '@/pages/error'

import Logo from 'public/assets/svgs/logo.svg'
import Image from 'next/image'

import styles from './HomePage.module.scss'

const HomePage = () => {
  const t = useTranslations('common')

  return (
    <div className={styles.container}>
      <div className={styles.topPatternContainer}></div>

      <p>{t('welcomeTo')}</p>

      <div className={styles.logoWithTextContainer}>
        <div className={styles.logoContainer}>
          <Image src={Logo} alt='Link-Shortify Logo' layout='fill' />
        </div>

        <h1>Link-Shortify</h1>
      </div>

      <p>
        Say goodbye to long, cluttered URLs. With Link-Shortify, you can easily
        create sleek, shareable links in just a few seconds. Simplify your
        links, enhance their accessibility, and start tracking performance—all
        in one place.
      </p>

      <div className={styles.mainFormContainer}>
        <form>
          <input type='text' placeholder='Paste your link here' />
          <button>Shorten</button>
        </form>
      </div>

      {/* <Button className='default'>btn</Button>
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
      </div> */}
    </div>
  )
}

export default HomePage

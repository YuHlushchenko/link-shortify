'use client'

import Image from 'next/image'

import { LangSwitcher } from '@/features/LangSwitcher'
import { Link, usePathname } from '@/app/i18n/routing'
import Button from '@/shared/ui/Button/Button'

import styles from './Navbar.module.scss'

// Static path — SVG lives in /public, no bundler processing needed
const LogoUrl = '/assets/svgs/logo.svg'
import Login from 'public/assets/svgs/sign-in.svg' // ! will be added to bundle as a React component, will be rendered in a client-side cuz of 'use client'

const Navbar = () => {
  const pathname = usePathname()
  const isAuthPage = pathname.startsWith('/auth/')

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <header className={styles.logoContainer}>
          <Link href='/' className={styles.logoLink}>
            <Image priority src={LogoUrl} alt='logo' width='30' height='30' />
            <h1 className={styles.logo}>Link-Shortify</h1>
          </Link>
        </header>

        <div className={styles.btnsContainer}>
          <div className={!isAuthPage ? styles.langSwitcherContainer : ''}>
            <LangSwitcher />
          </div>

          {!isAuthPage && (
            <>
              {/* for desktop */}
              <div className={styles.loginBtnContainer}>
                <Button
                  href='/auth/login'
                  iconRight={<Login />}
                  variant='primary'
                  iconRightContainerStyle={{ right: '24px' }}
                >
                  login
                </Button>
              </div>

              {/* for mobile */}
              <div className={styles.loginBtnContainerMobile}>
                <Button href='/auth/login' variant='primary' isRounded={true}>
                  <Login />
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar

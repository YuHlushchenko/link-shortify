import Image from 'next/image'

import { LangSwitcher } from '@/features/LangSwitcher'
import Button from '@/shared/ui/Button/Button'

import styles from './Navbar.module.scss'

import LogoUrl from 'public/assets/svgs/logo.svg?url'
import Login from 'public/assets/svgs/sign-in.svg'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <header className={styles.logoContainer}>
          <Image priority src={LogoUrl} alt='logo' width='30' height='30' />
          <h1 className={styles.logo}>Link-Shortify</h1>
        </header>

        <div className={styles.btnsContainer}>
          <div className={styles.langSwitcherContainer}>
            <LangSwitcher />
          </div>

          {/* for desktop */}
          <div className={styles.loginBtnContainer}>
            <Button
              href='/login'
              iconRight={<Login />}
              className='accent'
              iconRightContainerStyle={{ right: '24px' }}
            >
              login
            </Button>
          </div>

          {/* for mobile */}
          <div className={styles.loginBtnContainerMobile}>
            <Button href='/login' className='accent' isRounded={true}>
              <Login />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

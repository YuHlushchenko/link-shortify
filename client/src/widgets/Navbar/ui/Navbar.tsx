'use client'

import Image from 'next/image'
import { useCallback, useState } from 'react'

import { AuthModal } from '@/features/AuthByUsername'
import { LangSwitcher } from '@/features/LangSwitcher'
import Button from '@/shared/ui/Button/Button'

import styles from './Navbar.module.scss'

import LogoUrl from 'public/assets/svgs/logo.svg?url' // ! more optimized option
import Login from 'public/assets/svgs/sign-in.svg' // ! will be added to bundle as a React component, will be rendered in a client-side cuz of 'use client'

const Navbar = () => {
  // shared/lib/isLokiTest.ts

  const [isAuthModal, setAuthModal] = useState(false)

  const closeModalHandler = useCallback(() => {
    setAuthModal(false)
  }, [])

  const showModalHandler = useCallback(() => {
    setAuthModal(true)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <header className={styles.logoContainer}>
          {/* ! more optimized option */}
          <Image
            priority
            src={LogoUrl}
            alt='logo'
            width='30'
            height='30'
          />{' '}
          <h1 className={styles.logo}>Link-Shortify</h1>
        </header>

        <div className={styles.btnsContainer}>
          <div className={styles.langSwitcherContainer}>
            <LangSwitcher />
          </div>

          {/* for desktop */}
          <div className={styles.loginBtnContainer}>
            <Button
              iconRight={<Login />}
              className='accent'
              iconRightContainerStyle={{ right: '24px' }}
              onClick={showModalHandler}
            >
              login
            </Button>
          </div>

          {/* for mobile */}
          <div className={styles.loginBtnContainerMobile}>
            <Button
              className='accent'
              isRounded={true}
              onClick={showModalHandler}
            >
              <Login />
            </Button>
          </div>
        </div>
      </div>

      <AuthModal
        data-testid='auth-modal'
        isOpen={isAuthModal}
        onClose={() => closeModalHandler()}
      />
    </div>
  )
}

export default Navbar

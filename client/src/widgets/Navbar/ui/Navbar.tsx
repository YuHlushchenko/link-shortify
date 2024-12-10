import Image from 'next/image'

import { LangSwitcher } from '@/features/LangSwitcher'

import styles from './Navbar.module.scss'

import LogoUrl from 'public/assets/svgs/logo.svg?url'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <header className={styles.logoContainer}>
        <Image priority src={LogoUrl} alt='logo' />
        <h1 className={styles.logo}>Link-Shortify</h1>
      </header>

      <div className={styles.btnsContainer}>
        <div className={styles.langSwitcherContainer}>
          <LangSwitcher />
        </div>
      </div>
    </div>
  )
}

export default Navbar

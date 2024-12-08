import Image from 'next/image'

import Button from '@/shared/ui/Button/Button'

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
        <Button
          style={{
            width: '180px',
            marginRight: '20px',
          }}
        >
          Login
        </Button>
        <Button
          style={{
            width: '123px',
          }}
        >
          Register Now
        </Button>
      </div>
    </div>
  )
}

export default Navbar

import Button from '@/shared/ui/Button/Button'

import styles from './LoginForm.module.scss'
// import Input from '@/shared/ui/Input/Input'

export const LoginForm = () => {
  return (
    <div className={styles.container} data-testid='login-form-modal'>
      <form action=''>
        {/* <Input type='text' /> */}
        <input type='text' style={{ width: '400px', maxWidth: '100%' }} />
        <input type='email' style={{ width: '400px', maxWidth: '100%' }} />
        <input type='password' style={{ width: '400px', maxWidth: '100%' }} />

        <div className={styles.btnContainer}>
          <Button type='submit' className='accent'>
            sign in
          </Button>
        </div>
      </form>
    </div>
  )
}

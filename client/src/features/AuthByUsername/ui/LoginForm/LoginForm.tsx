import Button from '@/shared/ui/Button/Button'
import styles from './LoginForm.module.scss'

export const LoginForm = () => {
  return (
    <div className={styles.container}>
      <form action=''>
        <input type='text' />
        <input type='email' />
        <input type='password' />
        <input type='password' />

        <div className={styles.btnContainer}>
          <Button type='submit'>Sign in</Button>
        </div>
      </form>
    </div>
  )
}

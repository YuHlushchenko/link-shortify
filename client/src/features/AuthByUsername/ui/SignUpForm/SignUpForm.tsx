'use client'

import { useState } from 'react'
import { Link } from '@/app/i18n/routing'
import { useAuth } from '@/app/auth/use-auth'
import BgCover from '@/shared/ui/BgCover/BgCover'
import Button from '@/shared/ui/Button/Button'

import EyeIcon from 'public/assets/svgs/eye.svg'
import EyeOffIcon from 'public/assets/svgs/eye-off.svg'
import GoogleIcon from 'public/assets/svgs/google.svg'

import styles from '../auth.module.scss'

export const SignUpForm = () => {
  const { signup, signInWithProvider } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    setLoading(true)
    try {
      await signup(email, password)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Sign up failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <BgCover />

      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Create Account</h1>
          <p className={styles.subtitle}>
            Join Link-Shortify and start shortening links
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <input
              id='email'
              className={styles.input}
              type='email'
              placeholder='you@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='email'
              required
            />
          </div>

          <div className={styles.field}>
            <div className={styles.inputWrapper}>
              <input
                id='password'
                className={styles.input}
                type={showPassword ? 'text' : 'password'}
                placeholder='Min. 8 characters'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='new-password'
                required
              />
              <button
                type='button'
                className={styles.eyeButton}
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOffIcon width={20} height={20} />
                ) : (
                  <EyeIcon width={20} height={20} />
                )}
              </button>
            </div>
          </div>

          <div className={styles.field}>
            <div className={styles.inputWrapper}>
              <input
                id='confirmPassword'
                className={styles.input}
                type={showConfirm ? 'text' : 'password'}
                placeholder='Repeat your password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete='new-password'
                required
              />
              <button
                type='button'
                className={styles.eyeButton}
                onClick={() => setShowConfirm((v) => !v)}
                aria-label={showConfirm ? 'Hide password' : 'Show password'}
              >
                {showConfirm ? (
                  <EyeOffIcon width={20} height={20} />
                ) : (
                  <EyeIcon width={20} height={20} />
                )}
              </button>
            </div>
          </div>

          {error && <p className={styles.errorText}>{error}</p>}

          <Button
            type='submit'
            className='accent'
            style={{
              width: '100%',
              height: '50px',
              justifyContent: 'center',
              fontSize: '14px',
            }}
            disabled={loading}
          >
            {loading ? 'Creating account…' : 'Create Account'}
          </Button>
        </form>

        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerText}>or continue with</span>
          <span className={styles.dividerLine} />
        </div>

        <button
          type='button'
          className={styles.googleButton}
          onClick={() => signInWithProvider('Google')}
        >
          <GoogleIcon width={18} height={18} />
          Continue with Google
        </button>

        <p className={styles.switchLink}>
          Already have an account? <Link href='/auth/login'>Login</Link>
        </p>
      </div>
    </div>
  )
}

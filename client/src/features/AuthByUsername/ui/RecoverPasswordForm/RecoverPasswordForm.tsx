'use client'

import { useState } from 'react'
import { Link } from '@/app/i18n/routing'
import { useAuth } from '@/app/auth/use-auth'
import BgCover from '@/shared/ui/BgCover/BgCover'
import Button from '@/shared/ui/Button/Button'

import EyeIcon from 'public/assets/svgs/eye.svg'
import EyeOffIcon from 'public/assets/svgs/eye-off.svg'

import styles from '../auth.module.scss'

type Step = 'request' | 'confirm'

export const RecoverPasswordForm = () => {
  const { forgotPassword, confirmForgotPassword } = useAuth()

  const [step, setStep] = useState<Step>('request')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRequest = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await forgotPassword(email)
      setStep('confirm')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to send reset code')
    } finally {
      setLoading(false)
    }
  }

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    setLoading(true)
    try {
      await confirmForgotPassword(email, code, newPassword)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to reset password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <BgCover />

      <div className={styles.card}>
        {step === 'request' ? (
          <>
            <div className={styles.header}>
              <h1 className={styles.title}>Forgot Password?</h1>
              <p className={styles.subtitle}>
                Enter your email and we&apos;ll send you a reset code.
              </p>
            </div>

            <form className={styles.form} onSubmit={handleRequest}>
              <div className={styles.field}>
                <input
                  id='email'
                  className={styles.input}
                  type='email'
                  placeholder='Enter e-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete='email'
                  required
                />
              </div>

              {error && <p className={styles.errorText}>{error}</p>}

              <Button
                type='submit'
                variant='primary'
                style={{
                  width: '100%',
                  height: '50px',
                  justifyContent: 'center',
                  fontSize: '14px',
                }}
                disabled={loading}
              >
                {loading ? 'Sending…' : 'Send Reset Code'}
              </Button>
            </form>
          </>
        ) : (
          <>
            <div className={styles.header}>
              <h1 className={styles.title}>Reset Password</h1>
              <p className={styles.subtitle}>
                Enter the code we sent to <strong>{email}</strong> and choose a
                new password.
              </p>
            </div>

            <form className={styles.form} onSubmit={handleConfirm}>
              <div className={styles.field}>
                <input
                  id='code'
                  className={styles.input}
                  type='text'
                  inputMode='numeric'
                  placeholder='123456'
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                  autoComplete='one-time-code'
                  required
                />
              </div>

              <div className={styles.field}>
                <div className={styles.inputWrapper}>
                  <input
                    id='newPassword'
                    className={styles.input}
                    type={showNew ? 'text' : 'password'}
                    placeholder='Enter password'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    autoComplete='new-password'
                    required
                  />
                  <button
                    type='button'
                    className={styles.eyeButton}
                    onClick={() => setShowNew((v) => !v)}
                    aria-label={showNew ? 'Hide password' : 'Show password'}
                  >
                    {showNew ? (
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
                    placeholder='Confirm password'
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
                variant='primary'
                style={{
                  width: '100%',
                  height: '50px',
                  justifyContent: 'center',
                  fontSize: '14px',
                }}
                disabled={loading}
              >
                {loading ? 'Resetting…' : 'Reset Password'}
              </Button>

              <button
                type='button'
                className={styles.backButton}
                onClick={() => {
                  setStep('request')
                  setError('')
                }}
              >
                ← Change email
              </button>
            </form>
          </>
        )}

        <p className={styles.switchLink}>
          <Link href='/auth/login'>← Back to Login</Link>
        </p>
      </div>
    </div>
  )
}

'use client'

import { useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Link } from '@/app/i18n/routing'
import { useAuth } from '@/app/auth/use-auth'
import BgCover from '@/shared/ui/BgCover/BgCover'
import Button from '@/shared/ui/Button/Button'

import styles from '../auth.module.scss'

const CODE_LENGTH = 6

export const VerifyEmailForm = () => {
  const { confirmUser, resendCode } = useAuth()
  const searchParams = useSearchParams()
  const email = searchParams?.get('email') ?? ''

  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(''))
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [resent, setResent] = useState(false)

  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(-1)
    const next = [...code]
    next[index] = digit
    setCode(next)
    if (digit && index < CODE_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    const pasted = e.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, CODE_LENGTH)
    if (!pasted) return
    e.preventDefault()
    const next = [...code]
    pasted.split('').forEach((char, i) => {
      next[i] = char
    })
    setCode(next)
    inputsRef.current[Math.min(pasted.length, CODE_LENGTH - 1)]?.focus()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const fullCode = code.join('')
    if (fullCode.length < CODE_LENGTH) {
      setError('Please enter the full 6-digit code')
      return
    }
    setLoading(true)
    try {
      await confirmUser(email, fullCode)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Verification failed')
    } finally {
      setLoading(false)
    }
  }

  const handleResend = async () => {
    if (!email) return
    try {
      await resendCode(email)
      setResent(true)
      setTimeout(() => setResent(false), 5000)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to resend code')
    }
  }

  return (
    <div className={styles.container}>
      <BgCover />

      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Verify Your Email</h1>
          <p className={styles.subtitle}>
            We&apos;ve sent a 6-digit code to
            {email ? ` ${email}` : ' your email address'}
            .
            <br />
            Enter it below to verify your account.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.codeRow} onPaste={handlePaste}>
            {code.map((digit, i) => (
              <input
                key={i}
                ref={(el) => {
                  inputsRef.current[i] = el
                }}
                className={styles.codeInput}
                type='text'
                inputMode='numeric'
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                autoComplete='one-time-code'
              />
            ))}
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
            {loading ? 'Verifying…' : 'Verify Email'}
          </Button>
        </form>

        <p className={styles.resend}>
          {resent ? (
            'Code sent! Check your inbox.'
          ) : (
            <>
              Didn&apos;t receive a code?{' '}
              <button
                type='button'
                className={styles.resendButton}
                onClick={handleResend}
                disabled={!email}
              >
                Resend
              </button>
            </>
          )}
        </p>

        <p className={styles.switchLink}>
          <Link href='/auth/login'>← Back to Login</Link>
        </p>
      </div>
    </div>
  )
}

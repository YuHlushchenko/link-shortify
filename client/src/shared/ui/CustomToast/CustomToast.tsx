'use client'

import React, { useEffect, useState } from 'react'
import { Toast as ReactToastType, toast } from 'react-hot-toast'

import { ToastType } from '@/shared/const/toast'

import styles from './CustomToast.module.scss'

import ToastErrorIcon from 'public/assets/icons/toast-error.svg'
import ToastSuccessIcon from 'public/assets/icons/toast-success.svg'
import ToastWarningIcon from 'public/assets/icons/toast-warning.svg'
import ToastInfoIcon from 'public/assets/icons/toast-info.svg'

import CrossIcon from 'public/assets/svgs/x.svg'

interface ToastProps {
  t: ReactToastType
  title: string
  message?: string
  variant?: ToastType
}

const getIcon = (type: ToastType): JSX.Element => {
  switch (type) {
    case ToastType.SUCCESS:
      return <ToastSuccessIcon />
    case ToastType.ERROR:
      return <ToastErrorIcon />
    case ToastType.WARNING:
      return <ToastWarningIcon />
    case ToastType.INFO:
    default:
      return <ToastInfoIcon />
  }
}

const areEqual = (prev: ToastProps, next: ToastProps) => {
  return (
    prev.title === next.title &&
    prev.message === next.message &&
    prev.variant === next.variant &&
    prev.t.id === next.t.id
  )
}

const Toast = ({ t, title, message, variant = ToastType.INFO }: ToastProps) => {
  const duration = t.duration || 5000
  const [progress, setProgress] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const [closing, setClosing] = useState(false)

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => toast.dismiss(t.id), 300)
  }

  useEffect(() => {
    if (isPaused || closing) return

    let frameId: number
    let last = Date.now()

    const tick = () => {
      const now = Date.now()
      const delta = now - last
      last = now

      setProgress((prev) => {
        const next = prev - delta / duration
        if (next <= 0) {
          handleClose()
          return 0
        }
        return next
      })

      frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frameId)
  }, [isPaused, closing, duration, t.id])

  return (
    <div
      className={`${styles.container} ${styles[variant]} ${closing ? styles.closing : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.topContainer}>
        <div className={styles.iconContainer}>{getIcon(variant)}</div>

        <div className={styles.contentContainer}>
          <p className={styles.titleContainer}>{title}</p>
          {message && (
            <span className={styles.messageContainer}>{message}</span>
          )}
        </div>

        <button
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label='close'
        >
          <CrossIcon />
        </button>
      </div>

      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </div>
  )
}

Toast.displayName = 'CustomToast'

export default React.memo(Toast, areEqual)

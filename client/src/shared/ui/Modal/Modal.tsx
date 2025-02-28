'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { Portal } from '../Portal/Portal'

import styles from './Modal.module.scss'

interface IProps {
  className?: string
  children?: React.ReactNode | React.ReactNode[]
  isOpen?: boolean
  onClose?: () => void
}

// ANIMATION_DELAY should be equal to the sum of the animations duration variables in the scss file
const ANIMATION_DELAY = 700

export const Modal = ({ children, isOpen, onClose }: IProps) => {
  const [isClosing, setClosing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const closeHandler = useCallback(() => {
    if (onClose) {
      setClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  // ! after rerendering the component, the event listener will be added again - this is a memory leak
  // ! it's creating a new link to the function every time the component is rerendered
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    },
    [closeHandler],
  )

  useEffect(() => {
    if (isOpen) {
      // ? close on escape key press
      window.addEventListener('keydown', onKeyDown)
    }

    // * it's important to clear the timeout and remove the event listener when the component is unmounted
    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  return (
    <Portal>
      {isOpen && (
        <div
          className={
            isOpen ? `${styles.containerShown}` : `${styles.containerIsHidding}`
          }
        >
          <div
            className={`${styles.overlay} ${isOpen && !isClosing ? styles.overlayIsShowing : ''} ${isClosing ? styles.overlayIsHidding : ''}`}
            onClick={closeHandler}
          >
            <div className={styles.contentContainer} onClick={onContentClick}>
              {children}
            </div>
          </div>
        </div>
      )}
    </Portal>
  )
}

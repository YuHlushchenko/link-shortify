'use client'

import React, { FC, useEffect } from 'react'

import Button from '@/shared/ui/Button/Button'

import styles from './InputLink.module.scss'

import PasteIcon from 'public/assets/svgs/paste.svg'
import ArrowRight from 'public/assets/svgs/arrow-right.svg'

interface IProps {
  pasteFromClipboard: () => void
  isAutoPaste: boolean
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  isPlaceholder: boolean
  setPlaceholder: React.Dispatch<React.SetStateAction<boolean>>
  isAutoPastePending?: boolean
}

const InputLink: FC<IProps> = ({
  pasteFromClipboard,
  isAutoPaste,
  inputValue,
  setInputValue,
  isPlaceholder,
  setPlaceholder,
  isAutoPastePending,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(inputValue, 'inputValue submitted')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleOnFocus = () => {
    setPlaceholder(false)
    if (inputValue === '' && isAutoPaste) pasteFromClipboard()
  }

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setPlaceholder(true)
    }
  }

  useEffect(() => {
    console.log(inputValue, 'inputValue')
  }, [inputValue])

  return (
    <div className={styles.container}>
      {/* navigator doesn't exist until client has been rendered */}
      <div
        className={`${styles.pasteBtnContainer} ${isAutoPastePending ? styles.pasteSkeleton : ''}`}
      >
        <button
          type='button'
          aria-label='Paste'
          title='Paste'
          onClick={pasteFromClipboard}
        >
          <PasteIcon />
        </button>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          {isPlaceholder && (
            <div className={styles.placeholderContainer}>
              <p>Enter the link here</p>
              <span>|</span>
            </div>
          )}
          <input
            type='url'
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            value={inputValue}
            onChange={handleChange}
          />
        </div>

        {/* for desktop */}
        <div className={styles.btnContainer}>
          <Button className='accent' type='submit'>
            Shorten
          </Button>
        </div>

        {/* for mobile */}
        <div className={styles.btnContainerMobile}>
          <Button className='accent' type='submit' isRounded>
            <ArrowRight />
          </Button>
        </div>
      </form>
    </div>
  )
}

export default InputLink

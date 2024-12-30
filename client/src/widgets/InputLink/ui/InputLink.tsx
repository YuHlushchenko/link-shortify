'use client'

import React, { FC, useEffect } from 'react'

import Button from '@/shared/ui/Button/Button'

import styles from './InputLink.module.scss'

import PasteIcon from 'public/assets/svgs/paste.svg'

interface IProps {
  pasteFromClipboard: () => void
  isAutoPaste: boolean
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  isPlaceholder: boolean
  setPlaceholder: React.Dispatch<React.SetStateAction<boolean>>
}

const InputLink: FC<IProps> = ({
  pasteFromClipboard,
  isAutoPaste,
  inputValue,
  setInputValue,
  isPlaceholder,
  setPlaceholder,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(inputValue, 'inputValue submited')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleOnFocus = () => {
    setPlaceholder(false)
    if (inputValue === '' && isAutoPaste) pasteFromClipboard()
  }

  useEffect(() => {
    console.log(inputValue, 'inputValue')
  }, [inputValue])

  return (
    <div className={styles.container}>
      <div className={styles.pasteBtnContainer}>
        <button
          type='button'
          className={styles.pasteBtn}
          aria-label='paste'
          title='paste'
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
            onBlur={(e) => {
              if (e.target.value === '') {
                setPlaceholder(true)
              }
            }}
            value={inputValue}
            onChange={handleChange}
          />
        </div>

        <div className={styles.btnContainer}>
          <Button className='accent' type='submit'>
            Shorten
          </Button>
        </div>
      </form>
    </div>
  )
}

export default InputLink

'use client'

import { useState } from 'react'

import Button from '@/shared/ui/Button/Button'

import styles from './InputLink.module.scss'

import LinkIcon from 'public/assets/svgs/link.svg'

const InputLink = () => {
  const [isPlaceholder, setPlaceholder] = useState(true)

  return (
    <div className={styles.container}>
      <div className={styles.copyBtnContainer}>
        <button
          type='button'
          className={styles.copyBtn}
          aria-label='Copy'
          title='Copy'
        >
          <LinkIcon />
        </button>
      </div>

      <div className={styles.inputContainer}>
        {isPlaceholder && (
          <div className={styles.placeholderContainer}>
            <p>Enter the link here</p>

            <span>|</span>
          </div>
        )}
        <input
          type='url'
          onFocus={() => setPlaceholder(false)}
          onBlur={(e) => {
            if (e.target.value === '') {
              setPlaceholder(true)
            }
          }}
        />
      </div>

      <div className={styles.btnContainer}>
        <Button className='accent'>Shorten</Button>
      </div>
    </div>
  )
}

export default InputLink

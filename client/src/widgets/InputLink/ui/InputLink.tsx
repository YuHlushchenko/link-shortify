'use client'

import { useEffect, useState } from 'react'

import Button from '@/shared/ui/Button/Button'

import styles from './InputLink.module.scss'

import LinkIcon from 'public/assets/svgs/link.svg'

const text = 'example text to copy'

interface IProps {
  dataFromClipboard: string
}

const copyToClipboard = () => {
  if (navigator.clipboard) {
    // Use the Clipboard API if it's available
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Text copied to clipboard')
        // showToastSuccess({
        //   title: 'Номер скопійовано',
        //   description: 'Чекаємо Вашого дзвінка!',
        // })
      })
      .catch((err) => {
        console.error('Failed to copy: ', err)
        // showToastError({
        //   title: 'Помилка',
        //   description: 'Не вдалося скопіювати номер',
        // })
      })
  } else {
    // Fallback to document.execCommand('copy')
    const textarea = document.createElement('textarea')
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()

    try {
      document.execCommand('copy')
      console.log('Text copied to clipboard')
      // showToastSuccess({
      //   title: 'Номер скопійовано',
      //   description: 'Чекаємо Вашого дзвінка!',
      // })
    } catch (err) {
      console.error('Failed to copy: ', err)
      // showToastError({
      //   title: 'Помилка',
      //   description: 'Не вдалося скопіювати номер',
      // })
    } finally {
      document.body.removeChild(textarea)
    }
  }
}

// const copylink = (e) => {
//   navigator.clipboard.writeText(links)
// }

const InputLink = ({ dataFromClipboard }: IProps) => {
  const [isPlaceholder, setPlaceholder] = useState(true)
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(inputValue, 'inputValue submited')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    console.log(inputValue, 'inputValue')
  }, [inputValue])

  useEffect(() => {
    console.log(dataFromClipboard, 'dataFromClipboard')
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.copyBtnContainer}>
        <button
          type='button'
          className={styles.copyBtn}
          aria-label='copy'
          title='copy'
          onClick={copyToClipboard}
        >
          <LinkIcon />
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
            onFocus={() => setPlaceholder(false)}
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

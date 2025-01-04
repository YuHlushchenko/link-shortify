'use client'

import { FC, useEffect, useState } from 'react'

import { useStore } from '@/app/providers/store/createStore'

import { InputLink } from '@/widgets/InputLink'
import Checkbox from '@/shared/ui/Checkbox/Checkbox'

import styles from './InputLinkWithAutoPaste.module.scss'

interface IProps {
  checkboxId: string
  checkboxName: string
  checkboxLabel: string
}

const InputLinkWithAutoPaste: FC<IProps> = ({
  checkboxId,
  checkboxName,
  checkboxLabel,
}) => {
  const [inputValue, setInputValue] = useState('')
  const [isInputPlaceholder, setInputPlaceholder] = useState(true)

  const isAutoPaste = useStore((state) => state.isAutoPaste)
  const setAutoPaste = useStore((state) => state.setAutoPaste)
  const [isAutoPastePending, setAutoPastePending] = useState(true)

  const pasteFromClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .readText()
        .then((text) => {
          setInputValue(text)
          setInputPlaceholder(false)
          console.log('Text from clipboard:', text)
        })
        .catch((err) => {
          console.error('Failed to read clipboard contents:', err)
        })
    } else {
      console.warn('Clipboard API not supported')
    }
  }

  const setAutoPasteToLocalStorage = (
    isAutoPasteLocal: boolean = isAutoPaste,
  ) => {
    localStorage.setItem('isAutoPaste', JSON.stringify(isAutoPasteLocal))
  }

  const getAutoPasteFromLocalStorage = () => {
    const storedAutoPaste = localStorage.getItem('isAutoPaste')

    if (storedAutoPaste) {
      setAutoPaste(JSON.parse(storedAutoPaste))
    }
  }

  const toggleAutoPaste = () => {
    if (!isAutoPastePending) {
      setAutoPaste(!isAutoPaste)
      setAutoPasteToLocalStorage(!isAutoPaste)
    }
  }

  useEffect(() => {
    getAutoPasteFromLocalStorage()
    setAutoPastePending(false)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.linkInputContainer}>
        <InputLink
          inputValue={inputValue}
          setInputValue={setInputValue}
          isPlaceholder={isInputPlaceholder}
          setPlaceholder={setInputPlaceholder}
          pasteFromClipboard={pasteFromClipboard}
          isAutoPaste={isAutoPaste}
          isAutoPastePending={isAutoPastePending}
        />
      </div>

      <div className={styles.checkboxAutoPasteContainer}>
        <Checkbox
          id={checkboxId}
          name={checkboxName}
          label={checkboxLabel}
          isChecked={isAutoPaste}
          toggleCheck={toggleAutoPaste}
          isPending={isAutoPastePending}
        />
      </div>
    </div>
  )
}

export default InputLinkWithAutoPaste

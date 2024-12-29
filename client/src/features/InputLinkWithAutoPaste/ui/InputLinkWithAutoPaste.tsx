'use client'

import { useEffect, useState } from 'react'

import { useStore } from '@/app/providers/store/createStore'

import { InputLink } from '@/widgets/InputLink'
import Checkbox from '@/shared/ui/Checkbox/Checkbox'

import styles from './InputLinkWithAutoPaste.module.scss'

interface IProps {
  checkboxId: string
  checkboxName: string
  checkboxLabel: string
}

const InputLinkWithAutoPaste = ({
  checkboxId,
  checkboxName,
  checkboxLabel,
}: IProps) => {
  const isAutoPaste = useStore((state) => state.isAutoPaste)
  const setAutoPaste = useStore((state) => state.setAutoPaste)
  const [isPending, setPending] = useState(true)

  // const getDataFromClipboard = () => {
  //   if (navigator.clipboard) {
  //     window.focus() // Ensure the window is focused
  //     navigator.clipboard
  //       .read()
  //       .then((text) => {
  //         console.log('Text from clipboard:', text)
  //       })
  //       .catch((err) => {
  //         console.error('Failed to read clipboard contents:', err)
  //       })
  //   } else {
  //     console.warn('Clipboard API not supported')
  //   }
  // }

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
    if (!isPending) {
      setAutoPaste(!isAutoPaste)
      setAutoPasteToLocalStorage(!isAutoPaste)
    }
  }

  useEffect(() => {
    getAutoPasteFromLocalStorage()
    setPending(false)
    // getDataFromClipboard()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.linkInputContainer}>
        <InputLink dataFromClipboard='example text from clipboard' />
      </div>

      <div className={styles.checkboxAutoPasteContainer}>
        <Checkbox
          id={checkboxId}
          name={checkboxName}
          label={checkboxLabel}
          isChecked={isAutoPaste}
          toggleCheck={toggleAutoPaste}
          isPending={isPending}
        />
      </div>
    </div>
  )
}

export default InputLinkWithAutoPaste

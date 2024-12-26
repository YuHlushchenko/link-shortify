'use client'

import { useState, useEffect } from 'react'

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
  const [isAutoPaste, setAutoPaste] = useState<boolean>(true)

  const toggleAutoPaste = () => {
    setAutoPaste((prev) => !prev)
  }

  const setToLocalStorage = () => {
    localStorage.setItem('isAutoPaste', JSON.stringify(isAutoPaste))
  }

  const getFromLocalStorage = () => {
    const isAutoPaste = localStorage.getItem('isAutoPaste')

    if (isAutoPaste) {
      setAutoPaste(JSON.parse(isAutoPaste))
    }
  }

  useEffect(() => {
    setToLocalStorage()
  }, [isAutoPaste])

  useEffect(() => {
    getFromLocalStorage()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.linkInputContainer}>
        <InputLink />
      </div>

      <div className={styles.checkboxAutoPasteContainer}>
        <Checkbox
          id={checkboxId}
          name={checkboxName}
          label={checkboxLabel}
          isChecked={isAutoPaste}
          toggleCheck={toggleAutoPaste}
        />
      </div>
    </div>
  )
}

export default InputLinkWithAutoPaste

'use client'

import { useState, useCallback } from 'react'

import styles from './CheckboxCustom.module.scss'

interface IProps {
  id: string
  name: string
  label: string
  checked?: boolean
}

const CheckboxCustom = ({ id, name, checked = false, label }: IProps) => {
  const [isChecked, setChecked] = useState(checked)

  const handleCheckboxChange = useCallback(() => {
    setChecked((prevChecked) => !prevChecked)
  }, [])

  return (
    <div className={styles.container}>
      <div
        className={
          isChecked ? `${styles.circle} ${styles.circleChecked}` : styles.circle
        }
      />
      <label htmlFor={id}>
        <input
          type='checkbox'
          id={id}
          name={name}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {label}
      </label>
    </div>
  )
}

export default CheckboxCustom

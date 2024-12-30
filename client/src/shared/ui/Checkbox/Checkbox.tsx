import { FC } from 'react'

import styles from './Checkbox.module.scss'

interface ICheckboxProps {
  id: string
  name: string
  label: string
  isChecked?: boolean
  toggleCheck: () => void
  isPending?: boolean
}

const Checkbox: FC<ICheckboxProps> = ({
  id,
  name,
  label,
  toggleCheck,
  isChecked = false,
  isPending = false,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') toggleCheck()
  }

  return (
    <div className={styles.container}>
      {isPending ? (
        <div className={styles.skeleton} role='presentation' />
      ) : (
        <div
          className={`${styles.circle} ${isChecked ? styles.circleChecked : ''}`}
          aria-label={isChecked ? 'Checked' : 'Not Checked'}
        />
      )}

      <label htmlFor={id}>
        <input
          aria-label='Сheckbox Auto Paste'
          type='checkbox'
          id={id}
          name={name}
          checked={isChecked}
          onChange={toggleCheck}
          onKeyDown={handleKeyDown}
        />
        {label}
      </label>
    </div>
  )
}

export default Checkbox

import { FC } from 'react'

import styles from './Checkbox.module.scss'

interface IProps {
  id: string
  name: string
  label: string
  isChecked?: boolean
  toggleCheck: () => void
}

const Checkbox: FC<IProps> = ({
  id,
  name,
  label,
  isChecked = false,
  toggleCheck,
}) => (
  <div className={styles.container}>
    <div
      className={`${styles.circle} ${isChecked ? styles.circleChecked : ''}`}
    />

    <label htmlFor={id}>
      <input
        aria-label='auto paste checkbox'
        type='checkbox'
        id={id}
        name={name}
        checked={isChecked}
        onChange={toggleCheck}
        onKeyDown={(e) => e.key === 'Enter' && toggleCheck()}
      />
      {label}
    </label>
  </div>
)

export default Checkbox

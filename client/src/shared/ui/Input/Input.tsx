import { HTMLInputTypeAttribute } from 'react'

import styles from './Input.module.scss'

interface IProps {
  type: HTMLInputTypeAttribute
}

const Input = ({ type }: IProps) => {
  return <input className={styles.input} type={type} />
}

export default Input

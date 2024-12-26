import styles from './Checkbox.module.scss'

interface IProps {
  id: string
  name: string
  label: string
  isChecked?: boolean
  toggleCheck: () => void
}

const Checkbox = ({
  id,
  name,
  label,
  isChecked = false,
  toggleCheck,
}: IProps) => {
  // const [isChecked, setChecked] = useState(checked)

  // const handleCheckboxChange = useCallback(() => {
  // setChecked((prevChecked) => !prevChecked)
  // }, [])

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
          onChange={toggleCheck}
        />
        {label}
      </label>
    </div>
  )
}

export default Checkbox

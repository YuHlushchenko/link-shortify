import React, { FC } from 'react'
import { twMerge } from '@/shared/lib/twMerge'

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
    <div className='relative'>
      {isPending ? (
        <div
          className='paste-skeleton pointer-events-none absolute z-1 -top-px left-0 w-4.75 h-2.75 rounded-[48px] border border-(--border) sm:w-5.5 sm:h-3 xl:w-5.75'
          role='presentation'
        />
      ) : (
        <div
          className={twMerge(
            'pointer-events-none absolute z-1 top-0.25 left-0.5 transition-all duration-300 w-1.75 h-1.75 rounded-full bg-(--border)',
            'sm:top-0.25 sm:w-2 sm:h-2',
            'xl:top-0.25 xl:left-0.75 xl:w-2.25 xl:h-2.25',
            isChecked &&
              'top-0.25 left-2.25 bg-brand-blue sm:left-2.75 xl:left-2.75',
          )}
          aria-label={isChecked ? 'Checked' : 'Not Checked'}
        />
      )}

      <label
        htmlFor={id}
        className='flex text-md pl-5.75 min-w-27.75 font-light cursor-pointer text-(--fg-3) sm:text-base sm:pl-6.75 sm:min-w-31 xl:min-w-31.25'
      >
        <input
          aria-label='Checkbox Auto Paste'
          type='checkbox'
          id={id}
          name={name}
          checked={isChecked}
          onChange={toggleCheck}
          onKeyDown={handleKeyDown}
          className='absolute -top-px left-0 cursor-pointer h-0 w-0 before:content-[""] before:inline-block before:bg-(--bg) before:border before:border-(--border) before:rounded-[48px] before:w-4.5 before:h-2.5 before:shrink-0 before:grow-0 sm:before:w-5.25 sm:before:h-2.75 xl:before:w-5.5 xl:before:h-3'
        />
        {label}
      </label>
    </div>
  )
}

export default Checkbox

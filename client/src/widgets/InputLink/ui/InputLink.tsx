'use client'

import React, { FC } from 'react'

import Button from '@/shared/ui/Button/Button'
import { ToastType } from '@/shared/const/toast'
import { notify } from '@/shared/lib/utils/notify'

import PasteIcon from 'public/assets/svgs/paste.svg'
import ArrowRight from 'public/assets/svgs/arrow-right.svg'

interface IProps {
  pasteFromClipboard: () => void
  isAutoPaste: boolean
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  isPlaceholder: boolean
  setPlaceholder: React.Dispatch<React.SetStateAction<boolean>>
  isAutoPastePending?: boolean
}

const InputLink: FC<IProps> = ({
  pasteFromClipboard,
  isAutoPaste,
  inputValue,
  setInputValue,
  isPlaceholder,
  setPlaceholder,
  isAutoPastePending,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log(inputValue, 'inputValue submitted')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleOnFocus = () => {
    setPlaceholder(false)
    if (inputValue === '' && isAutoPaste) pasteFromClipboard()
  }

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setPlaceholder(true)
    }
  }

  return (
    <div
      className={
        'flex items-center justify-center bg-(--bg) border border-(--border) rounded-[48px] p-[4px_3px]'
      }
    >
      {/* navigator doesn't exist until client has been rendered */}
      <>
        <button
          type='button'
          aria-label='Paste'
          title='Paste'
          onClick={pasteFromClipboard}
          className={`flex items-center justify-center size-5 shrink-0 rounded-full p-[5px] m-[0_10px_0_3px] border-[none] cursor-pointer transition-colors duration-300 hover:bg-(--secondary-color-1) sm:size-5.75 md:size-6 lg:size-7.25 ${isAutoPastePending ? ' paste-skeleton' : ''}`}
        >
          <PasteIcon
            className={`size-3 [&_path]:fill-(--fg-3) ${isAutoPastePending ? ' hidden' : ''}`}
          />
        </button>
      </>

      <form
        onSubmit={handleSubmit}
        className='flex items-center justify-between w-full'
      >
        <div className='relative flex-1 min-w-0'>
          {isPlaceholder && (
            <div className='pointer-events-none absolute flex items-center justify-start'>
              <p className='text-(--fg-3) font-light text-lg min-w-max'>
                https://example.com/…
              </p>
              <span className='ml-0.5 line-height-0 animate-[cursor-blinking_1s_infinite] text-brand-pink'>
                |
              </span>
            </div>
          )}
          <input
            type='url'
            className='w-full min-w-full bg-transparent border-none outline-none text-(--fg-1) font-light text-lg sm:min-w-40 lg:min-w-45 xl:min-w-50'
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            value={inputValue}
            onChange={handleChange}
          />
        </div>

        {/* desktop: text + icon, hidden at ≤750px */}
        <Button
          variant='primary'
          type='submit'
          isGlowing
          iconRight={<ArrowRight style={{ width: '16px', height: '16px' }} />}
          className='w-auto shrink-0 ml-2 my-[3px] mr-[3px] rounded-pill text-lg px-3 py-0 h-5 sm:h-5.75 md:h-6 lg:h-7.25 max-[750px]:hidden'
          onClick={() => {
            notify({
              title: 'Notification Example ',
              description: 'Successfully notification description',
              type: ToastType.SUCCESS,
            })
          }}
        >
          Shorten Now
        </Button>

        {/* mobile: rounded icon only, visible at ≤750px */}
        <Button
          variant='primary'
          type='submit'
          isRounded
          isGlowing
          className='hidden max-[750px]:flex shrink-0 ml-0.75 mr-0.25 my-[3px]'
          onClick={() => {
            notify({
              title: 'Notification Example ',
              description: 'Successfully notification description',
              type: ToastType.SUCCESS,
            })
          }}
        >
          <ArrowRight style={{ width: '16px', height: '16px' }} />
        </Button>
      </form>
    </div>
  )
}

export default InputLink

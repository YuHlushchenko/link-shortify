'use client'

import { FC, useEffect, useState } from 'react'

// import { useStore } from '@/app/providers/store/store'
import useAutoPasteStore from '../store/useAutoPasteStore'

import { InputLink } from '@/widgets/InputLink'

import Checkbox from '@/shared/ui/Checkbox/Checkbox'
import { notify } from '@/shared/lib/utils/notify'
import { ToastType } from '@/shared/const/toast'

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

  // const isAutoPaste = useStore((state) => state.isAutoPaste)
  // const setAutoPaste = useStore((state) => state.setAutoPaste)
  const isAutoPaste = useAutoPasteStore.use.isAutoPaste()
  const setAutoPaste = useAutoPasteStore.use.setAutoPaste()
  const [isAutoPastePending, setAutoPastePending] = useState(true)

  const pasteFromClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.readText) {
      navigator.clipboard
        .readText()
        .then((text) => {
          setInputValue(text)
          setInputPlaceholder(false)
        })
        .catch(() => {
          notify({
            title: 'No clipboard access',
            description: 'Please try to paste manually',
            type: ToastType.ERROR,
          })
        })
    } else {
      notify({
        title: 'No clipboard access',
        description: 'Please try to paste manually',
        type: ToastType.ERROR,
      })
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
    try {
      getAutoPasteFromLocalStorage()
    } finally {
      setAutoPastePending(false)
    }
  }, [])

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-full sm:w-auto'>
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

      <div className='mt-4 sm:mt-6 md:mt-8'>
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

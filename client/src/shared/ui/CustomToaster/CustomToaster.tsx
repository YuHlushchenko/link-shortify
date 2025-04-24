'use client'

import { Toaster } from 'react-hot-toast'

export const CustomToaster = () => {
  return (
    <Toaster
      position='top-right'
      toastOptions={{ duration: 5000 }}
      containerStyle={{ top: '1rem', right: '1rem' }}
      gutter={12}
    />
  )
}

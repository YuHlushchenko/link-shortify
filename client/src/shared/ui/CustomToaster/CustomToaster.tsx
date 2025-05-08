'use client'

import { Toaster } from 'react-hot-toast'

export const CustomToaster = () => {
  return (
    <Toaster
      position='top-right'
      toastOptions={{ duration: 5000 }}
      containerStyle={{ top: '16px', right: '16px' }}
      gutter={6}
      containerClassName='custom-toaster-container'
    />
  )
}

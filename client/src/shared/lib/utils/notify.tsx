import { toast } from 'react-hot-toast'

import { ToastType } from '@/shared/const/toast'

import CustomToast from '@/shared/ui/CustomToast/CustomToast'

interface ShowToastParams {
  title: string
  description?: string
  type?: ToastType
}

export const notify = ({
  title,
  description,
  type = ToastType.INFO,
}: ShowToastParams) => {
  toast.custom((t) => (
    <CustomToast t={t} title={title} message={description} variant={type} />
  ))
}

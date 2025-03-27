import { Modal } from '@/shared/ui/Modal/Modal'

import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

const AuthModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title='sign in'>
      <LoginForm />
    </Modal>
  )
}

export default AuthModal

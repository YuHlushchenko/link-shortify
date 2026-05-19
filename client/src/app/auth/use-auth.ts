import { createContext, useContext } from 'react'

export type UserProfile = {
  username: string
  userId: string
  email: string
  name: string
  picture: string
  sub: string
  exp: number
}

export type AuthContextProps = {
  userProfile: UserProfile | null
  loading: boolean
  isUserLoggedIn: () => Promise<boolean>
  loadUserProfile: () => Promise<UserProfile | null>
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string) => Promise<void>
  confirmUser: (email: string, code: string) => Promise<void>
  resendCode: (email: string) => Promise<void>
  logout: () => Promise<void>
  forgotPassword: (email: string) => Promise<void>
  confirmForgotPassword: (
    email: string,
    code: string,
    newPassword: string,
  ) => Promise<void>
  signInWithProvider: (provider: 'Google') => Promise<void>
  completeOAuthSignIn: () => Promise<void>
}

export const AuthContext = createContext<AuthContextProps>({
  userProfile: null,
  loading: false,
  isUserLoggedIn: async () => false,
  loadUserProfile: async () => null,
  login: async () => {},
  signup: async () => {},
  confirmUser: async () => {},
  resendCode: async () => {},
  logout: async () => {},
  forgotPassword: async () => {},
  confirmForgotPassword: async () => {},
  signInWithProvider: async () => {},
  completeOAuthSignIn: async () => {},
})

export const useAuth = () => useContext(AuthContext)

'use client'

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import {
  signIn,
  signUp,
  signOut,
  getCurrentUser,
  autoSignIn,
  confirmSignUp,
  resendSignUpCode,
  resetPassword,
  confirmResetPassword,
  signInWithRedirect,
} from 'aws-amplify/auth'

import { useRouter } from '@/app/i18n/routing'
import { configureAmplify } from '@/app/amplify/amplify-config'
import { AuthContext, type UserProfile } from './use-auth'

configureAmplify()

type IdTokenPayload = {
  name?: string
  given_name?: string
  picture?: string
  email?: string
  sub?: string
  exp?: number
  'cognito:username'?: string
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadUserProfile().catch((err) => {
      console.warn('Failed to load user profile on mount:', err)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isUserLoggedIn = async (): Promise<boolean> => {
    try {
      const user = await getCurrentUser()
      return !!user
    } catch {
      return false
    }
  }

  const loadUserProfile = async (): Promise<UserProfile | null> => {
    try {
      setLoading(true)
      const clientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID!
      const currentUser = await getCurrentUser()

      const prefix = `CognitoIdentityServiceProvider.${clientId}.${currentUser.username}.`
      const idTokenString = localStorage.getItem(`${prefix}idToken`)

      if (!idTokenString) {
        setUserProfile(null)
        return null
      }

      const payload = JSON.parse(
        atob(idTokenString.split('.')[1]),
      ) as IdTokenPayload

      const profile: UserProfile = {
        username: currentUser.username,
        userId: currentUser.userId,
        email: payload.email ?? '',
        name: payload.name ?? payload.given_name ?? '',
        picture: payload.picture ?? '',
        sub: payload.sub ?? '',
        exp: payload.exp ?? 0,
      }

      setUserProfile(profile)
      return profile
    } catch {
      setUserProfile(null)
      return null
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string): Promise<void> => {
    if (userProfile) {
      router.push('/')
      toast('You are already signed in')
      return
    }
    const { nextStep } = await signIn({ username: email, password })
    if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
      router.push(`/auth/verify?email=${encodeURIComponent(email)}`)
      return
    }
    await loadUserProfile()
    router.push('/')
  }

  const signup = async (email: string, password: string): Promise<void> => {
    await signUp({
      username: email,
      password,
      options: {
        userAttributes: { email },
        autoSignIn: true,
      },
    })
    router.push(`/auth/verify?email=${encodeURIComponent(email)}`)
  }

  const confirmUser = async (email: string, code: string): Promise<void> => {
    await confirmSignUp({ username: email, confirmationCode: code })
    await autoSignIn()
    await loadUserProfile()
    router.push('/')
  }

  const resendCode = async (email: string): Promise<void> => {
    await resendSignUpCode({ username: email })
  }

  const logout = async (): Promise<void> => {
    await signOut()
    setUserProfile(null)
    router.push('/auth/login')
  }

  const forgotPassword = async (email: string): Promise<void> => {
    await resetPassword({ username: email })
  }

  const confirmForgotPassword = async (
    email: string,
    code: string,
    newPassword: string,
  ): Promise<void> => {
    await confirmResetPassword({
      username: email,
      confirmationCode: code,
      newPassword,
    })
  }

  const signInWithProvider = async (provider: 'Google'): Promise<void> => {
    try {
      await signInWithRedirect({ provider })
    } catch (error) {
      if (
        (error as { name: string }).name === 'UserAlreadyAuthenticatedException'
      ) {
        toast('You are already signed in')
        router.push('/')
      }
      if ((error as { name: string }).name === 'NotAuthorizedException') {
        router.push('/')
      }
    }
  }

  const completeOAuthSignIn = async (): Promise<void> => {
    try {
      if (window.location.hash === '#_=_') {
        history.replaceState(
          null,
          '',
          window.location.pathname + window.location.search,
        )
      }
      const profile = await loadUserProfile()
      if (profile) {
        router.push('/')
      }
    } catch (error) {
      if ((error as { name: string }).name === 'NotAuthorizedException') {
        router.push('/')
        return
      }
      throw error
    }
  }

  return (
    <AuthContext.Provider
      value={{
        userProfile,
        loading,
        isUserLoggedIn,
        loadUserProfile,
        login,
        signup,
        confirmUser,
        resendCode,
        logout,
        forgotPassword,
        confirmForgotPassword,
        signInWithProvider,
        completeOAuthSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

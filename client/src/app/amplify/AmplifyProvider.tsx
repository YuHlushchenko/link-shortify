'use client'

import { configureAmplify } from './amplify-config'

configureAmplify()

export function AmplifyProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

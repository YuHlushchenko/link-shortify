import { StateCreator } from 'zustand'

import { Theme } from '@/shared/const/theme'

export interface IThemeSlice {
  theme: Theme
  setTheme: (newTheme: Theme) => void
}

const getInitialTheme = () => {
  return Theme.DARK
}

export const createThemeSlice: StateCreator<IThemeSlice> = (set) => ({
  theme: getInitialTheme(),
  setTheme: (newTheme) => set({ theme: newTheme }),
})

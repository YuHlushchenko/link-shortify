import { StateCreator } from 'zustand'

import { Theme } from '@/shared/const/theme'

export interface IThemeSlice {
  theme: Theme
  setTheme: (newTheme: Theme) => void
}

export const createThemeSlice: StateCreator<IThemeSlice> = (set) => ({
  theme: Theme.DARK,
  setTheme: (newTheme) => set({ theme: newTheme }),
})

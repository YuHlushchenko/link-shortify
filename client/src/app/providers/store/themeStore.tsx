import { createStore } from 'zustand'

import { Theme } from '@/shared/const/theme'

interface IThemeStore {
  theme: Theme
  setTheme: (newTheme: Theme) => void
}

export const createThemeStore = (initialTheme: Theme = Theme.DARK) => {
  return createStore<IThemeStore>((set) => ({
    theme: initialTheme,
    setTheme: (newTheme) => set({ theme: newTheme }),
  }))
}

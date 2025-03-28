// import { create } from 'zustand'
import { createStore } from 'zustand'

// allows pushing new value without spreading the state (state) => ({ ...state.users, name: username })
// just use set(state => state.users.push({ name: username }))
// import { immer } from 'zustand/middleware/immer'
// import {
// devtools,
// persist // persist the store in localstorage
// } from 'zustand/middleware' // devtools work with redux devtools

// import createSelectors from '../../../features/InputLinkWithAutoPaste/store/selectors'

import { Theme } from '@/shared/const/theme'

interface IThemeStore {
  theme: Theme
  setTheme: (newTheme: Theme) => void
}

// const useThemeStore = create<IThemeStore>()(
//   persist(
// devtools(
//   immer((set) => ({
//     theme: Theme.DARK,
// setTheme: (newTheme) => set(() => ({ theme: newTheme })),
// })),
// ),
// { name: 'theme', version: 1 },
// )
// )

// export default createSelectors(useThemeStore)

export const createThemeStore = (initialTheme: Theme = Theme.DARK) => {
  return createStore<IThemeStore>((set) => ({
    theme: initialTheme,
    setTheme: (newTheme) => set({ theme: newTheme }),
  }))
}

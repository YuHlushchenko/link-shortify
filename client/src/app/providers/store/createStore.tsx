import { create } from 'zustand'
// import { createThemeSlice, IThemeSlice } from './slices/themeSlice'
import { createAutoPasteSlice, IAutoPasteSlice } from './slices/autoPasteSlice'

type StoreState = IAutoPasteSlice

export const useStore = create<StoreState>((set, get, api) => ({
  // ...createThemeSlice(set, get, api),
  ...createAutoPasteSlice(set, get, api),
}))

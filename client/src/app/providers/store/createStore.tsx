import { create } from 'zustand'
import { createThemeSlice, IThemeSlice } from './slices/themeSlice'

type StoreState = IThemeSlice

export const useStore = create<StoreState>((set, get, api) => ({
  ...createThemeSlice(set, get, api),
}))

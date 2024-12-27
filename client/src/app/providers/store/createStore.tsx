import { create } from 'zustand'
import { createAutoPasteSlice, IAutoPasteSlice } from './slices/autoPasteSlice'

type StoreState = IAutoPasteSlice

export const useStore = create<StoreState>((set, get, api) => ({
  ...createAutoPasteSlice(set, get, api),
}))

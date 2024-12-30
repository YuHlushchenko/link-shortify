import { StateCreator } from 'zustand'

export interface IAutoPasteSlice {
  isAutoPaste: boolean
  setAutoPaste: (isAutoPaste: boolean) => void
}

export const createAutoPasteSlice: StateCreator<IAutoPasteSlice> = (set) => ({
  isAutoPaste: false,
  setAutoPaste: (isAutoPaste) => set({ isAutoPaste }),
})

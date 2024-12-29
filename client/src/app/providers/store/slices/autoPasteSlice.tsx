import { StateCreator } from 'zustand'

export interface IAutoPasteSlice {
  isAutoPaste: boolean
  setAutoPaste: (isAutoPaste: boolean) => void
}

export const createAutoPasteSlice: StateCreator<IAutoPasteSlice> = (set) => ({
  isAutoPaste: true,
  setAutoPaste: (isAutoPaste) => set({ isAutoPaste }),
})

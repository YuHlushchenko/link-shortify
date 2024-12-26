import { StateCreator } from 'zustand'

export interface IAutoPasteSlice {
  isAutoPaste: boolean
  toggleAutoPaste: (isAutoPaste: boolean) => void
}

export const createAutoPasteSlice: StateCreator<IAutoPasteSlice> = (set) => ({
  isAutoPaste: true,
  toggleAutoPaste: () => set((state) => ({ isAutoPaste: !state.isAutoPaste })),
})

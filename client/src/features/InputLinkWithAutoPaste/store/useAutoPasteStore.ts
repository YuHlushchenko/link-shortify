import { create } from 'zustand'

// allows pushing new value without spreading the state (state) => ({ ...state.users, name: username })
// just use set(state => state.users.push({ name: username }))
import { immer } from 'zustand/middleware/immer'
import {
  devtools,
  // persist // persist the store in localstorage
} from 'zustand/middleware' // devtools work with redux devtools
import createSelectors from '@/shared/lib/zustand/selectors'

interface IAutoPasteStore {
  isAutoPaste: boolean
  setAutoPaste: (isAutoPaste: boolean) => void
}

const useAutoPasteStore = create<IAutoPasteStore>()(
  //   persist(
  devtools(
    immer((set) => ({
      isAutoPaste: false,
      setAutoPaste: (newAutoPaste) =>
        set(() => ({ isAutoPaste: newAutoPaste })),
    })),
  ),
  // { name: 'autoPaste', version: 1 },
)
// )

export default createSelectors(useAutoPasteStore)

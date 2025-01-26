import { create } from 'zustand'

import { AppStatus } from '@/types/app-status'
import { devtools } from 'zustand/middleware'

type StatusStore = {
  status: AppStatus
  changeStatus: (nextStatus: AppStatus) => void
}

const useAppStatus = create<StatusStore>()(
  devtools(set => ({
    status: AppStatus.Structure,
    changeStatus: (nextStatus: AppStatus) => set({ status: nextStatus }),
  }))
)

export default useAppStatus

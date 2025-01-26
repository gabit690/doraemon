import { create } from 'zustand'

import { AppStatus } from '@/types/app-status'
import { devtools } from 'zustand/middleware'
import { BasicTechnology } from '@/types/technologies'

type StatusStore = {
  status: AppStatus
  changeStatus: (nextStatus: AppStatus) => void
  isCableActive: (position: number) => boolean
  isButtonActive: (technoly: BasicTechnology) => boolean
}

const useAppStatus = create<StatusStore>()(
  devtools((set, get) => ({
    status: AppStatus.Structure,
    changeStatus: (nextStatus: AppStatus) => set({ status: nextStatus }),
    isCableActive: (index: number): boolean => {
      const currentStatus: AppStatus = get().status
      if (index === 0) {
        return currentStatus !== AppStatus.Structure
      } else {
        return currentStatus === AppStatus.Dynamic
      }
    },
    isButtonActive: (technology: BasicTechnology): boolean => {
      const currentStatus: AppStatus = get().status
      const buttonActiveResult = {
        html: true,
        css: currentStatus !== AppStatus.Structure,
        js: currentStatus === AppStatus.Dynamic,
      }
      return buttonActiveResult[technology]
    },
  }))
)

export default useAppStatus

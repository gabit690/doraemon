import { isStructure } from '@/helpers/checkStatus'
import { AppStatus } from '@/types/app-status'

export const getTailwindClasses = (status: AppStatus): string => {
  return `flex justify-between items-center px-2 py-2 ${isStructure(status) ? 'bg-white' : 'shadow-lg shadow-white/40 doraemon-color'}`
}

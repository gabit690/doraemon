import { isStructure } from '@/helpers/checkStatus'
import { AppStatus } from '@/types/app-status'

export const getTailwindClasses = (status: AppStatus): string => {
  return `w-full ${isStructure(status) ? 'bg-white' : 'doraemon-color'} top-shadow`
}

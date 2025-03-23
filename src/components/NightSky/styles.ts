import { isStructure } from '@/helpers/checkStatus'
import { AppStatus } from '@/types/app-status'

export const getTailwindClasses = (status: AppStatus): string => {
  return `fixed -z-10 main-container ${isStructure(status) ? 'bg-white' : 'bg-black'}`
}

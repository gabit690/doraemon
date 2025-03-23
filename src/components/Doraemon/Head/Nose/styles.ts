import { isStructure } from '@/helpers/checkStatus'
import { AppStatus } from '@/types/app-status'

export const getTailwindClasses = (status: AppStatus): string => {
  return `stroke-black stroke-[2] ${isStructure(status) ? 'fill-white' : 'fill-red-600'}`
}

import { isStructure } from '@/helpers/checkStatus'
import { AppStatus } from '@/types/app-status'

export const getTailwindClasses = (status: AppStatus): string => {
  return `stroke-black stroke-[3] fill-${isStructure(status) ? 'white' : 'red-700'}`
}

import { isStructure } from '@/helpers/checkStatus'
import { AppStatus } from '@/types/app-status'

export const getTailwindClassesMouth = (status: AppStatus): string => {
  return `stroke-black stroke-[3] fill-${isStructure(status) ? 'white' : 'red-600'}`
}

export const getTailwindClassesTongue = (status: AppStatus): string => {
  return `stroke-black stroke-[3] fill-${isStructure(status) ? 'white' : 'red-400'}`
}

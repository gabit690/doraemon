import { isStructure } from '@/helpers/checkStatus'
import { AppStatus } from '@/types/app-status'

export const getTailwindClassesOuterBell = (status: AppStatus): string => {
  return `stroke-black stroke-[2] fill-${isStructure(status) ? 'white' : 'yellow-500'}`
}

export const getTailwindClassesInnerBell = (status: AppStatus): string => {
  return `stroke-black stroke-[1] fill-${isStructure(status) ? 'white' : 'yellow-700'}`
}

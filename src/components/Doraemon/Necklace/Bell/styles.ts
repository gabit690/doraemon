import { isStructure } from '@/helpers/checkStatus'
import { AppStatus } from '@/types/app-status'

export const getTailwindClassesOuterBell = (status: AppStatus): string => {
  return `stroke-black stroke-[2] ${isStructure(status) ? 'fill-white' : 'fill-yellow-500'}`
}

export const getTailwindClassesInnerBell = (status: AppStatus): string => {
  return `stroke-black stroke-[1] ${isStructure(status) ? 'fill-white' : 'fill-yellow-700'}`
}

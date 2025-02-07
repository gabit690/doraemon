import { isStructure } from '@/helpers/checkStatus'
import { AppStatus } from '@/types/app-status'

export const getTailwindClasses = (status: AppStatus, isActive: boolean) => {
  return `h-1 flex-grow outline outline-2 ${isStructure(status) ? 'bg-white' : 'bg-green-400'} outline-black after:content-[*] ${isActive ? 'opacity-100' : 'opacity-25'}`
}

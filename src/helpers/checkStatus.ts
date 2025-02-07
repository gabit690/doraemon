import { AppStatus } from '@/types/app-status'

export const isStructure = (status: AppStatus): boolean =>
  status === AppStatus.Structure

export const isDynamic = (status: AppStatus): boolean =>
  status === AppStatus.Dynamic

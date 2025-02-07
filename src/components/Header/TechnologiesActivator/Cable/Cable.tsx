import useAppStatus from '@/stores/app.store'
import { getTailwindClasses } from './styles'

type CableProps = {
  isActive: boolean
}

const Cable = ({ isActive }: CableProps) => {
  const appStatus = useAppStatus(store => store.status)
  return <div className={getTailwindClasses(appStatus, isActive)} />
}

export default Cable

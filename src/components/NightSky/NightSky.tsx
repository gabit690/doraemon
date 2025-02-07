import useAppStatus from '@/stores/app.store'
import { isStructure } from '@/helpers/checkStatus'
import StarryBackground from './StarryBackground/StarryBackground'
import { getTailwindClasses } from './styles'

const NightSky = () => {
  const appStatus = useAppStatus(store => store.status)
  return (
    <div className={getTailwindClasses(appStatus)}>
      {!isStructure(appStatus) && <StarryBackground />}
    </div>
  )
}

export default NightSky

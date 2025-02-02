import useAppStatus from '@/stores/app.store'
import StarryBackground from './StarryBackground/StarryBackground'
import { AppStatus } from '@/types/app-status'

const NightSky = () => {
  const appStatus = useAppStatus(state => state.status)
  return (
    <div className="fixed -z-10 main-container bg-black">
      {appStatus === AppStatus.Dynamic && <StarryBackground />}
    </div>
  )
}

export default NightSky

import useAppStatus from '@/stores/app.store'
import Eyes from './Eyes/Eyes'
import Mouth from './Mouth/Mouth'
import Nose from './Nose/Nose'
import { getTailwindClasses } from './styles'
import Whiskers from './Whiskers/Whiskers'

const Head = () => {
  const appStatus = useAppStatus(store => store.status)
  return (
    <div className="w-80 h-60 mx-auto relative">
      <svg width="320" height="240" className="overflow-visible">
        <ellipse
          cx="160"
          cy="125"
          rx="128"
          ry="124"
          className={getTailwindClasses(appStatus)}
        />
        <path
          d="M 160 42 c 180 0 125 202 0 202 c -125 0 -180 -202 0 -202"
          className="stroke-black stroke-[3] fill-white"
        />
        <Eyes />
        <Nose />

        <line
          x1="160"
          y1="98"
          x2="160"
          y2="150"
          className="stroke-black stroke-[2]"
        />
        <Mouth />
        <Whiskers />
      </svg>
    </div>
  )
}

export default Head

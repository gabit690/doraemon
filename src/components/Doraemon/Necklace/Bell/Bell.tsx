import { useId } from 'react'
import {
  getTailwindClassesInnerBell,
  getTailwindClassesOuterBell,
} from './styles'
import useAppStatus from '@/stores/app.store'

const Bell = () => {
  const bellId: string = useId()
  const appStatus = useAppStatus(store => store.status)
  return (
    <g id={`${bellId}-bell`}>
      <circle
        cx="160"
        cy="15"
        r="16"
        className={getTailwindClassesOuterBell(appStatus)}
      />
      <path
        d="M 145 7 a 9 1 0 0 1 30 0 a 2 1 45 0 1 0 4 a 9 1 0 0 0 -30 0 a 2 1 -45 0 1 0 -4 z"
        className={getTailwindClassesOuterBell(appStatus)}
      />
      <circle
        cx="160"
        cy="18"
        r="4"
        className={getTailwindClassesInnerBell(appStatus)}
      />
      <line
        x1="160"
        y1="22"
        x2="160"
        y2="30"
        className="stroke-black stroke-[1]"
      />
    </g>
  )
}

export default Bell

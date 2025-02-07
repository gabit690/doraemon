import useAppStatus from '@/stores/app.store'
import './Takekoputa.css'
import { getTailwindClasses } from './styles'
import { isDynamic } from '@/helpers/checkStatus'

const Takekoputa = () => {
  const appStatus = useAppStatus(state => state.status)

  return (
    <div className="w-20 h-14 mx-auto">
      <svg width="100%" height="100%" className="overflow-visible">
        <path
          d="M 39 5 a 1 2 0 0 1 2 0 l 2 40 h -6 z"
          className={getTailwindClasses(appStatus)}
        />

        <g
          className={`${isDynamic(appStatus) ? 'animate-spin-slow' : 'takekoputa-inactive'}`}
        >
          <polyline
            points="0, 0 0, 8 40, 5 80, 8 80, 0 40, 1 0, 0"
            className={getTailwindClasses(appStatus)}
          />
          <polyline
            points="36,-37 44, -37 42, 3 44, 43, 36, 43 38, 3 36, -37"
            className={getTailwindClasses(appStatus)}
          />
          <circle
            cx="40"
            cy="3"
            r="3"
            className={getTailwindClasses(appStatus)}
          />
        </g>
        <path
          d="M 28 56 a 1 1 0 0 1 24 0 v 2 h -24 z"
          className={getTailwindClasses(appStatus)}
        />
      </svg>
    </div>
  )
}

export default Takekoputa

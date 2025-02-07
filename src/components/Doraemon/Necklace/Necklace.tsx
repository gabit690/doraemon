import { useId } from 'react'
import Bell from './Bell/Bell'
import useAppStatus from '@/stores/app.store'
import { getTailwindClasses } from './styles'

const Necklace = () => {
  const necklaceId: string = useId()
  const appStatus = useAppStatus(store => store.status)
  return (
    <div className="w-80 h-5 mx-auto relative">
      <svg
        width="100%"
        height="100%"
        id={`${necklaceId}-necklace`}
        className="overflow-visible"
      >
        <path
          d="M 87 8 a 1 1 0 0 1 0 -18 h 146 a 1 1 0 0 1 1 18 z"
          className={getTailwindClasses(appStatus)}
        />
        <Bell />
      </svg>
    </div>
  )
}

export default Necklace

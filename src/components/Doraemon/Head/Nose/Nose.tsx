import useAppStatus from '@/stores/app.store'
import { useId } from 'react'
import { getTailwindClasses } from './styles'

const Nose = () => {
  const noseId: string = useId()
  const appStatus = useAppStatus(store => store.status)
  return (
    <g id={`${noseId}-nose`}>
      <circle
        cx="160"
        cy="81"
        r="16"
        className={getTailwindClasses(appStatus)}
      />

      <circle
        cx="158"
        cy="78"
        r="6"
        className="stroke-black stroke-[1] fill-white"
      />
    </g>
  )
}

export default Nose

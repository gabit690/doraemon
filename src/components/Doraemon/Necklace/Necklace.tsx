import { useId } from 'react'
import Bell from './Bell/Bell'

const Necklace = () => {
  const necklaceId: string = useId()
  return (
    <div className="w-80 h-5 mx-auto relative">
      <svg
        width="100%"
        height="100%"
        id={`${necklaceId}-necklace`}
        className=" overflow-visible"
      >
        <path
          d="M 87 8 a 1 1 0 0 1 0 -18 h 146 a 1 1 0 0 1 1 18 z"
          className="stroke-black stroke-[3] fill-red-700"
        />
        <Bell />
      </svg>
    </div>
  )
}

export default Necklace

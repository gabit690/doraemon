import { useId } from 'react'

const Necklace = () => {
  const necklaceId: string = useId()
  return (
    <g id={`${necklaceId}-necklace`}>
      <path
        d="M 77 240 a 1 1 0 0 1 0 -18 h 166 a 1 1 0 0 1 1 18 z"
        className="stroke-black stroke-[3] fill-red-600"
      />
    </g>
  )
}

export default Necklace

import { useId } from 'react'

const Mouth = () => {
  const mouthId: string = useId()

  return (
    <g id={`${mouthId}-mouth`}>
      <path
        d="M 68 128 a 55 9 0 0 0 184 0 a 11 10 0 0 1 -184 0"
        className="stroke-black stroke-[3] fill-red-600"
      />
      <path
        d="M100 190 a 40 100 -45 0 1 60 -15 a 40 100 45 0 1 60 15 a 100 110 0 0 1 -120 0"
        className="stroke-black stroke-[3] fill-red-400"
      />
      <path
        d="M 252 130 a 10 8 -60 0 0 -15 -35"
        className="stroke-black stroke-[3] fill-transparent"
      />
      <path
        d="M 69 130 a 10 8 60 0 1 15 -35"
        className="stroke-black stroke-[3] fill-transparent"
      />
    </g>
  )
}

export default Mouth

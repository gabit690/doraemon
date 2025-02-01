import { useId } from 'react'

const Bell = () => {
  const bellId: string = useId()
  return (
    <g id={`${bellId}-bell`}>
      <circle
        cx="160"
        cy="15"
        r="16"
        className="stroke-black stroke-[2] fill-yellow-500"
      />
      <path
        d="M 145 7 a 9 1 0 0 1 30 0 a 2 1 45 0 1 0 4 a 9 1 0 0 0 -30 0 a 2 1 -45 0 1 0 -4 z"
        className="stroke-black stroke-[2] fill-yellow-500"
      />
      <circle
        cx="160"
        cy="18"
        r="4"
        className="stroke-black stroke-[1] fill-yellow-700"
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

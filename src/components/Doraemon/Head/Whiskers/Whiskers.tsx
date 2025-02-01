import { useId } from 'react'

const Whiskers = () => {
  const whiskersId: string = useId()
  return (
    <g id={`${whiskersId}-whiskers`}>
      <g id={`${whiskersId}-left-whiskers`}>
        <line
          x1="123"
          y1="95"
          x2="64"
          y2="68"
          className="stroke-black stroke-[2]"
        />
        <line
          x1="122"
          y1="105"
          x2="52"
          y2="98"
          className="stroke-black stroke-[2]"
        />
        <line
          x1="123"
          y1="116"
          x2="54"
          y2="128"
          className="stroke-black stroke-[2]"
        />
      </g>
      <g id={`${whiskersId}-right-whiskers`}>
        <line
          x1="197"
          y1="95"
          x2="256"
          y2="68"
          className="stroke-black stroke-[2]"
        />
        <line
          x1="198"
          y1="105"
          x2="268"
          y2="98"
          className="stroke-black stroke-[2]"
        />
        <line
          x1="197"
          y1="116"
          x2="266"
          y2="128"
          className="stroke-black stroke-[2]"
        />
      </g>
    </g>
  )
}

export default Whiskers

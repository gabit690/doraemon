import { useId } from 'react'

const Eyes = () => {
  const eyesId: string = useId()

  return (
    <g id={`${eyesId}-eyes`}>
      <ellipse
        cx="135"
        cy="43"
        rx="25"
        ry="31"
        className="stroke-black stroke-[3] fill-white"
      />

      <ellipse
        cx="146"
        cy="55"
        rx="6"
        ry="9"
        className="stroke-black stroke-[2]"
      />

      <ellipse cx="146" cy="55" rx="2" ry="4" className="fill-white" />

      <ellipse
        cx="185"
        cy="43"
        rx="25"
        ry="31"
        className="stroke-black stroke-[3] fill-white"
      />

      <ellipse
        cx="174"
        cy="55"
        rx="6"
        ry="9"
        className="stroke-black stroke-[2]"
      />

      <ellipse cx="174" cy="55" rx="2" ry="4" className="fill-white" />
    </g>
  )
}

export default Eyes

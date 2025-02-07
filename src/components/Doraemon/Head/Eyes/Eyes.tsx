import useAppStatus from '@/stores/app.store'
import { AppStatus } from '@/types/app-status'
import { useId } from 'react'

const Eyes = () => {
  const appStatus = useAppStatus(store => store.status)
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

      {appStatus === AppStatus.Dynamic ? (
        <path
          d="M 125 50 a 2 1 0 0 1 20 0"
          className="stroke-black stroke-[3] fill-white"
        />
      ) : (
        <g>
          <ellipse
            cx="146"
            cy="55"
            rx="6"
            ry="9"
            className="stroke-black stroke-[2]"
          />
          <ellipse cx="146" cy="55" rx="2" ry="4" className="fill-white" />
        </g>
      )}

      <ellipse
        cx="185"
        cy="43"
        rx="25"
        ry="31"
        className="stroke-black stroke-[3] fill-white"
      />

      {appStatus === AppStatus.Dynamic ? (
        <path
          d="M 175 50 a 2 1 0 0 1 20 0"
          className="stroke-black stroke-[3] fill-white"
        />
      ) : (
        <g>
          <ellipse
            cx="174"
            cy="55"
            rx="6"
            ry="9"
            className="stroke-black stroke-[2]"
          />
          <ellipse cx="174" cy="55" rx="2" ry="4" className="fill-white" />
        </g>
      )}
    </g>
  )
}

export default Eyes

import React from 'react'
import ArcadeButton from './ArcadeButton/ArcadeButton'

import { logosConfig } from './technologies-logos'
import Cable from './Cable/Cable'
import useAppStatus from '@/stores/app.store'
import { AppStatus } from '@/types/app-status'
import { BasicTechnology } from '@/types/technologies'

const TechnologiesActivator = () => {
  const currentStatus = useAppStatus(state => state.status)
  const changeStatus = useAppStatus(state => state.changeStatus)
  const isCableActive = useAppStatus(state => state.isCableActive)
  const isButtonActive = useAppStatus(state => state.isButtonActive)

  const togglerTechnology: Record<BasicTechnology, VoidFunction> = {
    html: (): void => {
      if (currentStatus !== AppStatus.Structure) {
        changeStatus(AppStatus.Structure)
      } else {
        alert(
          '"Desactivo HTML". \nSe eliminara todo el contenido de la página.'
        )
        const root = document.getElementById('root')
        if (!root) return
        root.innerHTML = ''
      }
    },
    css: (): void => {
      const nextStatus: AppStatus =
        currentStatus !== AppStatus.Style
          ? AppStatus.Style
          : AppStatus.Structure
      changeStatus(nextStatus)
    },
    js: (): void => {
      const nextStatus: AppStatus =
        currentStatus !== AppStatus.Dynamic
          ? AppStatus.Dynamic
          : AppStatus.Style
      changeStatus(nextStatus)
    },
  }

  return (
    <div className="flex items-center min-w-40">
      {logosConfig.map(({ technology, src, alt }, index) => (
        <React.Fragment key={technology}>
          <ArcadeButton
            name={technology}
            isActive={isButtonActive(technology)}
            imgSrc={src}
            imgAlt={alt}
            onHandleClick={togglerTechnology[technology]}
          />
          {index < 2 && <Cable isActive={isCableActive(index)} />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default TechnologiesActivator

import React from 'react'
import ArcadeButton from './ArcadeButton/ArcadeButton'

import { logosConfig } from './technologies-logos'
import Cable from './Cable/Cable'
import useAppStatus from '@/stores/app.store'
import { AppStatus } from '@/types/app-status'

const TechnologiesActivator = () => {
  const currentStatus = useAppStatus(state => state.status)
  const changeStatus = useAppStatus(state => state.changeStatus)

  const togglerTechnology = {
    html: (): void => {
      if (currentStatus !== AppStatus.Structure) {
        changeStatus(AppStatus.Structure)
      } else {
        alert('Desactivo HTML. Se eliminara todo el contenido de la página')
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

  const isCableActive = (index: number): boolean => {
    if (index === 0) {
      return currentStatus !== AppStatus.Structure
    } else {
      return currentStatus === AppStatus.Dynamic
    }
  }

  return (
    <div className="flex items-center min-w-40">
      {logosConfig.map(({ technology, src, alt, backgroundColor }, index) => (
        <React.Fragment key={backgroundColor}>
          <ArcadeButton
            imgSrc={src}
            imgAlt={alt}
            hexColor={backgroundColor}
            onHandleClick={togglerTechnology[technology]}
          />
          {index < 2 && <Cable isActive={isCableActive(index)} />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default TechnologiesActivator

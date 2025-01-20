import ArcadeButton from './ArcadeButton/ArcadeButton'

import { logosConfig } from './technologies-logos'

const TechnologiesActivator = () => {
  return (
    <div className="flex justify-between min-w-40 bg-blue-500">
      {logosConfig.map(({ src, alt, backgroundColor }) => (
        <ArcadeButton
          key={backgroundColor}
          imgSrc={src}
          imgAlt={alt}
          hexColor={backgroundColor}
        />
      ))}
    </div>
  )
}

export default TechnologiesActivator

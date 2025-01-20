import './ArcadeButton.css'

type ArcadeButtonProps = {
  imgSrc: string
  imgAlt: string
  hexColor: string
}

const ArcadeButton = ({ imgSrc, imgAlt, hexColor }: ArcadeButtonProps) => {
  return (
    <div className="arcade-border bg-white">
      <div
        className={`w-8 h-8 arcade-border m-1 cursor-pointer overflow-hidden`}
        style={{ backgroundColor: hexColor }}
      >
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  )
}

export default ArcadeButton

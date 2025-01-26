import './ArcadeButton.css'

type ArcadeButtonProps = {
  imgSrc: string
  imgAlt: string
  hexColor: string
  onHandleClick: VoidFunction
}

const ArcadeButton = ({
  imgSrc,
  imgAlt,
  hexColor,
  onHandleClick,
}: ArcadeButtonProps) => {
  return (
    <div className="arcade-border bg-white">
      <button
        onClick={onHandleClick}
        className={`w-8 h-8 arcade-border m-1 cursor-pointer overflow-hidden shadow-lg shadow-black/60 transition-all duration-200 ease-in-out active:shadow-inner active:scale-95`}
        style={{ backgroundColor: hexColor }}
      >
        <img src={imgSrc} alt={imgAlt} />
      </button>
    </div>
  )
}

export default ArcadeButton

import './ArcadeButton.css'

type ArcadeButtonProps = {
  isActive: boolean
  imgSrc: string
  imgAlt: string
  onHandleClick: VoidFunction
}

const ArcadeButton = ({
  isActive,
  imgSrc,
  imgAlt,
  onHandleClick,
}: ArcadeButtonProps) => {
  return (
    <div className={`arcade-border ${isActive ? 'bg-green-300' : 'bg-white'}`}>
      <button
        onClick={onHandleClick}
        className={`w-8 h-8 arcade-border m-1 cursor-pointer overflow-hidden shadow-md shadow-black/60 transition-all duration-200 ease-in-out active:shadow-inner active:scale-95`}
      >
        <img src={imgSrc} alt={imgAlt} className="" />
      </button>
    </div>
  )
}

export default ArcadeButton

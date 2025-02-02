import './Star.css'

type StarProps = {
  left: number
  top: number
  size: number
  animationDuration: number
}

const Star = ({ left, top, size, animationDuration }: StarProps) => {
  return (
    <div
      className={`absolute bg-white rounded-full animate-[twinkle_3s_infinite_ease-in-out,moveStar_60s_linear_infinite]`}
      style={{
        left: `${left}px`,
        top: `${top}px`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${animationDuration}s`,
      }}
    />
  )
}

export default Star

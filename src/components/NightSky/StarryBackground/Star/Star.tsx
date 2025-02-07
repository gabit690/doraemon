import { getTailwindClasses } from './styles'
import './Star.css'

type StarProps = {
  left: number
  top: number
  size: number
  active: boolean
  animationDuration: number
}

const Star = ({ left, top, size, active, animationDuration }: StarProps) => {
  return (
    <div
      className={getTailwindClasses(active)}
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

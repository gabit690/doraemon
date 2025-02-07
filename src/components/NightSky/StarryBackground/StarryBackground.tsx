import { isDynamic } from '@/helpers/checkStatus'
import useAppStatus from '@/stores/app.store'
import Star from './Star/Star'
import { useEffect, useMemo, useState } from 'react'

type StarsConfig = {
  x: number
  y: number
  size: number
  duration: number
}

const generateStars = (
  width: number,
  height: number,
  count = 100
): StarsConfig[] => {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 3 + 2,
    duration: Math.random() * 3 + 2,
  }))
}

const StarryBackground = () => {
  const appStatus = useAppStatus(state => state.status)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const starsConfig = useMemo(
    () => generateStars(windowSize.width, windowSize.height),
    [windowSize]
  )

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        requestAnimationFrame(() => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          })
        })
      }, 100)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {starsConfig.map(({ x, y, size, duration }, index) => (
        <Star
          key={index}
          left={x}
          top={y}
          size={size}
          active={isDynamic(appStatus)}
          animationDuration={duration}
        />
      ))}
    </>
  )
}

export default StarryBackground

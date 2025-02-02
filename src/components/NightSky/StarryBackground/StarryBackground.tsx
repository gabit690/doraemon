import { ReactNode, useMemo } from 'react'
import Star from './Star/Star'

const StarryBackground = () => {
  const stars: ReactNode = useMemo(() => {
    const newStars: ReactNode[] = []
    for (let index = 0; index < 100; index++) {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      const size = Math.random() * 3 + 2
      const duration = Math.random() * 3 + 2

      newStars.push(
        <Star
          key={index}
          left={x}
          top={y}
          size={size}
          animationDuration={duration}
        />
      )
    }

    return newStars
  }, [])

  return <>{stars}</>
}

export default StarryBackground

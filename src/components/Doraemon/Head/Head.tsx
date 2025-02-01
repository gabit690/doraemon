import head from '../../../../temp/doraemon-head-copy.jpg'
import Bell from './Bell/Bell'
import Eyes from './Eyes/Eyes'
import Mouth from './Mouth/Mouth'
import Necklace from './Necklace/Necklace'
import Nose from './Nose/Nose'
import Whiskers from './Whiskers/Whiskers'

const Head = () => {
  return (
    <div className="w-80 h-60 outline-double outline-blue-800 mx-auto relative">
      <img src={head} alt="head" className="opacity-10 temporal-image h-60" />
      <svg width="320" height="240" className="overflow-visible">
        <ellipse
          cx="160"
          cy="125"
          rx="128"
          ry="124"
          className="stroke-black stroke-[4] fill-blue-500"
        />
        <path
          d="M 160 42 c 180 0 125 202 0 202 c -125 0 -180 -202 0 -202"
          className="stroke-black stroke-[3] fill-white"
        />
        <Eyes />
        <Nose />
        <Whiskers />
        <line
          x1="160"
          y1="98"
          x2="160"
          y2="150"
          className="stroke-black stroke-[2]"
        />
        <Mouth />
        <Necklace />
        <Bell />
      </svg>
    </div>
  )
}

export default Head

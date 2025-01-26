import html5Logo from '@/assets/images/html5-logo.webp'
import css3Logo from '@/assets/images/css3-logo.webp'
import jsLogo from '@/assets/images/js-logo.png'
import { BasicTechnology } from '@/types/technologies'

type LogoConfig = {
  technology: BasicTechnology
  src: string
  alt: string
}

export const logosConfig: LogoConfig[] = [
  {
    technology: BasicTechnology.Html,
    src: html5Logo,
    alt: 'HTML5 logo',
  },
  {
    technology: BasicTechnology.Css,
    src: css3Logo,
    alt: 'CSS3 logo',
  },
  {
    technology: BasicTechnology.Js,
    src: jsLogo,
    alt: 'Javascript logo',
  },
]

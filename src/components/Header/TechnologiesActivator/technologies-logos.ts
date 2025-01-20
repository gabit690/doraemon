import html5Logo from '@/assets/images/html5-logo.png'
import css3Logo from '@/assets/images/css3-logo.png'
import jsLogo from '@/assets/images/js-logo.png'

type LogoConfig = {
  src: string
  alt: string
  backgroundColor: string
}

export const logosConfig: LogoConfig[] = [
  {
    src: html5Logo,
    alt: 'HTML5 logo',
    backgroundColor: '#E34C26',
  },
  {
    src: css3Logo,
    alt: 'CSS3 logo',
    backgroundColor: '#0F5298',
  },
  {
    src: jsLogo,
    alt: 'Javascript logo',
    backgroundColor: '#F0DB4F',
  },
]

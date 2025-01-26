import { getCableStyles } from './styles'

type CableProps = {
  isActive: boolean
}

const Cable = ({ isActive }: CableProps) => {
  return <div className={getCableStyles(isActive)} />
}

export default Cable

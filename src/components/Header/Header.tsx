import TechnologiesActivator from './TechnologiesActivator/TechnologiesActivator'

import Logo from './Logo/Logo'
import { getTailwindClasses } from './styles'
import useAppStatus from '@/stores/app.store'

const Header = () => {
  const appStatus = useAppStatus(store => store.status)
  return (
    <header className={getTailwindClasses(appStatus)}>
      <Logo />
      <TechnologiesActivator />
    </header>
  )
}

export default Header

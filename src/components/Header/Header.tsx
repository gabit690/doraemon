import Logo from './Logo/Logo'
import TechnologiesActivator from './TechnologiesActivator/TechnologiesActivator'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-2 py-1 outline-double">
      <Logo />
      <TechnologiesActivator />
    </header>
  )
}

export default Header

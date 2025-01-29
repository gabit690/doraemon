import TechnologiesActivator from './TechnologiesActivator/TechnologiesActivator'

import Logo from './Logo/Logo'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-2 py-2 shadow-lg shadow-white/40 doraemon-color">
      <Logo />
      <TechnologiesActivator />
    </header>
  )
}

export default Header

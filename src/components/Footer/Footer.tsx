import useAppStatus from '@/stores/app.store'
import { getTailwindClasses } from './styles'

const Footer = () => {
  const appStatus = useAppStatus(store => store.status)
  return (
    <footer className={getTailwindClasses(appStatus)}>
      <p className="italic font-mono text-end pr-1 py-1">
        Developed by
        <a
          href="https://github.com/gabit690/doraemon"
          target="_blank"
          className="bg-white px-1"
        >
          gabit
        </a>
        2025
      </p>
    </footer>
  )
}

export default Footer

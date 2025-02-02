import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Doraemon from '@/components/Doraemon/Doraemon'
import NightSky from './components/NightSky/NightSky'

const App = () => {
  return (
    <main className="main-container flex flex-col justify-between">
      <NightSky />
      <Header />
      <Doraemon />
      <Footer />
    </main>
  )
}

export default App

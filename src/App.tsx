import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Doraemon from '@/components/Doraemon/Doraemon'

const App = () => {
  return (
    <main className="main-container flex flex-col justify-between">
      <Header />
      <p className="fixed bottom-3 left-3 text-white z-50">{`W: ${window.innerWidth}, H:${window.innerHeight}`}</p>
      <Doraemon />
      <Footer />
    </main>
  )
}

export default App

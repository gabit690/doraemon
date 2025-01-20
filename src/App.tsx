import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Doraemon from '@/components/Doraemon/Doraemon'

const App = () => {
  return (
    <main className="main-container">
      <Header />
      <p className="fixed bottom-3 right-3 text-white">{`W: ${window.innerWidth}, H:${window.innerHeight}`}</p>
      <Doraemon />
      <Footer />
    </main>
  )
}

export default App

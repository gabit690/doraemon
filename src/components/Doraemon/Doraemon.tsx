import Head from './Head/Head'
import Takekoputa from './Takekoputa/Takekoputa'

const Doraemon = () => {
  return (
    <div className="flex flex-col justify-center bg-yellow-300">
      <Takekoputa />
      <Head />
    </div>
  )
}

export default Doraemon

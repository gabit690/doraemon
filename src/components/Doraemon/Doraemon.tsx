import Head from './Head/Head'
import Necklace from './Necklace/Necklace'
import Takekoputa from './Takekoputa/Takekoputa'

const Doraemon = () => {
  return (
    <div className="flex flex-col justify-center">
      <Takekoputa />
      <Head />
      <Necklace />
    </div>
  )
}

export default Doraemon

import head from '../../../../temp/doraemon-head-copy.jpg'

const Head = () => {
  return (
    <div className="w-80 h-60 outline-double outline-blue-800 mx-auto relative">
      <img src={head} alt="head" className="opacity-10 temporal-image h-60" />
    </div>
  )
}

export default Head

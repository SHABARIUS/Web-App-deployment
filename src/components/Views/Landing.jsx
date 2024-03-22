// import landingImage from '../../assets/landing.svg'
import landingImage from '../../assets/landing.svg'
const Landing = () => {
  return (
    <>
      <div className='w-[65%] m-auto flex flex-col md:flex-row justify-between my-20 md:my-40'>
        <div className='flex items-center justify-center sm:w-[250px] md:w-[500px] lg:w-[600px] shrink-0 '>
          <img src={landingImage} alt='coding person' width='500px' />
        </div>
        <div className='md:mr-20 mt-5 shrink flex-wrap '>
          <h1 className='text-3xl lg:text-6xl xl:text-7xl font-bold mb-5 text-center md:text-right basis-3/4'>
            Transform Your <span className='text-[#E5BE7F]'>Career!</span>
          </h1>
          <h1 className='text-3xl lg:text-5xl font-bold my-3 text-center md:text-right'>
            Get The Right Job<span className='text-[#E5BE7F]'>.</span>
          </h1>
          <h3 className='text-3xl my-5 text-gray-700 mt-10 text-center md:text-right'>
            Join us to learn more about it
          </h3>
          <div className='mt-20 text-center md:text-right'>
            <button className='px-12 py-6 bg-[#E5BE7F] hover:bg-[#d3ac6e] text-xl md:text-2xl lg:text-3xl rounded-lg font-bold'>
              <a href='#contactForm'>Know More</a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing


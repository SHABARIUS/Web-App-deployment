import About from '../Views/About'
import FootBar from '../Views/FootBar'
import Header from '../Views/Header'



const AboutPage = () => {
  return (
    <>
    <div className='h-[91.25vh]'>
        <Header />
        <About />
    </div>
    <FootBar />
    </>
  )
}

export default AboutPage
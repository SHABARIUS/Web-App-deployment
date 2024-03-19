import Contact from '../Views/Contact'
import FootBar from '../Views/FootBar'
import Header from '../Views/Header'

const ContactPage = () => {
  return (
    <>
    <div className='h-[91.25vh]'>
        <Header />
        <div className='mb-20'>
        <Contact />
        </div>
    </div>
        <FootBar />
    </>
  )
}

export default ContactPage
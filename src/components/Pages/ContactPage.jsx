import Contact from '../Views/Contact'
import FootBar from '../Views/FootBar'
import Header from '../Views/Header'

const ContactPage = () => {
  return (
    <>
    <div className='h-[91.25vh]'>
        <Header />
        <Contact />
    </div>
        <FootBar />
    </>
  )
}

export default ContactPage
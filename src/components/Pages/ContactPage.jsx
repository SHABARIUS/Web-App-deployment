import Contact from '../Views/Contact'
import FootBar from '../Views/FootBar'
import Header from '../Views/Header'

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className='mb-20'>
        <Contact />
      </div>
      <FootBar />
    </>
  )
}

export default ContactPage

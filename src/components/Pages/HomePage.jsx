import Header from '../Views/Header'
import Landing from '../Views/Landing'
import Courses from '../Views/Courses'
import About from '../Views/About'
import Contact from '../Views/Contact'
import FootBar from '../Views/FootBar'

const HomePage = () => {
  return (
    <div>
        <Header />
        <Landing />
        <Courses />
        <About />
        <Contact />
        <FootBar />
    </div>
  )
}

export default HomePage
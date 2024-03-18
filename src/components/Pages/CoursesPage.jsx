import Courses from '../Views/Courses'
import FootBar from '../Views/FootBar'
import Header from '../Views/Header'
import devOps from '../../assets/devops.png'

const CoursesPage = () => {
  return (
    <div>
      <Header />
      <Courses />
      <div className='w-[85%] m-auto my-20'>
        <h1 className='text-5xl font-bold'>Upcoming courses</h1>
        <div className='w-96 flex flex-col items-center my-20 p-4 rounded-md shadow-sm hover:shadow-md cursor-pointer'>
        <div className='w-[95%]'>
          <img src={devOps} alt='course logo' width='350px' />
        </div>
        <div>
          <h2 className='text-3xl font-bold my-10'>Data Science</h2>
          <h4 className='text-gray-700'>
            Images and Description will be updated
          </h4>
          <p>
            <span className='font-bold'> Duration:</span> 6 Months
          </p>
          <p>
            <span className='font-bold'> Mode:</span> Online
          </p>
            <button className='my-4 px-2 py-4 bg-[#E5BE7F] rounded-md' disabled onClick={() => {
              // setShowModal(true)
              // setSyllabus('DevOps-Syllabus')
              }}>Download Syllabus</button>
            <button className='ml-16 border border-black/20 px-4 py-4 rounded-md' disabled>Know more</button>
        </div>
        </div>
      </div>
      <FootBar />
    </div>
  )
}

export default CoursesPage
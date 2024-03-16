import devOps from '../../assets/devops.png'
import mern from '../../assets/node.png'
import salesForce from '../../assets/Salesforce.png'
// import salesForceSyllabus from '../../assets/Salesforce-Syllabus.pdf'
// import mernSyllabus from '../../assets/MERN-Syllabus.pdf'
// import devopsSyllabus from '../../assets/DevOps-Syllabus.pdf'
import Modal from "./Modal"
import { useState } from 'react'

const Courses = () => {
  const[showModal, setShowModal] = useState(false);
  const [syllabus, setSyllabus] = useState('')
  return (
    <div className='w-[88%] m-auto'>
      {showModal && <Modal syllabus={syllabus} setShowModal={setShowModal}/>}
      <h2 className='text-6xl font-bold my-32'>Courses</h2>
      <div className='flex items-center my-20 p-4 shadow-sm hover:shadow-md cursor-pointer'>
        <div className='w-[35%]'>
          <img src={devOps} alt='course logo' width='350px' />
        </div>
        <div>
          <h2 className='text-4xl font-bold my-10'>Devops</h2>
          <h4 className='text-2xl text-gray-700'>
            Learn the latest technologies and best practices from industry
            professionals and gain hands-on experience
          </h4>
          <p>
            <span className='font-bold'> Duration:</span> 3 Months
          </p>
          <p>
            <span className='font-bold'> Mode:</span> Online
          </p>
            <button className='my-4 px-2 py-4 bg-[#E5BE7F] rounded-sm' onClick={() => {
              setShowModal(true)
              setSyllabus('DevOps-Syllabus')
              }}>Download Syllabus</button>
        </div>
      </div>
      <div className='flex items-center my-20 p-4 shadow-sm hover:shadow-md cursor-pointer'>
        <div className='w-[35%]'>
          <img src={mern} alt='course logo' width='350px' />
        </div>
        <div>
          <h2 className='text-4xl font-bold my-10'>FullStack Development (MERN) </h2>
          <h4 className='text-2xl text-gray-700'>
            We offer comprehensive courses on full stack development to help you
            advance your career
          </h4>
          <p>
            <span className='font-bold'> Duration:</span> 3 Months
          </p>
          <p>
            <span className='font-bold'> Mode:</span> Online
          </p>
            <button className='my-4 px-2 py-4 bg-[#E5BE7F] rounded-sm' onClick={() => {
              setSyllabus('MERN-Syllabus')
              setShowModal(true)
              }}>Download Syllabus</button>
        </div>
      </div>
      <div className='flex items-center my-20 p-4 shadow-sm hover:shadow-md cursor-pointer'>
        <div className='w-[35%]'>
          <img src={salesForce} alt='course logo' width='300px' />
        </div>
        <div>
          <h2 className='text-4xl font-bold my-10'>Salesforce Admin</h2>
          <h4 className='text-2xl text-gray-700'>
            We offer comprehensive courses on Salesforce admin to help you
            advance your career
          </h4>
          <p>
            <span className='font-bold'> Duration:</span> 3 Months
          </p>
          <p>
            <span className='font-bold'> Mode:</span> Online
          </p>
            <button className='my-4 px-2 py-4 bg-[#E5BE7F] rounded-sm' onClick={() => {
              setSyllabus('Salesforce-Syllabus')
              setShowModal(true)
              }}>Download Syllabus</button>
        </div>
      </div>
    </div>
  )
}

export default Courses


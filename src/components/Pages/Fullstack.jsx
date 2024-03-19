import FootBar from '../Views/FootBar'
import Header from '../Views/Header'
import fullstackImage from "../../assets/fullstack.jpg"
import { useState } from 'react'
import { createPortal } from 'react-dom'
import Modal from '../Views/Modal'

const Fullstack = () => {
  const [showModal, setShowModal] = useState(false)
  const [syllabus, setSyllabus] = useState('')
  return (
    <>
    {showModal && createPortal(<Modal syllabus={syllabus} setShowModal={setShowModal}/>, document.getElementById('modal'))}
    <div>
      <Header />
      <div className='w-[50%] m-auto my-16'>
        {/* first segment */}
        <div className='flex justify-between mb-20'>
          <div className='flex-3'>
            <h2 className='text-xl'>FULL-STACK DEVELOPMENT BOOTCAMP</h2>
            <h2 className='text-xl'>The most trusted way to become an</h2>
            <h1 className='text-3xl font-bold'>Expert Full-Stack Developer</h1>
            <ul className='my-20 list-disc list-inside'>
              <li className='text-gray-700'>Mock interviews, hackathons and more</li>
              <li className='text-gray-700'>Multilingual training options (English and Tamil)</li>
              <li className='text-gray-700'>Job-ready portfolio of rich, functional apps</li>
              <li className='text-gray-700'>Reserve a Seat for INR 5,000/-</li>
            </ul>
            <div>
              <button className='px-6 py-4 my-2 font-bold rounded-md bg-[#E5BE7F] hover:bg-[#d3ac6e] cursor-pointer mr-5'>Apply Now</button>
              <button className='ml-5 border border-black/20 px-3 py-4 rounded-md' onClick={() => {
              setSyllabus('MERN-Syllabus')
              setShowModal(true)
              }}>Download Syllabus</button>
            </div>
          </div>
          <div>
            <img src={fullstackImage} alt="course image" width={"400px"} className='rounded-tr-lg rounded-br-lg'/>
          </div>
        </div>
      </div>
      {/* second segment */}
      <div className='w-[60%] h-40 m-auto mb-20 border-[2px] border-black/45 rounded-xl flex justify-around items-center'>
        <div className='text-center'>
          <h1>₹12LPA</h1>
          <h3>Average Salary</h3>
        </div>
        <div className='border-r-[2px] border-black/55 h-16'></div>
        <div className='text-center'>
        <h1>44%</h1>
          <h3>Average Hike</h3>
        </div>
        <div className='border-r-[2px] border-black/55 h-16'></div>
        <div className='text-center'>
        <h1>302%</h1>
          <h3>Highest Salary Hike</h3>
        </div>
        <div className='border-r-[2px] border-black/55 h-16'></div>
        <div className='text-center'>
        <h1>4,500+</h1>
          <h3>Hiring Partners</h3>
        </div>
      </div>
        {/* thrid segment */}
      <div className='w-[60%] m-auto mb-20'>
        <p>
        FULL-STACK DEVELOPMENT BOOTCAMP CURRICULUM
        </p>
        <h2 className='text-3xl'>Learn with a
          World-Class Curriculum</h2>
        <div className='mt-10 flex justify-between'>
        <div className='px-8 py-5 border border-black/45 rounded-xl'>
          <p>Module 1</p>
          <h1 className='text-[#0C3948] font-bold'>Frontend</h1>
        </div>
        <div className='px-8 py-5  border border-black/45 rounded-xl'>
          <p>Module 2</p>
          <h1 className='text-[#0C3948] font-bold'>Backend</h1>
        </div>
        <div className='px-8 py-5  border border-black/45 rounded-xl'>
          <p>Module 3</p>
          <h1 className='text-[#0C3948] font-bold'>Database</h1>
        </div>
        <div className='px-8 py-5  border border-black/45 rounded-xl'>
          <p>Module 4</p>
          <h1 className='text-[#0C3948] font-bold'>Projects</h1>
        </div>
        </div>
      </div>
      <FootBar />
    </div>
    </>
  )
}

export default Fullstack
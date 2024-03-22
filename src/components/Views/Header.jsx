import { useState } from 'react'
import imgUrl from './logo.png'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom'
import Modal from './Modal'

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      {showModal &&
        createPortal(
          <Modal setShowModal={setShowModal} />,
          document.getElementById('modal')
        )}
      <div className='bg-[#0C3948]'>
        <div className='w-full md:w-[80%] flex flex-col md:flex-row flex-wrap justify-between items-center m-auto py-3'>
          <div className='logo w-96 flex flex-row items-center'>
            <img src={imgUrl} alt='logo' width='128px' />
            <h1 className='text-slate-100 font-bold'>
              Docent Disciple Dream Technologies
            </h1>
          </div>
          <ul className='flex flex-col md:flex-row text-slate-100 w-80 justify-between items-center font-bold cursor-pointer'>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/about'>
              <li>About</li>
            </Link>
            <Link to='/contact'>
              <li>Contact</li>
            </Link>
            <Link to='/courses'>
              <li>Courses</li>
            </Link>
          </ul>
          <div>
            <button
              className='px-4 py-2 my-2 font-bold rounded bg-[#E5BE7F] hover:bg-[#d3ac6e] cursor-pointer'
              onClick={() => setShowModal(true)}
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header


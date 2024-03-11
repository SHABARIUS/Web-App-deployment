// import { useState } from 'react'
const Contact = () => {
  return (
    <div className='w-[96%] m-auto'>
      <h2 className='text-6xl font-bold my-28 text-center'>Contact</h2>
      <div className='w-[760px] m-auto bg-[#0C3948] p-10 rounded-md text-gray-50'>
        <form action=''>
          <div>
            <label htmlFor='FirstName' className='inline-block w-20'>
              First Name
            </label>
            <input
              type='text'
              className='ml-3 p-3 border border-black border-solid  mr-5 text-gray-950 rounded-md outline-none'
            />
            <label htmlFor='LastName' className='inline-block w-20'>
              Last Name
            </label>
            <input
              type='text'
              className='mx-3 p-3 border border-black border-solid  text-gray-950 rounded-md outline-none'
            />
          </div>
          <br />
          <div>
            <label htmlFor='Email' className='inline-block w-20'>
              Email
            </label>
            <input
              type='email'
              className='mx-3 p-3 border border-black border-solid  text-gray-950 rounded-md outline-none'
            />
          </div>
          <br />
          <div>
            <label htmlFor='Number' className='inline-block w-20'>
              Mobile
            </label>
            <input
              type='text'
              className='mx-3 p-3 border border-black border-solid  text-gray-950 rounded-md outline-none'
            />
          </div>
          <br />
          <div>
            <label htmlFor='Number' className='inline-block w-20'>
              Course
            </label>
            <select
              name='course'
              id='course'
              className='mx-3 p-3 border border-black border-solid  text-gray-950 rounded-md outline-none'
            >
              <option value='devops'>Devops</option>
              <option value='mern'>MERN</option>
            </select>
          </div>
          <div className='my-10 m-auto w-40'>
            <button className='px-6 py-3 bg-[#E5BE7F] text-xl rounded-lg font-bold'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact


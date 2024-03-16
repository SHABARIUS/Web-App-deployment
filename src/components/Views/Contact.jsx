import { useState } from 'react'

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')

  return (
    <div className='w-[96%] m-auto mb-20' id='formSubmit'>
      <h2 className='text-6xl font-bold my-10 text-center'>Talk to our experts!</h2>
      <div className='sm:w-[360px] md:w-[760px] m-auto bg-[#0C3948] p-10 rounded-md text-gray-50 flex justify-center' id="contactForm">
        <form
          action='https://formsubmit.co/iampraveen7@gmail.com'
          method='POST'
        >
          <div>
            <input type='hidden' name='_subject' value='New submission!' />
            <label htmlFor='FirstName' className='inline-block w-24'>
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='ml-3 p-3 border border-black border-solid  mr-5 text-gray-950 rounded-md outline-none'
            />
          </div> 
          <br />
          <div>
            <label htmlFor='LastName' className='inline-block w-24'>
              Last Name
            </label>
            <input
              type='text'
              name='lastName'
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
              className='mx-3 p-3 border border-black border-solid  text-gray-950 rounded-md outline-none'
            />
          </div>
          <br />
          <div>
            <label htmlFor='Email' className='inline-block w-24'>
              Email
            </label>
            <input
              type='email'
              name='email'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className='mx-3 p-3 border border-black border-solid  text-gray-950 rounded-md outline-none'
            />
          </div>
          <br />
          <div>
            <label htmlFor='Number' className='inline-block w-24'>
              Mobile
            </label>
            <input
              type='text'
              name='mobile'
              value={mobile}
              required
              onChange={(e) => setMobile(e.target.value)}
              className='mx-3 p-3 border border-black border-solid text-gray-950 rounded-md outline-none'
            />
          </div>
          <br />
          {/* <div>
            <label htmlFor='Course' className='inline-block w-24'>
              Course
            </label>
            <select
              name='course'
              id='course'
              className='mx-3 p-3 border border-black border-solid text-gray-950 rounded-md outline-none'
            >
              <option value='devops'>Devops</option>
              <option value='mern'>MERN</option>
              <option value='data science'>Data Science</option>
              <option value='salesforce admin'>Salesforce admin</option>
            </select>
          </div> */}
          <div>
            <label htmlFor="" className='inline-block w-24'>Qualification</label>
            <select
              name='education'
              id='education'
              className='mx-3 p-3 border border-black border-solid text-gray-950 rounded-md outline-none'
            >
              <option value='diploma'>Diploma</option>
              <option value='arts'>Arts&Science</option>
              <option value='engineering'>Engineering</option>
              <option value='masters'>Masters</option>
              <option value='others'>Others</option>
            </select>
          </div>
          <div className='mt-4 flex'>
            <div>
              <label htmlFor="" name="current">Current</label>
            </div>
            <div className='ml-14'>
              <input type="radio" value="student" name="current"/>
              <label htmlFor="" className='mx-2' name="current">Student</label>
              <br />
              <input type="radio" value="working" name="current"/>
              <label htmlFor="" className='mx-2' name="current">Working Professional</label>
              <br />
              <input type="radio" value="others" name="current"/>
              <label htmlFor="" className='mx-2' name="current">Others</label>
            </div>
          </div>
          <div className='my-10 m-auto w-80'>
            <button
              className='px-6 py-3 bg-[#E5BE7F] text-xl rounded-lg font-bold text-black w-full'
              type='submit'
              value='Submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact


import imgUrl from './logo.png'

const Header = () => {
  return (
    <div className='wrapper  bg-[#0C3948]'>
      <div className='navBar flex justify-between items-center w-[98%] m-auto py-3'>
        <div className='logo w-96 flex items-center'>
          <img src={imgUrl} alt='logo' width='128px' />
          <h1 className='text-slate-100 font-bold'>
            Docent Disciple Dream Technologies
          </h1>
        </div>
        <ul className='flex text-slate-100 w-80 justify-between font-bold cursor-pointer'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>
          <button className='px-4 py-2 font-bold rounded bg-[#E5BE7F] cursor-pointer'>
            Join Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header


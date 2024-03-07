
const Contact = () => {
  return (
    <div className="w-[96%] m-auto">
        <h2 className="text-6xl font-bold my-32">Contact</h2>
        <form action="">
            <div>
                <label htmlFor="FirstName">First Name</label>
                <input type="text" className="mx-3 p-3 border border-black border-solid outline-black" />
            </div>
            <br />
            <div>
                <label htmlFor="LastName">Last Name</label>
                <input type="text" className="mx-3 p-3 border border-black border-solid outline-black" />
            </div>
            <br />
            <div>
                <label htmlFor="Email">Email</label>
                <input type="email" className="mx-3 p-3 border border-black border-solid outline-black" />
            </div>
            <br />
            <div>
                <label htmlFor="Number">Mobile</label>
                <input type="text" className="mx-3 p-3 border border-black border-solid outline-black" />
            </div>
            <br />
            <div>
                <button className='px-6 py-3 bg-[#E5BE7F] text-xl rounded-lg font-bold'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Contact
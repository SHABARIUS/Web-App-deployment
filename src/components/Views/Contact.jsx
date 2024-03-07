
const Contact = () => {
  return (
    <div className="w-[96%] m-auto">
        <h2 className="text-6xl font-bold my-28">Contact</h2>
        <form action="">
            <div>
                <label htmlFor="FirstName" className="inline-block w-40">First Name</label>
                <input type="text" className="ml-3 p-3 border border-black border-solid outline-black mr-5" />
                <label htmlFor="LastName" className="inline-block w-32">Last Name</label>
                <input type="text" className="mx-3 p-3 border border-black border-solid outline-black" />
            </div>
            <br />
            <div>
                <label htmlFor="Gender">
                    Gender
                </label>
                <br />
                <div className="my-3">
                    <input type="radio" value="male" name="gender" /> <span className="mr-5">Male</span>
                    <input type="radio" value="female" name="gender"/> Female
                </div>
                <label htmlFor="Email" className="inline-block w-40">Email</label>
                <input type="email" className="mx-3 p-3 border border-black border-solid outline-black" />
            </div>
            <br />
            <div>
                <label htmlFor="Number" className="inline-block w-40">Mobile</label>
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
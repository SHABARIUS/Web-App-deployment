import devOps from "../../assets/devops.png"
import mern from "../../assets/node.png"
const Courses = () => {
  return (
    <div className="w-[96%] m-auto">
        <h2  className="text-6xl font-bold my-32">Courses</h2>
        <div className="flex items-center my-20">
            <div className="w-[35%]">
                <img src={devOps} alt="course logo" width="350px"/>
            </div>
            <div>
                <h2 className="text-4xl font-bold my-10">Devops</h2>
                <h4 className="text-2xl text-gray-700">Learn the latest technologies and best practices from industry professionals and gain hands-on experience</h4>
                <p>Duration: <span>3 Months</span></p>
            </div>
        </div>
        <div className="flex items-center my-20">
            <div className="w-[35%]">
                <img src={mern} alt="course logo" width="350px"/>
            </div>
            <div>
                <h2 className="text-4xl font-bold my-10">MERN Stack</h2>
                <h4 className="text-2xl text-gray-700">We offer comprehensive courses on full stack development to help you advance your career</h4>
                <p>Duration: <span>3 Months</span></p>
            </div>
        </div>
    </div>
  )
}

export default Courses
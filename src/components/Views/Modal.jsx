import salesForceSyllabus from '../../assets/Salesforce-Syllabus.pdf'
import mernSyllabus from '../../assets/MERN-Syllabus.pdf'
import devopsSyllabus from '../../assets/DevOps-Syllabus.pdf'
import { useEffect } from 'react'


// eslint-disable-next-line react/prop-types
const Modal = ({syllabus, setShowModal}) => {
    useEffect(() => {
    document.body.style.overflow = "hidden"
    
    return (() => {
        document.body.style.overflow = "scroll"
    })
    },[])
    const downloadDecider = () => {
        if( syllabus === 'Devops-Syllabus'){
            return devopsSyllabus
        } else if ( syllabus === 'MERN-Syllabus'){
            return mernSyllabus
        } else {
            return salesForceSyllabus
        }
    }
  return (
    <div className="absolute w-[100%] h-[1400px] flex justify-center items-center bg-black/65 ">
        <div className="w-[400px] h-96 p-10 bg-[#E5BE7F] flex flex-col justify-center relative ">
            <h2 className="font-bold text-center my-4">To Continue</h2>
            <p className="absolute top-3 right-2 cursor-pointer" onClick={() => setShowModal(false)}>X</p>
            <p className="my-2">Enter your mobile</p>
            <input type="text" className='p-3 border border-black border-solid  mr-5 text-gray-950 rounded-md outline-none'/>
            <br />
            <a href={downloadDecider()} download={`${syllabus}`} target='_blank'>
                <button className="my-4 px-8 py-4 text-slate-100 bg-[#0C3948]" onClick={() => {
                    setShowModal(false)
                }}>Submit</button>
          </a>

        </div>
    </div>
  )
}

export default Modal
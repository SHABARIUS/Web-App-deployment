import salesForceSyllabus from '../../assets/Salesforce-Syllabus.pdf'
import mernSyllabus from '../../assets/MERN-Syllabus.pdf'
import devopsSyllabus from '../../assets/DevOps-Syllabus.pdf'
import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

// eslint-disable-next-line react/prop-types
const Modal = ({syllabus, setShowModal}) => {
    useEffect(() => {
    document.body.style.overflow = "hidden"
    
    return (() => {
        document.body.style.overflow = "scroll"
        document.body.style.overflowX = "hidden"
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
    const notify = (status) => {
        status === 'pass' ? toast.success("Form Submitted Successfully!!!") : toast.error("Unable to submit form!");
    }

    const onSubmit = async (name,mobile) => {
        const formData = new FormData();
        console.log(formData)
        formData.append("access_key", "96bd1249-acaf-4e98-b98c-aa8920adc238");
        formData.append("name", name)
        formData.append("mobile", mobile)
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        console.log(json);
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
       
        if (res.success) {
          console.log("Success", res);
          notify('pass');
        } else {
          notify('fail');
        }
      };

    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
  return (
    <div className="fixed w-[100%] h-[100%] z-50 flex justify-center items-center bg-black/65 top-0 right-0 left-0 bottom-0">
        <div className="w-[400px] h-96 p-10 bg-[#E5BE7F] flex flex-col justify-center relative ">
            <h2 className="font-bold text-center my-4">To Continue</h2>
            <p className="absolute top-3 right-2 cursor-pointer" onClick={() => setShowModal(false)}>X</p>
            <p className="my-2">Enter your name</p>
            <input type="text" required className='p-3 border border-black border-solid  mr-5 text-gray-950 rounded-md outline-none' value={name} onChange={(e) => setName(e.target.value)}/>
            <br />
            <p className="my-2">Enter your mobile</p>
            <input type="text" required className='p-3 border border-black border-solid  mr-5 text-gray-950 rounded-md outline-none' value={mobile} onChange={(e) => setMobile(e.target.value)}/>
            <a href={downloadDecider()} download={`${syllabus}`} target='_blank'>
                <button className="block w-[50%] my-5 mx-auto px-8 py-4  text-slate-100 bg-[#0C3948] rounded-md" 
                    onClick={() => {
                    setShowModal(false)
                    if(name.length>0 && mobile.length ==10){
                      onSubmit(name,mobile)
                    }
                }}>
                    Submit</button>
          </a>
        <ToastContainer />
        </div>
    </div>
  )
}

export default Modal
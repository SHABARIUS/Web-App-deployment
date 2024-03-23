import { useState } from "react"

const D3Support = () => {
    const [active, setActive] = useState('learning');
  return (
    <div className='w-[90%] md:w-[45%] m-auto mb-20'>
          <h1 className='text-2xl font-bold'>
How will D3 support you?
<p>During Program</p>
<hr className="mt-4"/>
          </h1>
          <div className='my-10 flex space-x-10'>
            <div>
            <div className={`w-80 my-2 px-4 py-4 border rounded-md ${active==='learning' ? 'border-[#0C3948]/90' : 'border-black/25'} cursor-pointer`} onClick={() => setActive('learning')}>
            <h1 className={`text-gray-700 ${active==='learning' ? 'font-bold' : ''}`}>Learning Support</h1>
            </div>
            <div className={`w-80 my-2 px-4 py-4 border  rounded-md ${active==='career' ? 'border-[#0C3948]/90' : 'border-black/25'} cursor-pointer`} onClick={() => setActive('career')}>
            <h1 className={`text-gray-700 ${active==='career' ? 'font-bold' : ''}`}>Career Assistance</h1>
            </div>
            <div className={`w-80 my-2 px-4 py-4 border  rounded-md ${active==='resume' ? 'border-[#0C3948]/90' : 'border-black/25'} cursor-pointer`} onClick={() => setActive('resume')}>
            <h1 className={`text-gray-700 ${active==='resume' ? 'font-bold' : ''}`}>Resume Prepartion and Networking</h1>
            </div>
            <div className={`w-80 my-2 px-4 py-4 border  rounded-md ${active==='job' ? 'border-[#0C3948]/90' : 'border-black/25'} cursor-pointer`} onClick={() => setActive('job')}>
            <h1 className={`text-gray-700 ${active==='job' ? 'font-bold' : ''}`}>Job Opportunitites</h1>
            </div>
            </div>
            <div className={`${active==='learning' ? 'show' : 'hidden'}`}>
                <h1 className="font-bold">Industry Expert Guidance</h1>
                <p>
Interactive Live Sessions with leading industry experts covering curriculum + advanced topics</p>
<p>Personalised Industry Session in small groups (of 10-12) with industry experts to augment program curriculum with customized industry based learning</p>
                <h1 className="font-bold">Student Support</h1>
                <p>You can write to us via studentsupport@upgrad.com Or for urgent queries, use the "Talk to Us" option on the Learn platform.</p>
            </div>
            <div className={`${active==='career' ? 'show' : 'hidden'}`}>
                <h1 className="font-bold">Career Mentorship Sessions (1:1)</h1>
                <p>
Interactive Live Sessions with leading industry experts covering curriculum + advanced topics</p>
<p>Personalised Industry Session in small groups (of 10-12) with industry experts to augment program curriculum with customized industry based learning</p>
                <h1 className="font-bold">AI Powered Profile Builder</h1>
                <p>You can write to us via studentsupport@upgrad.com Or for urgent queries, use the "Talk to Us" option on the Learn platform.</p>
                <h1 className="font-bold">Interview Preparation</h1>
                <p>You can write to us via studentsupport@upgrad.com Or for urgent queries, use the "Talk to Us" option on the Learn platform.</p>
            </div>
            <div className={`${active==='resume' ? 'show' : 'hidden'}`}>
                <h1 className="font-bold">Networking & Learning Experience</h1>
                <p>
Interactive Live Sessions with leading industry experts covering curriculum + advanced topics</p>
<p>Personalised Industry Session in small groups (of 10-12) with industry experts to augment program curriculum with customized industry based learning</p>
                <p>You can write to us via studentsupport@upgrad.com Or for urgent queries, use the "Talk to Us" option on the Learn platform.</p>
            </div>
            <div className={`${active==='job' ? 'show' : 'hidden'}`}>
                <h1 className="font-bold">D3 Opportunities</h1>
                <p>
                Job Opportunities Portal: Gain exclusive access to D3's Job Opportunities portal which has 100+ openings from D3's hiring partners at any given time</p>
<p>Be the first to know vacancies to gain an edge in the application process</p>
                <p>Connect with companies that are the best match for you.</p>
            </div>
          </div>
        </div>
  )
}

export default D3Support
import fb from "../../assets/facebook.png"
import yt from "../../assets/youtube.png"
import ins from "../../assets/instagram.png"
import lk from "../../assets/linkedin.png"

const FootBar = () => {
  return (
    <div className='w-[100%] bg-[#0C3948] text-white text-center p-8'>
      <h2 className="font-bold">DOCENT DISCIPLE DREAM TECHNOLOGIES &#169;</h2>
      <p>All rights reserved (2024)</p>
      <div className="flex justify-center items-center space-x-5 mt-5">
      <a href="https://www.facebook.com/profile.php?id=61554883136540&mibextid=LQQJ4d" target="_blank">
      <img src={fb} alt="" width='28px' className="cursor-pointer"/>
      </a>
      <a href="https://www.youtube.com/channel/UClkny4XXu1ru83SKfTzq7XQ" target="_blank"><img src={yt} alt="" width='32px' className="cursor-pointer"/></a>
      <a href="https://www.instagram.com/d3_technologies_?igsh=MWgzdGtyZjJ4a2RrdQ==" target="_blank"><img src={ins} alt="" width='30px' className="cursor-pointer"/></a>
      <a href="linkedin.com/in/docent-disciple-dream-technologies-638b692a6" target="_blank"><img src={lk} alt="" width='30px' className="cursor-pointer"/></a>
      
      
      
      </div>
    </div>
  )
}

export default FootBar


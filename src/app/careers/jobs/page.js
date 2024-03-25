import Image from 'next/image'
import React from 'react'
import Logo from "../../../app/bfg-logo.png";

const page = () => {
  return (
    <>
    <div className="w-full flex justify-center py-10">
      <div className=" w-[100%] md:w-[70%] lg:w-[50%] bg-white p-4 shadow-xl">
      {/* <div className="w-[100px] h-[90px]">
                    <Image
                      src={Logo}
                      alt="logo"
                      className="w-full h-full object-fit"
                    />
                  </div> */}
                  <h3 className="text-center font-bold text-xl my-2">Junior  Product Designer</h3>
        <p className="text-lg text-justify">Our product development team at The BFG Global Consulting, LLC. is currently open to further scale its design system and brand marketing operations and seeking for a young champ to take on full-term employment as a Junior Product Designer.
Nature of job is Hybrid, and place of work is Abuja. Individual must have at least basic skill in graphics design, UI/UX design, and video graphics that are human centered and appealing to users.
Unit of Function: Innovation and Technology Consulting Services 
Reporting To: The Unit Head, Innovation and Technology Consulting Services </p>
<p className="text-lg">Interested applicants should apply via <span className="font-bold">recruitment@bfgconsults.com CC. admin@bfgconsults.com</span> on or before <span className="font-bold">11:59pm, 30th March, 2024</span></p>
        </div>
        </div>
        </>
  )
}

export default page
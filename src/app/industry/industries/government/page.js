import Image from 'next/image'
import React from 'react'
import NonGovtImg from "../../../../../public/assets/non-profit-vendor-scaled.jpg";

const page = () => {
  return (
    <div>
      <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
                Government and Non-for-Profit{" "}
              </h3>      <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
        <Image
          src={NonGovtImg}
          alt="govt-img"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
       
      </div>
      <p className="text-[#656565] px-[40px] py-[30px]">In the realm of government and non-for-profit organizations, BFG Global Consulting is dedicated to driving positive change, fostering innovation, and maximizing impact. With a deep understanding of public policy, regulatory frameworks, and community needs, we partner with government agencies, NGOs, and philanthropic organizations to address complex challenges and advance societal goals. From strategic planning and program evaluation to capacity building and stakeholder engagement, our tailored solutions empower clients to enhance transparency, accountability, and effectiveness in their operations. By leveraging data-driven insights and best practices, we help our partners optimize resources, amplify social impact, and build resilient communities for the future. At BFG Global Consulting, we are committed to shaping a brighter tomorrow through purpose-driven collaboration and sustainable solutions</p></div>
  )
}

export default page
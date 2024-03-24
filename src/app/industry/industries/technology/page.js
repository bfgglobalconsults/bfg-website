import Image from 'next/image'
import React from 'react'
import FinTechImg from "../../../../../public/assets/financial-technology.jpg";

const page = () => {
  return (
    <div>
       <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
                Financial Technology{" "}
              </h3>      <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
        <Image
          src={FinTechImg}
          alt="realestate-img"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
       
      </div>
      <p className="text-[#656565] px-[40px] py-[30px]">In the intersection of technology and finance, BFG Global Consulting pioneers innovative solutions that redefine the future of financial services. Leveraging cutting-edge technologies and deep industry expertise, we empower financial institutions, fintech startups, and technology firms to navigate digital transformation, enhance operational efficiency, and drive sustainable growth. From blockchain and AI to cybersecurity and digital banking, our comprehensive suite of services covers the full spectrum of technological advancements reshaping the finance landscape. By blending strategic insights with technical acumen, we help our clients harness the power of technology to streamline processes, deliver superior customer experiences, and stay ahead in an increasingly competitive market. At BFG Global Consulting, we are committed to shaping the next era of finance through innovation, collaboration, and strategic foresight.</p></div>
  )
}

export default page
import Image from 'next/image'
import React from 'react'
import TouristImg from "../../../../../public/assets/hospitality-tourism.jpg";

const page = () => {
  return (
    <>
    <div>
    <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
                Hospitality and Tourism{" "}
              </h3>      <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
        <Image
          src={TouristImg}
          alt="realestate-img"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
       
      </div>
      <p className="text-[#656565] px-[40px] py-[30px]">In the vibrant world of hospitality and tourism, BFG Global Consulting stands as a trusted partner, committed to driving innovation, enhancing guest experiences, and fostering sustainable growth. With a deep understanding of market trends, consumer preferences, and operational challenges, we deliver tailored solutions that empower hotels, resorts, travel agencies, and destination management organizations to thrive in todays dynamic landscape. From strategic planning and revenue optimization to digital transformation and sustainability initiatives, our holistic approach enables clients to adapt to changing market dynamics, seize new opportunities, and create memorable experiences that inspire loyalty and drive success. At BFG Global Consulting, we are dedicated to shaping the future of hospitality and tourism, one strategic partnership at a time.</p></div>
    </>
  )
}

export default page
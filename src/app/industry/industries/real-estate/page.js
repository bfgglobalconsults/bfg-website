import Image from 'next/image'
import React from 'react'
import RealEstateImg from "../../../../../public/assets/real-estate.jpg";

const page = () => {
  return (
    <div>
       <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
                Real Estate{" "}
              </h3>      <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
        <Image
          src={RealEstateImg}
          alt="realestate-img"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
       
      </div>
      <p className="text-[#656565] px-[40px] py-[30px]">In the dynamic realm of real estate, BFG Global Consulting serves as a strategic ally, empowering clients to navigate complexities, capitalize on opportunities, and achieve their investment objectives. With a profound understanding of market dynamics, regulatory landscapes, and emerging trends, we offer tailored solutions that drive value across the real estate spectrum. From market analysis and asset valuation to development strategy and portfolio optimization, our multidisciplinary approach enables clients to make informed decisions, mitigate risks, and maximize returns. Whether its commercial, residential, or mixed-use properties, we leverage our expertise and industry insights to help clients unlock the full potential of their real estate investments, contributing to vibrant communities and sustainable growth.</p></div>
  )
}

export default page
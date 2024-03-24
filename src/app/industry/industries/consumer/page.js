import Image from 'next/image'
import React from 'react'
import ConsumerImg from "../../../../../public/assets/consumer-goods.jpg";

const page = () => {
  return (
    <>
    <div>
    <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
                Consumer and Retail Market{" "}
              </h3>      <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
        <Image
          src={ConsumerImg}
          alt="consumer-img"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
       
      </div>
        <p className="text-[#656565] px-[40px] py-[30px]">
        In the ever-evolving landscape of the consumer and retail market, BFG Global Consulting offers tailored strategies and solutions to navigate complexities, capitalize on emerging trends, and drive sustainable growth. With a keen understanding of consumer behavior, market dynamics, and industry trends, we empower businesses to enhance customer experiences, optimize operations, and stay competitive in an increasingly competitive marketplace. Our expertise spans across the entire value chain, from market research and brand positioning to supply chain optimization and digital transformation, ensuring our clients thrive in todays dynamic consumer-driven economy.
        </p>
    </div>
    </>
  )
}

export default page
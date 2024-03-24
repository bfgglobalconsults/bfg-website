import Image from 'next/image'
import React from 'react'
import FinancialImg from "../../../../../public/assets/financial-service.jpg";

const page = () => {
  return (
    <>
    <div>
    <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
                Financial Services{" "}
              </h3>      <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
        <Image
          src={FinancialImg}
          alt="consumer-img"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
       
      </div>
      <p className="text-[#656565] px-[40px] py-[30px]" >At BFG Global Consulting, we recognize the pivotal role of the financial services industry in driving economic growth and empowering individuals and businesses worldwide. With deep-rooted expertise and a forward-thinking approach, we partner with financial institutions, fintech companies, and other stakeholders to navigate regulatory complexities, harness emerging technologies, and unlock new opportunities. From strategic advisory services to risk management and digital innovation, our comprehensive solutions are tailored to address the evolving needs of the financial services sector. By leveraging data-driven insights and industry best practices, we help our clients adapt, innovate, and thrive in an ever-changing landscape, ensuring sustainable success and lasting impact.</p></div>
    </>
  )
}

export default page
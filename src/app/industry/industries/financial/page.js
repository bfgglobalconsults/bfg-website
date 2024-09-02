import Image from 'next/image'
import React from 'react'
import FinancialImg from "../../../../../public/assets/financial-img.png";
import FinanceImage from "../../../../../public/assets/finance-image.png";

const page = () => {
  return (
    <>
     <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Finance
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Financial Services
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
Empowering futures, navigating finance with expertise          </p>
        </div>
      </div>
      <div className="px-12">
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={FinancialImg}
            alt="consumer-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
              At BFG Global Consulting, we recognize the pivotal role of the financial services industry in driving economic growth & empowering individuals & businesses worldwide. With deep-rooted expertise & a forward-thinking approach, we partner with financial institutions, fintech companies, & other stakeholders to navigate regulatory complexities, harness emerging technologies, & unlock new opportunities. From strategic advisory services to risk management & digital innovation, our comprehensive solutions are tailored to address the evolving needs of the financial services sector. By leveraging data-driven insights & industry best practices, we help our clients adapt, innovate, & thrive in an ever-changing l&scape, ensuring sustainable success & lasting impact.
            </p>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-4 my-8">
            <div className="w-[100%] lg:w-[50%] bg-[#041926] p-10 rounded-lg">
              <div className="my-4">
                <span className="p-3 rounded-3xl bg-white border-2 font-semibold">
                  Areas
                </span>
              </div>
              <h3 className="text-white text-3xl font-semibold">
                Areas where we make a difference through our Financial Services
              </h3>
              <p className="text-white my-2">
                Unlock financial confidence with our expert services, making a meaningful impact in key areas
              </p>
              <div className="w-full">
                <Image src={FinanceImage} alt="it-image" className="w-full" />
              </div>
            </div>
            <div className="w-[100%] lg:w-[50%] flex flex-col gap-10">
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Strategic Advisory Services
                </h4>
                <p className="my-2 text-[#999]">
                  Tailored strategic advisory services to financial institutions, fintech startups, & investment firms, providing insights & guidance on market trends, regulatory changes, & growth strategies.
                </p>
              </div>
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Risk Management Solutions
                </h4>
                <p className="my-2 text-[#999]">
                  Comprehensive risk management solutions, including risk assessment, mitigation strategies, & compliance frameworks, to help financial institutions identify & manage various risks, such as credit risk, market risk, & operational risk.
                </p>
              </div>{" "}
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Digital Transformation Consulting
                </h4>
                <p className="my-2 text-[#999]">
                 Consulting services focused on digital transformation initiatives, including the adoption of innovative technologies such as blockchain, artificial intelligence, & data analytics to enhance operational efficiency, improve clients experiences, & drive innovation.
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
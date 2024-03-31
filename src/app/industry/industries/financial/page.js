import Image from 'next/image'
import React from 'react'
import FinancialImg from "../../../../../public/assets/financial-service.jpg";

const page = () => {
  return (
    <>
    <div>
   
     <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={FinancialImg}
            alt="top-banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Transparent overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h3 className="text-white font-bold text-4xl md:text-3xl lg:text-4xl">
                Financial Services{" "}
            </h3>
            <p className="text-[#ffffff9a] my-2 text-lg lg:text-2xl">
Empowering futures, navigating finance with expertise            </p>
          </div>
        </div>
        <p className="text-[#656565] px-[40px] py-[30px]" >At BFG Global Consulting, we recognize the pivotal role of the financial services industry in driving economic growth and empowering individuals and businesses worldwide. With deep-rooted expertise and a forward-thinking approach, we partner with financial institutions, fintech companies, and other stakeholders to navigate regulatory complexities, harness emerging technologies, and unlock new opportunities. From strategic advisory services to risk management and digital innovation, our comprehensive solutions are tailored to address the evolving needs of the financial services sector. By leveraging data-driven insights and industry best practices, we help our clients adapt, innovate, and thrive in an ever-changing landscape, ensuring sustainable success and lasting impact.</p>
      <div>
          <div className="bg-[#f8f5f5] p-8">
            <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
             Areas where we make a difference through our Financial Services{" "}
            </h3>
            <div className="w-full flex flex-wrap md:justify-center lg:justify-normal gap-8">
              <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="48"
                    height="48"
                    fill="rgba(1,110,248,1)"
                  >
                    <path d="M21 11.6458V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11.6458C2.37764 10.9407 2 10.0144 2 9V3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V9C22 10.0144 21.6224 10.9407 21 11.6458ZM14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9C16 10.1046 16.8954 11 18 11C19.1046 11 20 10.1046 20 9V4H4V9C4 10.1046 4.89543 11 6 11C7.10457 11 8 10.1046 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9Z"></path>
                  </svg>
                </span>
                <h4 className="text-2xl my-2">Strategic Advisory Services</h4>
                <p className="text-[#656565]">
                  Tailored strategic advisory services to financial institutions, fintech startups, and investment firms, providing insights and guidance on market trends, regulatory changes, and growth strategies.
                </p>
              </div>
              <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="48"
                    height="48"
                    fill="rgba(1,110,248,1)"
                  >
                    <path d="M11 2.04935V13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81462 5.94668 2.55107 11 2.04935ZM13 0.542847C18.5535 1.02121 22.9788 5.4465 23.4571 11H13V0.542847Z"></path>
                  </svg>
                </span>
                <h4 className="text-2xl my-2">
                  {" "}
                  Risk Management Solutions
                </h4>
                <p className="text-[#656565]">
                  Comprehensive risk management solutions, including risk assessment, mitigation strategies, and compliance frameworks, to help financial institutions identify and manage various risks, such as credit risk, market risk, and operational risk.
                </p>
              </div>
              <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
                <span>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(1,110,248,1)"><path d="M11 7V4C11 3.44772 11.4477 3 12 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V8C2 7.44772 2.44772 7 3 7H11ZM5 16V18H10V16H5ZM14 16V18H19V16H14ZM14 13V15H19V13H14ZM14 10V12H19V10H14ZM5 13V15H10V13H5Z"></path></svg>
                </span>
                <h4 className="text-2xl my-2">Digital Transformation Consulting </h4>
                <p className="text-[#656565]">
                  Consulting services focused on digital transformation initiatives, including the adoption of innovative technologies such as blockchain, artificial intelligence, and data analytics to enhance operational efficiency, improve customer experiences, and drive innovation.
                </p>
              </div>

              <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
                <span>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(1,110,248,1)"><path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM8.50488 14.0027V16.0027H11.0049V18.0027H13.0049V16.0027H14.0049C15.3856 16.0027 16.5049 14.8835 16.5049 13.5027C16.5049 12.122 15.3856 11.0027 14.0049 11.0027H10.0049C9.72874 11.0027 9.50488 10.7789 9.50488 10.5027C9.50488 10.2266 9.72874 10.0027 10.0049 10.0027H15.5049V8.00275H13.0049V6.00275H11.0049V8.00275H10.0049C8.62417 8.00275 7.50488 9.12203 7.50488 10.5027C7.50488 11.8835 8.62417 13.0027 10.0049 13.0027H14.0049C14.281 13.0027 14.5049 13.2266 14.5049 13.5027C14.5049 13.7789 14.281 14.0027 14.0049 14.0027H8.50488Z"></path></svg>
                </span>
                <h4 className="text-2xl my-2">
                 Wealth Management and Investment Advisory
                </h4>
                <p className="text-[#656565]">
                 Personalized wealth management and investment advisory services for high-net-worth individuals, families, and institutional investors, offering portfolio management, asset allocation, and investment strategy development tailored to clients financial goals and risk tolerance.
                </p>
              </div>

              <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="48"
                    height="48"
                    fill="rgba(1,110,248,1)"
                  >
                    <path d="M20.0834 10.4999L21.2855 11.2212C21.5223 11.3633 21.599 11.6704 21.457 11.9072C21.4147 11.9776 21.3559 12.0365 21.2855 12.0787L12.0001 17.6499L2.71463 12.0787C2.47784 11.9366 2.40106 11.6295 2.54313 11.3927C2.58536 11.3223 2.64425 11.2634 2.71463 11.2212L3.91672 10.4999L12.0001 15.3499L20.0834 10.4999ZM20.0834 15.1999L21.2855 15.9212C21.5223 16.0633 21.599 16.3704 21.457 16.6072C21.4147 16.6776 21.3559 16.7365 21.2855 16.7787L12.5145 22.0412C12.1979 22.2313 11.8022 22.2313 11.4856 22.0412L2.71463 16.7787C2.47784 16.6366 2.40106 16.3295 2.54313 16.0927C2.58536 16.0223 2.64425 15.9634 2.71463 15.9212L3.91672 15.1999L12.0001 20.0499L20.0834 15.1999ZM12.5145 1.30864L21.2855 6.5712C21.5223 6.71327 21.599 7.0204 21.457 7.25719C21.4147 7.32757 21.3559 7.38647 21.2855 7.42869L12.0001 12.9999L2.71463 7.42869C2.47784 7.28662 2.40106 6.97949 2.54313 6.7427C2.58536 6.67232 2.64425 6.61343 2.71463 6.5712L11.4856 1.30864C11.8022 1.11864 12.1979 1.11864 12.5145 1.30864Z"></path>
                  </svg>
                </span>
                <h4 className="text-2xl my-2">Regulatory Compliance Services</h4>
                <p className="text-[#656565]">
                  Regulatory compliance services to help financial institutions navigate complex regulatory requirements, ensure adherence to relevant laws and regulations, and mitigate compliance risks through comprehensive compliance assessments, training programs, and ongoing monitoring.
                </p>
              </div>

              <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="48"
                    height="48"
                    fill="rgba(1,110,248,1)"
                  >
                    <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 15V19H20V15H4ZM11 11V13H13V11H11ZM9 3V5H15V3H9Z"></path>
                  </svg>
                </span>
                <h4 className="text-2xl my-2">
                  Training and Professional Development
                </h4>
                <p className="text-[#656565]">
                  Training and professional development programs for financial professionals, covering topics such as financial analysis, risk management, investment banking, and regulatory compliance to enhance skills, knowledge, and career advancement opportunities within the financial services industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
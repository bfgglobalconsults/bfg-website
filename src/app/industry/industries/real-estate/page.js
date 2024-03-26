import Image from 'next/image'
import React from 'react'
import RealEstateImg from "../../../../../public/assets/real-estate.jpg";

const page = () => {
  return (
    <div>
      
     <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={RealEstateImg}
            alt="top-banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Transparent overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h3 className="text-white font-bold text-4xl md:text-3xl lg:text-4xl">
                Real Estate{" "}
            </h3>
            <p className="text-[#ffffff9a] my-2 text-lg lg:text-2xl">
Unlocking possibilities, building dreams in real estate.            </p>
          </div>
        </div>
      <p className="text-[#656565] px-[40px] py-[30px]">In the dynamic realm of real estate, BFG Global Consulting serves as a strategic ally, empowering clients to navigate complexities, capitalize on opportunities, and achieve their investment objectives. With a profound understanding of market dynamics, regulatory landscapes, and emerging trends, we offer tailored solutions that drive value across the real estate spectrum. From market analysis and asset valuation to development strategy and portfolio optimization, our multidisciplinary approach enables clients to make informed decisions, mitigate risks, and maximize returns. Whether its commercial, residential, or mixed-use properties, we leverage our expertise and industry insights to help clients unlock the full potential of their real estate investments, contributing to vibrant communities and sustainable growth.</p>
    <div>
          <div className="bg-[#f8f5f5] p-8">
            <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
              Our Products{" "}
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
                <h4 className="text-2xl my-2">Market Research and Analysis</h4>
                <p className="text-[#656565]">
                 Comprehensive market research and analysis services to provide insights into local market trends, property values, demographic data, and competitor analysis to inform investment decisions and strategic planning
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
Asset Valuation and Appraisal                </h4>
                <p className="text-[#656565]">
                  Property valuation and appraisal services for real estate investors, lenders, and developers to determine the fair market value of properties for acquisition, financing, investment analysis, and financial reporting purposes.
                </p>
              </div>
              <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(1,110,248,1)"><path d="M2 13H8V21H2V13ZM9 3H15V21H9V3ZM16 8H22V21H16V8Z"></path></svg>
                </span>
                <h4 className="text-2xl my-2">Investment Advisory Services</h4>
                <p className="text-[#656565]">
                 Personalized investment advisory services for real estate investors and property owners, offering portfolio analysis, asset allocation strategies, and investment recommendations to maximize returns and mitigate risks.
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
                    <path d="M16.8 19L14 22.5L11.2 19H6C5.44772 19 5 18.5523 5 18V7.10256C5 6.55028 5.44772 6.10256 6 6.10256H22C22.5523 6.10256 23 6.55028 23 7.10256V18C23 18.5523 22.5523 19 22 19H16.8ZM2 2H19V4H3V15H1V3C1 2.44772 1.44772 2 2 2Z"></path>
                  </svg>{" "}
                </span>
                <h4 className="text-2xl my-2">
                  Transaction Advisory Services
                </h4>
                <p className="text-[#656565]">
                  Transaction advisory services for real estate transactions, including due diligence, financial analysis, negotiation support, and transaction structuring for acquisitions, dispositions, mergers, and joint ventures.
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
                <h4 className="text-2xl my-2">Development Consulting</h4>
                <p className="text-[#656565]">
                  Consulting services for real estate developers, offering guidance and support throughout the development lifecycle, including site selection, feasibility studies, project planning, design coordination, and construction management.
                </p>
              </div>

              <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(1,110,248,1)"><path d="M21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM8 11V13H11V11H8ZM8 7V9H11V7H8ZM8 15V17H11V15H8ZM13 15V17H16V15H13ZM13 11V13H16V11H13ZM13 7V9H16V7H13Z"></path></svg>
                </span>
                <h4 className="text-2xl my-2">
                  Property Management Solutions
                </h4>
                <p className="text-[#656565]">
                  Comprehensive property management solutions for residential, commercial, and mixed-use properties, including tenant screening, lease administration, maintenance coordination, financial reporting, and asset optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page
import Image from 'next/image'
import React from 'react'
import ConsumerImg from "../../../../../public/assets/consumers.jpg";

const page = () => {
  return (
    <>
    <div>
   
     <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
        <Image
          src={ConsumerImg}
          alt="top-banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Transparent overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h3 className="text-white font-bold text-4xl md:text-3xl lg:text-4xl">
             Consumer and Retail Market
          </h3>
          <p className="text-[#ffffff9a] my-2 text-lg lg:text-2xl">
        Elevating experiences, driving growth in consumer and retail
          </p>
        </div>
      </div>
        <p className="text-[#656565] px-[40px] py-[30px] text-lg">
        In the ever-evolving landscape of the consumer and retail market, BFG Global Consulting offers tailored strategies and solutions to navigate complexities, capitalize on emerging trends, and drive sustainable growth. With a keen understanding of consumer behavior, market dynamics, and industry trends, we empower businesses to enhance customer experiences, optimize operations, and stay competitive in an increasingly competitive marketplace. Our expertise spans across the entire value chain, from market research and brand positioning to supply chain optimization and digital transformation, ensuring our clients thrive in todays dynamic consumer-driven economy.
        </p>
        <div>
            <div className="bg-[#f8f5f5] p-8">
              <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
                Areas where we make a difference in the Retail Market{" "}
              </h3>
              <div className="w-full flex flex-wrap md:justify-center lg:justify-normal gap-8">
                <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
                  <span>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(1,110,248,1)"><path d="M21 11.6458V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11.6458C2.37764 10.9407 2 10.0144 2 9V3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V9C22 10.0144 21.6224 10.9407 21 11.6458ZM14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9C16 10.1046 16.8954 11 18 11C19.1046 11 20 10.1046 20 9V4H4V9C4 10.1046 4.89543 11 6 11C7.10457 11 8 10.1046 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9Z"></path></svg>
                  </span>
                  <h4 className="text-2xl my-2">Market Insights and Analysis</h4>
                  <p className="text-[#656565]">
                    Our team of experts conducts comprehensive market research and analysis to uncover valuable insights that drive informed decision-making. By examining consumer preferences, purchasing patterns, and competitor strategies, we help our clients identify opportunities for growth and differentiation.
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
                    Brand Positioning and Strategy
                  </h4>
                  <p className="text-[#656565]">
                    In todays crowded marketplace, establishing a strong brand identity is essential for success. We work closely with our clients to develop compelling brand strategies that resonate with their target audience and set them apart from competitors. From brand positioning to messaging and visual identity, we help build brands that leave a lasting impression.
                  </p>
                </div>
                <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(1,110,248,1)"><path d="M6.00488 9H19.9433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V9ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>
                  </span>
                  <h4 className="text-2xl my-2">
                    E-commerce and Digital Transformation
                  </h4>
                  <p className="text-[#656565]">
                    The rise of e-commerce has revolutionized the way consumers shop, presenting both challenges and opportunities for retailers. Our digital experts assist clients in developing robust e-commerce strategies, optimizing online platforms, and harnessing the power of digital marketing to drive traffic and conversions.
                  </p>
                </div>

                <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
                  <span>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(1,110,248,1)"><path d="M16.8 19L14 22.5L11.2 19H6C5.44772 19 5 18.5523 5 18V7.10256C5 6.55028 5.44772 6.10256 6 6.10256H22C22.5523 6.10256 23 6.55028 23 7.10256V18C23 18.5523 22.5523 19 22 19H16.8ZM2 2H19V4H3V15H1V3C1 2.44772 1.44772 2 2 2Z"></path></svg>                  </span>
                  <h4 className="text-2xl my-2">
                    Customer Experience Enhancement
                  </h4>
                  <p className="text-[#656565]">
                    Delivering exceptional customer experiences is crucial for building loyalty and driving repeat business. We help retailers optimize every touchpoint of the customer journey, from online interactions to in-store experiences, to create seamless and memorable experiences that keep customers coming back
                  </p>
                </div>

                <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
                  <span>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(1,110,248,1)"><path d="M20.0834 10.4999L21.2855 11.2212C21.5223 11.3633 21.599 11.6704 21.457 11.9072C21.4147 11.9776 21.3559 12.0365 21.2855 12.0787L12.0001 17.6499L2.71463 12.0787C2.47784 11.9366 2.40106 11.6295 2.54313 11.3927C2.58536 11.3223 2.64425 11.2634 2.71463 11.2212L3.91672 10.4999L12.0001 15.3499L20.0834 10.4999ZM20.0834 15.1999L21.2855 15.9212C21.5223 16.0633 21.599 16.3704 21.457 16.6072C21.4147 16.6776 21.3559 16.7365 21.2855 16.7787L12.5145 22.0412C12.1979 22.2313 11.8022 22.2313 11.4856 22.0412L2.71463 16.7787C2.47784 16.6366 2.40106 16.3295 2.54313 16.0927C2.58536 16.0223 2.64425 15.9634 2.71463 15.9212L3.91672 15.1999L12.0001 20.0499L20.0834 15.1999ZM12.5145 1.30864L21.2855 6.5712C21.5223 6.71327 21.599 7.0204 21.457 7.25719C21.4147 7.32757 21.3559 7.38647 21.2855 7.42869L12.0001 12.9999L2.71463 7.42869C2.47784 7.28662 2.40106 6.97949 2.54313 6.7427C2.58536 6.67232 2.64425 6.61343 2.71463 6.5712L11.4856 1.30864C11.8022 1.11864 12.1979 1.11864 12.5145 1.30864Z"></path></svg>
                  </span>
                  <h4 className="text-2xl my-2">Supply Chain Optimization</h4>
                  <p className="text-[#656565]">
                    Efficient supply chain management is critical for ensuring product availability, reducing costs, and meeting customer demand. Our supply chain experts work with clients to streamline processes, enhance visibility, and mitigate risks, enabling them to operate more effectively and adapt to changing market conditions.
                  </p>
                </div>

                <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
                  <span>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(1,110,248,1)"><path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 15V19H20V15H4ZM11 11V13H13V11H11ZM9 3V5H15V3H9Z"></path></svg>
                  </span>
                  <h4 className="text-2xl my-2">Sustainability and Corporate Responsibility</h4>
                  <p className="text-[#656565]">
                    In an era of increased awareness about environmental and social issues, consumers are increasingly demanding sustainable and socially responsible products and practices. We help our clients develop and implement sustainability strategies that align with their values, reduce environmental impact, and enhance brand reputation.
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
import React from "react";
import Image from "next/image";
// import Banner from "../../../../public/assets/business-strategy.jpg";

import TopBanner from "../../../../public/assets/business-strategy-banner.jpg";

import BusinessImage from "../../../../public/assets/business-image.png";

import ServiceImage1 from "../../../../public/assets/service-image1.png";
import ServiceImage2 from "../../../../public/assets/service-image2.png";

const page = () => {
  return (
    <>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Strategy
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Business Strategy & 
Operations
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Streamline your operations, optimize your strategy, & achieve your goals
          </p>
        </div>
      </div>
      <div className="px-12">
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={TopBanner}
            alt="top-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
             Business strategy & operations consulting is a unit of our practice, which involves helping organisations improve their overall performance by identifying & implementing effective business strategies & streamlining operational processes. Using the latest deep industry insights, our combined team of business strategists, growth hackers, project managers, & quality control managers helps businesses of every size prosper by creating impactful solutions tailored to their unique needs today & in the future. The goal of this service is to help businesses become more efficient, profitable, & competitive in their respective industries.
            </p>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-4 my-8">
            <div className="w-[100%] lg:w-[50%] bg-[#041926] p-10 rounded-lg">
              <div className="my-4">
                <span className="p-3 rounded-3xl bg-white border-2 font-semibold">
                  Focus Area
                </span>
              </div>
              <h3 className="text-white text-3xl font-semibold">
               Focus areas of our  Business Strategy & Operations Consulting Services
              </h3>
              <p className="text-white my-2">
               Drive business success with our strategic expertise, leveraging a systematic approach to optimize performance, efficiency, & innovation across your organization, from strategy to execution.
              </p>
              <div className="w-full">
                <Image
                  src={BusinessImage}
                  alt="business-image"
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-[100%] lg:w-[50%] flex flex-col gap-10">
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Business Formation
                </h4>
                <p className="my-2 text-[#999]">
                  We take the stress off our clients in the process of choosing a business structure & registering their business with the appropriate government agency. Common business structures often include sole proprietorships, partnerships, limited liability companies (LLCs), & corporations.
                </p>
              </div>
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                 Business strategy development & implementation
                </h4>
                <p className="my-2 text-[#999]">
                  This includes market research & analysis, competitive analysis, & the development of a comprehensive business plan for your business.
                </p>
              </div>{" "}
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Operations assessment & optimization
                </h4>
                <p className="my-2 text-[#999]">
                  This covers our single-mindedness in reviewing & analysing current operations to identify areas for improvement & implementing changes to increase efficiency & reduce costs for organisations.
                </p>
              </div>{" "}
            </div>
          </div>

          <hr />

          

          <div className="my-8">
            <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
              Benefits
            </span>
            <div>
              <h3 className="text-[#333] text-3xl my-8 font-semibold">
                Service Benefits
              </h3>
              <p className="text-[#999] text-xl my-2">
               Experience how our tailored business strategies & operational expertise deliver transformative outcomes, driving long-term success & sustainable growth
              </p>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-10">
              <div className="w-[100%] lg:w-[30%] h-[280px]">
                <Image
                  src={ServiceImage1}
                  alt="service-image1"
                  className="w-full h-full"
                />
              </div>
              <div className="w-[0%] h-[0%] lg:w-[70%] lg:h-[280px]">
                <Image
                  src={ServiceImage2}
                  alt="service-image2"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row flex-wrap gap-10 my-6">
              <div className="w-[100%] lg:w-[45%] flex flex-col lg:flex-row items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(255,255,255,1)"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
                  </div>
                </div>
                <div className="w-[100%] lg:w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Increased Efficiency & 
Productivity
                  </h4>
                  <p className="text-[#999]">
                    By streamlining operations & identifying areas for improvement, our business strategy & operations service helps organisations to increase their overall efficiency & productivity.
                  </p>
                </div>
              </div>
              {/* second item */}
              <div className="w-[100%] lg:w-[45%] flex flex-col lg:flex-row items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(255,255,255,1)"><path d="M17.0047 16.0027H19.0047V4.00275H9.00468V6.00275H17.0047V16.0027ZM17.0047 18.0027V21.0019C17.0047 21.5546 16.5547 22.0027 15.9978 22.0027H4.01154C3.45548 22.0027 3.00488 21.5581 3.00488 21.0019L3.00748 7.00362C3.00759 6.45085 3.45752 6.00275 4.0143 6.00275H7.00468V3.00275C7.00468 2.45046 7.4524 2.00275 8.00468 2.00275H20.0047C20.557 2.00275 21.0047 2.45046 21.0047 3.00275V17.0027C21.0047 17.555 20.557 18.0027 20.0047 18.0027H17.0047ZM7.00468 16.0027V18.0027H9.00468V19.0027H11.0047V18.0027H11.5047C12.8854 18.0027 14.0047 16.8835 14.0047 15.5027C14.0047 14.122 12.8854 13.0027 11.5047 13.0027H8.50468C8.22854 13.0027 8.00468 12.7789 8.00468 12.5027C8.00468 12.2266 8.22854 12.0027 8.50468 12.0027H13.0047V10.0027H11.0047V9.00275H9.00468V10.0027H8.50468C7.12397 10.0027 6.00468 11.122 6.00468 12.5027C6.00468 13.8835 7.12397 15.0027 8.50468 15.0027H11.5047C11.7808 15.0027 12.0047 15.2266 12.0047 15.5027C12.0047 15.7789 11.7808 16.0027 11.5047 16.0027H7.00468Z"></path></svg>
                  </div>
                </div>
                <div className="w-[100%] lg:w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Cost Savings
                  </h4>
                  <p className="text-[#999]">
                   Identifying & implementing cost-saving measures can help your organisation reduce expenses & increase its bottom line.
                  </p>
                </div>
              </div>
              {/* third item */}
              <div className="w-[100%] lg:w-[45%] flex flex-col lg:flex-row items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(255,255,255,1)"><path d="M8.5 2C6.567 2 5 3.567 5 5.5C5 5.68016 5.01364 5.85714 5.03993 6.02997C3.32436 6.25523 2 7.72295 2 9.5C2 10.4793 2.40223 11.3647 3.05051 12C2.40223 12.6353 2 13.5207 2 14.5C2 15.9018 2.82359 17.1104 4.01353 17.6693C4.00457 17.7785 4 17.8888 4 18C4 20.2091 5.79086 22 8 22C9.19469 22 10.2671 21.4762 11 20.6458V3.05051C10.3647 2.40223 9.47934 2 8.5 2ZM13 3.05051V20.6458C13.7329 21.4762 14.8053 22 16 22C18.2091 22 20 20.2091 20 18C20 17.8888 19.9954 17.7785 19.9865 17.6693C21.1764 17.1104 22 15.9018 22 14.5C22 13.5207 21.5978 12.6353 20.9495 12C21.5978 11.3647 22 10.4793 22 9.5C22 7.72295 20.6756 6.25523 18.9601 6.02997C18.9864 5.85714 19 5.68016 19 5.5C19 3.567 17.433 2 15.5 2C14.5207 2 13.6353 2.40223 13 3.05051Z"></path></svg>
                  </div>
                </div>
                <div className="w-[100%] lg:w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Improved Decision-Making
                  </h4>
                  <p className="text-[#999]">
                    Access to accurate, up-to-date information & expert analysis helps our clients make more informed & effective decisions for their businesses.
                  </p>
                </div>
              </div>
              {/* fourth item */}
              <div className="w-[100%] lg:w-[45%] flex flex-col lg:flex-row items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(255,255,255,1)"><path d="M14 14.252V22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path></svg>
                  </div>
                </div>
                <div className="w-[100%] lg:w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Enhanced Competitive Advantage
                  </h4>
                  <p className="text-[#999]">
                    Identifying & leveraging competitive advantages helps our clients gain an edge over their rivals in the marketplace.
                  </p>{" "}
                </div>
              </div>
              {/* fifth item */}
              <div className="w-[100%] lg:w-[45%] flex flex-col lg:flex-row items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(255,255,255,1)"><path d="M7.94101 18C7.64391 16.7274 6.30412 15.6857 5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.6944 15.687 16.3558 16.7276 16.059 18H7.94101ZM16 20V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V20H16ZM13 10.0048V6L8.5 12.0048H11V16.0048L15.5 10.0048H13Z"></path></svg>
                  </div>
                </div>
                <div className="w-[100%] lg:w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Greater Scalability
                  </h4>
                  <p className="text-[#999]">
Developing scalable systems & processes, also helps leaders & managers of organisations prepare for & manage growth in their business.                  </p>{" "}
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default page;

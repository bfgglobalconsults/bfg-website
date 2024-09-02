import React from "react";
import Image from "next/image";
import Banner from "../../../../public/assets/information-technology.jpg";
import Accordion from "@/components/Accordion";
import TopBanner from "../../../../public/assets/it-banner.jpeg";

import ItImage from "../../../../public/assets/it-image.png";

import ServiceImage1 from "../../../../public/assets/service-image1.png";
import ServiceImage2 from "../../../../public/assets/service-image2.png";

const page = () => {
  return (
    <>
       <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Technology
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Innovation & Technology
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
           Innovative solutions, secure technology, & unparalleled support for your business
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
             BFG Technology solutions is a specialised service deployed to help organisations optimize their use of technology to achieve their business objectives. Through this service, we provide a wide range of IT solutions, including, business web presence, cloud computing, software development, & cybersecurity. The service is delivered by our innovation & technology team, who are experts in their field & have the technical skills & knowledge to provide effective solutions. The goal of this service to clients is to improve their organisations efficiency, information security, & competitiveness by leveraging the latest technology.
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
Focus areas of our  Innovation & Technology Consulting Services              </h3>
              <p className="text-white my-2">
                Experience how our robust IT solutions & expert technical support deliver seamless technology integration, ensuring your systems reliability, security, & optimal performance from infrastructure to application.
              </p>
              <div className="w-full">
                <Image
                  src={ItImage}
                  alt="it-image"
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-[100%] lg:w-[50%] flex flex-col gap-10">
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Software Designing & Development
                </h4>
                <p className="my-2 text-[#999]">
                 We manage the design & development of customised IT solutions that are tailored to the specific needs of an organisation & or business.
                </p>
              </div>
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  IT Risk Assessment & Disaster Recovery
                </h4>
                <p className="my-2 text-[#999]">
                  This scope of service includes the development & implementation of plans & procedures that organisations can use to quickly & effectively recover from IT-related disruptions, such as natural disasters, power outages or cyber-attacks.
                </p>
              </div>{" "}
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Technical Support
                </h4>
                <p className="my-2 text-[#999]">
                  This scope of service involves assisting employees & other users of an organisations IT systems. This can include troubleshooting & resolving technical issues, as well as providing advice & guidance on the use of specific software or hardware.
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
                Unlock the full potential of your technology with our expert IT services, delivering seamless operations, enhanced performance, & sustainable solutions that drive lasting value & success.
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="w-[100%] lg:w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Improved Employee Performance
                  </h4>
                  <p className="text-[#999]">
                    By providing employees with the knowledge, skills, &
                    abilities they need to succeed in their roles, this solution
                    helps organisations improve employee performance &
                    productivity.{" "}
                  </p>
                </div>
              </div>
              {/* second item */}
              <div className="w-[100%] lg:w-[45%] flex flex-col lg:flex-row items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(255,255,255,1)"><path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 7C10.8954 7 10 7.89543 10 9C10 9.74025 10.4022 10.3866 10.9999 10.7324L11 15H13L13.0011 10.7318C13.5983 10.3858 14 9.73984 14 9C14 7.89543 13.1046 7 12 7Z"></path></svg>
                  </div>
                </div>
                <div className="w-[100%] lg:w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Enhanced Data Security
                  </h4>
                  <p className="text-[#999]">
                   IT services help organisations protect their IT systems & data from unauthorized access & breaches by implementing security measures such as firewalls, intrusion detection systems, & regular security audits.
                  </p>
                </div>
              </div>
              {/* third item */}
              <div className="w-[100%] lg:w-[45%] flex flex-col lg:flex-row items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(255,255,255,1)"><path d="M21 9.5V12.5C21 14.9853 16.9706 17 12 17C7.02944 17 3 14.9853 3 12.5V9.5C3 11.9853 7.02944 14 12 14C16.9706 14 21 11.9853 21 9.5ZM3 14.5C3 16.9853 7.02944 19 12 19C16.9706 19 21 16.9853 21 14.5V17.5C21 19.9853 16.9706 22 12 22C7.02944 22 3 19.9853 3 17.5V14.5ZM12 12C7.02944 12 3 9.98528 3 7.5C3 5.01472 7.02944 3 12 3C16.9706 3 21 5.01472 21 7.5C21 9.98528 16.9706 12 12 12Z"></path></svg>
                  </div>
                </div>
                <div className="w-[100%] lg:w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Better Data Management
                  </h4>
                  <p className="text-[#999]">
                   It helps organisations manage & protect their data more effectively by providing solutions such as data storage, backup, & recovery.
                  </p>
                </div>
              </div>
              {/* fourth item */}
              <div className="w-[100%] lg:w-[45%] flex flex-col lg:flex-row items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M14 14.252V22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="w-[100%] lg:w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Increased Flexibility & Scalability
                  </h4>
                  <p className="text-[#999]">
                    Organisations adapt to changing business conditions & grow their operations by providing scalable & flexible solutions that can be easily modified & exp&ed as needed.
                  </p>{" "}
                </div>
              </div>
              {/* fifth item */}
              <div className="w-[100%] lg:w-[45%] flex flex-col lg:flex-row items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M7.94101 18C7.64391 16.7274 6.30412 15.6857 5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.6944 15.687 16.3558 16.7276 16.059 18H7.94101ZM16 20V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V20H16ZM13 10.0048V6L8.5 12.0048H11V16.0048L15.5 10.0048H13Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="w-[100%] lg:w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Access to Expertise & Resources
                  </h4>
                  <p className="text-[#999]">
                   Our IT solutions provide organisations with access to experts & resources that they might not otherwise have, such as specialised software, & cybersecurity professionals.
                  </p>{" "}
                </div>
              </div>
              {/* sixth item */}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

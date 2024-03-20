import React from "react";
import ManagingDirector from "../../../public/assets/festus-bello-md.jpg";
import HeadGrowth from "../../../public/assets/moses-sunday.jpg";
import HeadBusiness from "../../../public/assets/ifeoma.jpg";
import HeadResearch from "../../../public/assets/kenneth.jpg";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div>
        <div className="py-[40px] px-[40px]">
          <h3 className="my-4 flex justify-center text-lg font-bold">
            <span className="p-2 text-2xl lg:text-[36px] text-[#016EF8] rounded-xl">
              Our Team
            </span>
          </h3>
          <p className="text-2xl font-semibold text-center my-2">Celebrating Diversity, Driving Excellence: Meet Our Team</p>
          <p className="text-xl text-[#656565] text-justify mx-8"> Our strength lies in our diverse and dynamic team. From seasoned industry veterans to fresh perspectives, we unite under a shared commitment to excellence. With a passion for innovation and a dedication to client success, each member brings a unique set of skills and experiences to the table.</p>
          <div className="w-full flex flex-wrap justify-center gap-4 my-4">
            <div className="w-[100%] md:w-[70%] lg:w-[30%] border-2 rounded-md shadow-xl p-4">
              <div className="w-[150px] h-[150px] mx-auto">
                <Image
                  src={ManagingDirector}
                  alt="managing-director"
                  className="w-full h-full object-fit rounded-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold my-2">Festus Bello</h3>
                <p className="text-xl text-gray-500">Managing Director / CEO</p>
                <div className="w-full flex gap-2 justify-center my-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(107,114,128,1)"
                    >
                      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                    </svg>
                  </span>
                  <span className="text-gray-500">
                    festus.bello@bfgconsults.com
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[70%] lg:w-[30%] border-2 rounded-md shadow-xl p-4">
              <div className="w-[150px] h-[150px] mx-auto">
                <Image
                  src={HeadGrowth}
                  alt="head-growth"
                  className="w-full h-full object-fit rounded-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold my-2">Sunday Moses</h3>
                <p className="text-xl text-gray-500">
                  Head of Growth and Development
                </p>
                <div className="w-full flex gap-2 justify-center my-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(107,114,128,1)"
                    >
                      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                    </svg>
                  </span>
                  <span className="text-gray-500">
                    sunday.moses@bfgconsults.com
                  </span>
                </div>
              </div>
            </div>{" "}
            <div className="w-[100%] md:w-[70%] lg:w-[30%] border-2 rounded-md shadow-xl p-4">
                <div className="w-[150px] h-[150px] mx-auto">
                  <Image
                    src={HeadBusiness}
                    alt="managing-director"
                    className="w-full h-full object-fit rounded-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold my-2">
                    Ifeoma Ezeamama
                  </h3>
                  <p className="text-xl text-gray-500">
                    Associate, Business Strategy and Operations
                  </p>
                  <div className="w-full flex gap-2 justify-center my-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(107,114,128,1)"
                      >
                        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500">
                      ifeoma@bfgconsults.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[100%] md:w-[70%] lg:w-[30%] border-2 rounded-md shadow-xl p-4">
                <div className="w-[150px] h-[150px] mx-auto">
                  <Image
                    src={HeadResearch}
                    alt="head-research"
                    className="w-full h-full object-fit rounded-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold my-2">
                    Kenneth Idanwekhai
                  </h3>
                  <p className="text-xl text-gray-500">
                    Associate, Research, Data and Analytics
                  </p>
                  <div className="w-full flex gap-2 justify-center my-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(107,114,128,1)"
                      >
                        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500">
                      kenneth.Idanwekhai@bfgconsults.com
                    </span>
                  </div>
                </div>
              </div>            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

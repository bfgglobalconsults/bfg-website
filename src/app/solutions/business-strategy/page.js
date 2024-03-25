import React from "react";
import Image from "next/image";
import Banner from "../../../../public/assets/business-strategy.jpg";
import HeadGrowth from "../../../../public/assets/moses-sunday.jpg";
import HeadBusiness from "../../../../public/assets/ifeoma.jpg";
import MapBanner from "../../../../public/assets/map-banner.jpg";
import Accordion from "@/components/Accordion";
import BusinessStrategyHead from "../../../../public/assets/ifeoma.jpg";
import TopBanner from "../../../../public/assets/business-strategy-banner.jpg";
import Productivity from "../../../../public/assets/productivity.jpeg";
import Decision from "../../../../public/assets/decision making.jpg";
import Cost from "../../../../public/assets/cost-savings.jpg";
import Competitive from "../../../../public/assets/cost-savings.jpg";
import Scalability from "../../../../public/assets/greater-scalability.png";

const page = () => {
  return (
    <>
      {/* start */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
        <Image
          src={TopBanner}
          alt="top-banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Transparent overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h3 className="text-white font-bold text-4xl md:text-3xl lg:text-4xl">
            Business Strategy and Operations
          </h3>
          <p className="text-[#ffffff9a] my-2 text-lg lg:text-2xl">
            Streamline your operations, optimize your strategy, and achieve your
            goals
          </p>
        </div>
      </div>
      <div className="py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
              Business strategy and operations consulting is a unit of our
              practice, which involves helping organisations improve their
              overall performance by identifying and implementing effective
              business strategies and streamlining operational processes. Using
              the latest deep industry insights, our combined team of business
              strategists, growth hackers, project managers, and quality control
              managers helps businesses of every size prosper by creating
              impactful solutions tailored to their unique needs today and in
              the future. The goal of this service is to help businesses become
              more efficient, profitable, and competitive in their respective
              industries.
            </p>
          </div>

          <div>
            <div className="bg-[#f8f5f5] p-8">
              <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
                Focus areas of our Business Strategy and Operations{" "}
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
                      <path d="M19.2914 5.99994H20.0002C20.5525 5.99994 21.0002 6.44766 21.0002 6.99994V13.9999C21.0002 14.5522 20.5525 14.9999 20.0002 14.9999H18.0002L13.8319 9.16427C13.3345 8.46797 12.4493 8.16522 11.6297 8.41109L9.14444 9.15668C8.43971 9.3681 7.6758 9.17551 7.15553 8.65524L6.86277 8.36247C6.41655 7.91626 6.49011 7.17336 7.01517 6.82332L12.4162 3.22262C13.0752 2.78333 13.9312 2.77422 14.5994 3.1994L18.7546 5.8436C18.915 5.94571 19.1013 5.99994 19.2914 5.99994ZM5.02708 14.2947L3.41132 15.7085C2.93991 16.1209 2.95945 16.8603 3.45201 17.2474L8.59277 21.2865C9.07284 21.6637 9.77592 21.5264 10.0788 20.9963L10.7827 19.7645C11.2127 19.012 11.1091 18.0682 10.5261 17.4269L7.82397 14.4545C7.09091 13.6481 5.84722 13.5771 5.02708 14.2947ZM7.04557 5H3C2.44772 5 2 5.44772 2 6V13.5158C2 13.9242 2.12475 14.3173 2.35019 14.6464C2.3741 14.6238 2.39856 14.6015 2.42357 14.5796L4.03933 13.1658C5.47457 11.91 7.65103 12.0343 8.93388 13.4455L11.6361 16.4179C12.6563 17.5401 12.8376 19.1918 12.0851 20.5087L11.4308 21.6538C11.9937 21.8671 12.635 21.819 13.169 21.4986L17.5782 18.8531C18.0786 18.5528 18.2166 17.8896 17.8776 17.4146L12.6109 10.0361C12.4865 9.86205 12.2652 9.78636 12.0603 9.84783L9.57505 10.5934C8.34176 10.9634 7.00492 10.6264 6.09446 9.7159L5.80169 9.42313C4.68615 8.30759 4.87005 6.45035 6.18271 5.57524L7.04557 5Z"></path>
                    </svg>
                  </span>
                  <h4 className="text-2xl my-2">Business Formation</h4>
                  <p className="text-[#656565]">
                    {" "}
                    We take the stress off our clients in the process of
                    choosing a business structure and registering their business
                    with the appropriate government agency. Common business
                    structures often include sole proprietorships, partnerships,
                    limited liability companies (LLCs), and corporations.
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
                    Business strategy development and implementation
                  </h4>
                  <p className="text-[#656565]">
                    This includes market research and analysis, competitive
                    analysis, and the development of a comprehensive business
                    plan for your business.
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
                      <path d="M21 9V20.9925C21 21.5511 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.44694 2 3.99826 2H14V8C14 8.55228 14.4477 9 15 9H21ZM21 7H16V2.00318L21 7ZM8 7V9H11V7H8ZM8 11V13H16V11H8ZM8 15V17H16V15H8Z"></path>
                    </svg>{" "}
                  </span>
                  <h4 className="text-2xl my-2">
                    Operations assessment and optimisation
                  </h4>
                  <p className="text-[#656565]">
                    This covers our single-mindedness in reviewing and analysing
                    current operations to identify areas for improvement and
                    implementing changes to increase efficiency and reduce costs
                    for organisations.
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
                      <path d="M9 13V16H15V13H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V13H9ZM11 11H13V14H11V11ZM7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V11H15V9H9V11H2V6C2 5.44772 2.44772 5 3 5H7ZM9 3V5H15V3H9Z"></path>
                    </svg>
                  </span>
                  <h4 className="text-2xl my-2">
                    Organisational design and restructuring
                  </h4>
                  <p className="text-[#656565]">
                    This include reviewing your current organisational structure
                    and making changes to improve alignment with business goals
                    and objectives.
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
                      <path d="M9.3349 11.5023L11.5049 11.5028C13.9902 11.5028 16.0049 13.5175 16.0049 16.0028H9.00388L9.00488 17.0028L17.0049 17.002V16.0028C17.0049 14.9204 16.6867 13.8997 16.1188 13.002L19.0049 13.0028C20.9972 13.0028 22.7173 14.1681 23.521 15.8542C21.1562 18.9748 17.3268 21.0028 13.0049 21.0028C10.2436 21.0028 7.90445 20.4122 6.00456 19.378L6.00592 10.0738C7.25147 10.2522 8.39122 10.7585 9.3349 11.5023ZM5.00488 19.0028C5.00488 19.5551 4.55717 20.0028 4.00488 20.0028H2.00488C1.4526 20.0028 1.00488 19.5551 1.00488 19.0028V10.0028C1.00488 9.45052 1.4526 9.00281 2.00488 9.00281H4.00488C4.55717 9.00281 5.00488 9.45052 5.00488 10.0028V19.0028ZM18.0049 5.00281C19.6617 5.00281 21.0049 6.34595 21.0049 8.00281C21.0049 9.65966 19.6617 11.0028 18.0049 11.0028C16.348 11.0028 15.0049 9.65966 15.0049 8.00281C15.0049 6.34595 16.348 5.00281 18.0049 5.00281ZM11.0049 2.00281C12.6617 2.00281 14.0049 3.34595 14.0049 5.00281C14.0049 6.65966 12.6617 8.00281 11.0049 8.00281C9.34803 8.00281 8.00488 6.65966 8.00488 5.00281C8.00488 3.34595 9.34803 2.00281 11.0049 2.00281Z"></path>
                    </svg>
                  </span>
                  <h4 className="text-2xl my-2">Performance management</h4>
                  <p className="text-[#656565]">
                    We accelerate business decisions through the implementation
                    of systems and processes for monitoring and measuring
                    performance, as well as providing guidance and support for
                    achieving performance goals in your business.
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
                      <path d="M4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2ZM7 12V14H9V12H7ZM7 16V18H9V16H7ZM11 12V14H13V12H11ZM11 16V18H13V16H11ZM15 12V18H17V12H15ZM7 6V10H17V6H7Z"></path>
                    </svg>
                  </span>
                  <h4 className="text-2xl my-2">Change management</h4>
                  <p className="text-[#656565]">
                    This includes planning and executing changes to systems,
                    processes, and organisational structure in a way that
                    minimise disruption and maximise benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[#016EF8] text-4xl text-center my-4">
              Service Benefits
            </h3>
            <div>
              <div>
                <div className="w-full flex flex-wrap md:justify-center lg:justify-normal gap-6">
                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={Productivity}
                          alt="productivity"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Increased efficiency and productivity
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          By streamlining operations and identifying areas for
                          improvement, our business strategy and operations
                          service helps organisations to increase their overall
                          efficiency and productivity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={Cost}
                          alt="production-stats"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Cost savings{" "}
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          Identifying and implementing cost-saving measures can
                          help your organisation reduce expenses and increase
                          its bottom line.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={Decision}
                          alt="marketing-stats"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Improved decision-making{" "}
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          Access to accurate, up-to-date information and expert
                          analysis helps our clients make more informed and
                          effective decisions for their businesses.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={Competitive}
                          alt="competitive"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Enhanced competitive advantage
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          Identifying and leveraging competitive advantages
                          helps our clients gain an edge over their rivals in
                          the marketplace.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={Scalability}
                          alt="scalability"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Greater scalability{" "}
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          Developing scalable systems and processes, also helps
                          leaders and managers of organisations prepare for and
                          manage growth in their business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-8">
            <h3 class="text-[#016EF8] text-4xl my-4 text-center">
              Connect With Us: Empowering Success
            </h3>
            <p class="text-xl font-semibold my-2 text-center">
              Strategize. Optimize. Thrive.
            </p>
            <p class="text-xl font-semibold my-2 text-center">
              Explore Business Strategy Expertise
            </p>
            <p className="text-2xl text-[#016EF8] text-center my-2 font-semibold">
              Get in touch
            </p>

            <div className="w-full flex gap-4 flex-wrap justify-center">
              {/* <div className="w-[30%] border-2 rounded-md border-gray-400 p-4">
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
                <div className="flex gap-2 justify-center my-2"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(107,114,128,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg></span><span className="text-gray-500">festus.bello@bfgconsults.com</span></div>
                </div>
              </div> */}

              <div className="border-2 rounded-md border-gray-400 p-4">
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
                  <div className="flex gap-2 justify-center my-2">
                    <a
                      href="mailto:sunday.moses@bfgconsults.com"
                      title="sunday.moses@bfgconsults.com"
                    >
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
                    </a>
                  
                    <a
                      href="https://www.linkedin.com/in/sunday-moses-10b49314a/"
                      target="_blank"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="rgba(107,114,128,1)"
                        >
                          <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                        </svg>{" "}
                      </span>{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-2 rounded-md border-gray-400 p-4">
                <div className="w-[150px] h-[150px] mx-auto">
                  <Image
                    src={BusinessStrategyHead}
                    alt="research-head"
                    className="w-full h-full object-fit rounded-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold my-2">
                    Ifeoma Ezeamama
                  </h3>
                  <p className="text-xl text-gray-500">
                    Associate, Business Strategy and <br />
                    Operations
                  </p>
                  <div className="flex gap-2 justify-center my-2">
                    <a
                      href="mailto:ifeoma@bfgconsults.com"
                      title="ifeoma@bfgconsults.com"
                    >
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
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ifeoma-ezeamama-196a6b1a8/"
                      target="_blank"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="rgba(107,114,128,1)"
                        >
                          <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                        </svg>{" "}
                      </span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end */}
    </>
  );
};

export default page;

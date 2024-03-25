import React from "react";
import Image from "next/image";
import Banner from "../../../../public/assets/information-technology.jpg";
import Accordion from "@/components/Accordion";
import TopBanner from "../../../../public/assets/it-banner.jpeg";
import DataSecurity from "../../../../public/assets/data-security.jpg";
import DataManagement from "../../../../public/assets/data-management.jpeg";
import ITExpertise from "../../../../public/assets/it-expertise.jpg";
import EmployeePerformance from "../../../../public/assets/productivity.jpeg";
import Scalability from "../../../../public/assets/employee-scalability.jpg";
import HeadGrowth from "../../../../public/assets/moses-sunday.jpg";

const page = () => {
  return (
    <>
      {/* start section */}
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
            Information Technology
          </h3>
          <p className="text-[#ffffff9a] my-2 text-lg lg:text-2xl">
            Innovative solutions, secure technology, and unparalleled support
            for your business
          </p>
        </div>
      </div>
      <div className="py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
              BFG Technology solutions is a specialised service deployed to help
              organisations optimize their use of technology to achieve their
              business objectives. Through this service, we provide a wide range
              of IT solutions, including, business web presence, cloud
              computing, software development, and cybersecurity. The service is
              delivered by our innovation and technology team, who are experts
              in their field and have the technical skills and knowledge to
              provide effective solutions. The goal of this service to clients
              is to improve their organisations efficiency, information
              security, and competitiveness by leveraging the latest technology.
            </p>
          </div>

          <div>
            <div className="bg-[#f8f5f5] p-8">
              <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
                Focus areas of our Information Technology Services{" "}
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
                      <path d="M3 4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V10C11 10.5523 10.5523 11 10 11H4C3.44772 11 3 10.5523 3 10V4ZM3 14C3 13.4477 3.44772 13 4 13H10C10.5523 13 11 13.4477 11 14V20C11 20.5523 10.5523 21 10 21H4C3.44772 21 3 20.5523 3 20V14ZM13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11H14C13.4477 11 13 10.5523 13 10V4ZM13 14C13 13.4477 13.4477 13 14 13H20C20.5523 13 21 13.4477 21 14V20C21 20.5523 20.5523 21 20 21H14C13.4477 21 13 20.5523 13 20V14Z"></path>
                    </svg>
                  </span>
                  <h4 className="text-2xl my-2">
                    Software Designing and Development
                  </h4>
                  <p className="text-[#656565]">
                    {" "}
                    We manage the design and development of customised IT
                    solutions that are tailored to the specific needs of an
                    organisation and or business.
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
                      <path d="M19 2C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C12.33 17 12.65 16.97 12.9552 16.9089L12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.5977 9 15 10.3393 15 12H12.5L14.6282 16.2544C16.0517 15.3731 17 13.7973 17 12C17 9.23858 14.7614 7 12 7Z"></path>
                    </svg>
                  </span>
                  <h4 className="text-2xl my-2">Disaster Recovery</h4>
                  <p className="text-[#656565]">
                    This scope of service includes the development and
                    implementation of plans and procedures that organisations
                    can use to quickly and effectively recover from IT-related
                    disruptions, such as natural disasters, power outages or
                    cyber-attacks.
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
                      <path d="M22 17.0022C21.999 19.8731 19.9816 22.2726 17.2872 22.8616L16.6492 20.9476C17.8532 20.7511 18.8765 20.0171 19.4649 19H17C15.8954 19 15 18.1046 15 17V13C15 11.8954 15.8954 11 17 11H19.9381C19.446 7.05369 16.0796 4 12 4C7.92038 4 4.55399 7.05369 4.06189 11H7C8.10457 11 9 11.8954 9 13V17C9 18.1046 8.10457 19 7 19H4C2.89543 19 2 18.1046 2 17V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V12.9987V13V17V17.0013V17.0022Z"></path>
                    </svg>
                  </span>
                  <h4 className="text-2xl my-2">Technical Support</h4>
                  <p className="text-[#656565]">
                    This scope of service involves assisting employees and other
                    users of an organisations IT systems. This can include
                    troubleshooting and resolving technical issues, as well as
                    providing advice and guidance on the use of specific
                    software or hardware.
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
                      <path d="M7 20.9811C3.64378 20.7257 1 17.9216 1 14.5C1 12.1716 2.22429 10.1291 4.06426 8.9812C4.56469 5.044 7.92686 2 12 2C16.0731 2 19.4353 5.044 19.9357 8.9812C21.7757 10.1291 23 12.1716 23 14.5C23 17.9216 20.3562 20.7257 17 20.9811V21H7V20.9811ZM13 12V8H11V12H8L12 17L16 12H13Z"></path>
                    </svg>
                  </span>
                  <h4 className="text-2xl my-2">Cloud Services</h4>
                  <p className="text-[#656565]">
                    This scope of service includes the management of cloud-based
                    services such as data storage, software as a service (SaaS),
                    and platform as a service (PaaS) to organisations. These
                    services can be used to store, manage and share data, host
                    and run applications, or provide other IT-related
                    functionality.
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
                      <path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 7C10.8954 7 10 7.89543 10 9C10 9.74025 10.4022 10.3866 10.9999 10.7324L11 15H13L13.0011 10.7318C13.5983 10.3858 14 9.73984 14 9C14 7.89543 13.1046 7 12 7Z"></path>
                    </svg>
                  </span>
                  <h4 className="text-2xl my-2">Cybersecurity</h4>
                  <p className="text-[#656565]">
                    This scope of service includes the implementation of
                    security measures to protect an organisations IT systems and
                    data from unauthorized access and breaches. This can include
                    tasks such as configuring firewalls, implementing intrusion
                    detection systems, and performing security audits.
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
                          src={EmployeePerformance}
                          alt="banner"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Improved employee performance
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          By providing employees with the knowledge, skills, and
                          abilities they need to succeed in their roles, this
                          solution helps organisations improve employee
                          performance and productivity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={DataSecurity}
                          alt="production-stats"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Enhanced data security{" "}
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          IT services help organisations protect their IT
                          systems and data from unauthorized access and breaches
                          by implementing security measures such as firewalls,
                          intrusion detection systems, and regular security
                          audits.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={DataManagement}
                          alt="marketing-stats"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Better data management
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          It helps organisations manage and protect their data
                          more effectively by providing solutions such as data
                          storage, backup, and recovery.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={Scalability}
                          alt="measure-business"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Increased flexibility and scalability{" "}
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          Organisations adapt to changing business conditions
                          and grow their operations by providing scalable and
                          flexible solutions that can be easily modified and
                          expanded as needed.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={ITExpertise}
                          alt="employee-satisfy"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Access to expertise and resources{" "}
                        </h3>{" "}
                        <p className="text-center text-[#656565]">
                          {" "}
                          Our IT solutions provide organisations with access to
                          experts and resources that they might not otherwise
                          have, such as specialised software, and cybersecurity
                          professionals.
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
              Connect With Us: Innovate Tomorrow
            </h3>
            <p class="text-xl font-semibold my-2 text-center">
              Transforming Ideas into Technology.
            </p>
            <p class="text-xl font-semibold my-2 text-center">
              Explore Our Expertise
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

              {/* <div className="w-[30%] border-2 rounded-md border-gray-400 p-4">
                <div className="w-[150px] h-[150px] mx-auto">
                <Image
                src={ResearchHead}
                alt="research-head"
                className="w-full h-full object-fit rounded-full"
                />
                </div>
                <div className="text-center">
                <h3 className="text-xl font-semibold my-2">Kenneth Idanwekhai</h3>
                <p className="text-xl text-gray-500">Associate, Research, Data and Analytics</p>
                <div className="flex gap-2 justify-center my-2"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(107,114,128,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg></span><span className="text-gray-500">sunday.moses@bfgconsults.com</span></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* end section */}
    </>
  );
};

export default page;

import React from "react";
import ManagingDirector from "../../../public/assets/festus-bello-md.jpg";
import HeadGrowth from "../../../public/assets/moses-sunday.jpg";
import HeadBusiness from "../../../public/assets/ifeoma.jpg";
import HeadResearch from "../../../public/assets/kenneth.jpg";
import CompanySecretary from "../../../public/assets/aina-oyefesobi.jpeg";
import Avatar from "../../../public/assets/avatar.png";
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
          <p className="text-2xl font-semibold text-center my-2">
            Celebrating Diversity, Driving Excellence: Meet Our Team
          </p>
          <p className="text-xl text-[#656565] text-justify mx-8">
            {" "}
            Our strength lies in our diverse and dynamic team. From seasoned
            industry veterans to fresh perspectives, we unite under a shared
            commitment to excellence. With a passion for innovation and a
            dedication to client success, each member brings a unique set of
            skills and experiences to the table.
          </p>
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
                <p className="text-xl text-gray-500">Managing Partner / CEO</p>
                <div className="w-full flex gap-2 justify-center my-2">
                  <a
                    href="mailto:festus.bello@bfgconsults.com"
                    title="festus.bello@bfgconsults.com"
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
                    href="https://www.linkedin.com/in/festus-bello-mba-74673311a/"
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
            <div className="w-[100%] md:w-[70%] lg:w-[30%] border-2 rounded-md shadow-xl p-4">
              <div className="w-[150px] h-[150px] mx-auto">
                <Image
                  src={CompanySecretary}
                  alt="company-secretary"
                  className="w-full h-full object-fit rounded-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold my-2">Aina A. Oyefesobi</h3>
                <p className="text-xl text-gray-500">
                  Company Secretary and Executive Board Member
                </p>
                <div className="w-full flex gap-2 justify-center my-2">
                  <a
                    href=""
                    title=""
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
                    href="https://www.linkedin.com/in/oyefesobi-aina-azeezat-b686a4178/"
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
            </div>{" "}
            <div className="w-[100%] md:w-[70%] lg:w-[30%] border-2 rounded-md shadow-xl p-4">
              <div className="w-[150px] h-[150px] mx-auto">
                <Image
                  src={HeadGrowth}
                  alt="head-growth"
                  className="w-full h-full object-fit rounded-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold my-2">Moses S. Ijeo</h3>
                <p className="text-xl text-gray-500">
                  Head of Growth and Consulting
                </p>
                <div className="w-full flex gap-2 justify-center my-2">
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
            </div>{" "}
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
                  <a
                    href="mailto:kenneth.idanwekhai@bfgconsults.com"
                    title="kenneth.idanwekhai@bfgconsults.com"
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
                    href="https://www.linkedin.com/in/kenneth-idanwekhai/"
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
            </div>{" "}
            <div className="w-[100%] md:w-[70%] lg:w-[30%] border-2 rounded-md shadow-xl p-4">
              <div className="w-[150px] h-[150px] mx-auto">
                <Image
                  src={HeadBusiness}
                  alt="business-operation"
                  className="w-full h-full object-fit rounded-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold my-2">Ifeoma Ezeamama</h3>
                <p className="text-xl text-gray-500">
                  Associate, Business Strategy and Operation Transformation
                </p>
                <div className="w-full flex gap-2 justify-center my-2">
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
             <div className="w-[100%] md:w-[70%] lg:w-[30%] border-2 rounded-md shadow-xl p-4">
              <div className="w-[150px] h-[150px] mx-auto">
                <Image
                  src={Avatar}
                  alt="training-associate"
                  className="w-full h-full object-fit rounded-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold my-2">Happiness C. Adama</h3>
                <p className="text-xl text-gray-500">
                  Associate, Training and Development
                </p>
                <div className="w-full flex gap-2 justify-center my-2">
                  <a
                    href="mailto:adama.chegbe@bfgconsults.com"
                    title="adama.chegbe@bfgconsults.com"
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
                    href="https://www.linkedin.com/in/happy-chegbe-adama-9bb0601b2/"
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
            <div className="w-[100%] md:w-[70%] lg:w-[30%] border-2 rounded-md shadow-xl p-4">
              <div className="w-[150px] h-[150px] mx-auto">
                <Image
                  src={Avatar}
                  alt="head-technology"
                  className="w-full h-full object-fit rounded-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold my-2">
                  David U. Bradford
                </h3>
                <p className="text-xl text-gray-500">
                  Associate, innovation and Technology
                </p>
                <div className="w-full flex gap-2 justify-center my-2">
                  <a
                    href="mailto:david.bradford@bfgconsults.com"
                    title="david.bradford@bfgconsults.com"
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
                    href="https://www.linkedin.com/in/david-bradford-651769160/"
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
            </div>{" "}
             <div className="w-[100%] md:w-[70%] lg:w-[30%] border-2 rounded-md shadow-xl p-4">
              <div className="w-[150px] h-[150px] mx-auto">
                <Image
                  src={Avatar}
                  alt="executive-assistant"
                  className="w-full h-full object-fit rounded-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold my-2">
                  Elizabeth N. Okeke
                </h3>
                <p className="text-xl text-gray-500">
Executive Assistant - Office Administration and Client Relations 
                </p>
                <div className="w-full flex gap-2 justify-center my-2">
                  <a
                    href="mailto:elizabeth.okeke@bfgconsults.com"
                    title="elizabeth.okeke@bfgconsults.com"
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
                    href="https://www.linkedin.com/in/iobuaku/"
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
            </div>{" "}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

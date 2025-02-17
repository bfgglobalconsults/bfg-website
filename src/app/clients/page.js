import React from "react";

import Banner from "../../../public/assets/teams-banner.png";
import Image from "next/image";
import OurStand from "@/components/OurStand";
import DMJTravel from "../../../public/assets/dmj.png";
import STTravels from "../../../public/assets/ST-TRAVELS.png";
import DavidPrestige from "../../../public/assets/david-presage.png";
import Ampersand from "../../../public/assets/ampersand.png";
import Sensang from "../../../public/assets/sensang.png";
import Gigs from "../../../public/assets/gigs-ltd.png";
import Alubarika from "../../../public/assets/alubarika.png";
import Twenty from "../../../public/assets/12twenty.jpg";
import Client1 from "../../../public/assets/client1.png";
import Client2 from "../../../public/assets/client2.png";
import Client3 from "../../../public/assets/client3.png";
import Client4 from "../../../public/assets/client4.png";
import Client5 from "../../../public/assets/client5.png";
import Client6 from "../../../public/assets/client6.png";
import Client7 from "../../../public/assets/client7.png";
import Client8 from "../../../public/assets/client8.png";
import Client9 from "../../../public/assets/client9.png";
import Client10 from "../../../public/assets/client10.png";
import Client11 from "../../../public/assets/client11.png";
import Client12 from "../../../public/assets/client12.png";
import Client13 from "../../../public/assets/client13.png";
import Client14 from "../../../public/assets/client14.png";
import Client15 from "../../../public/assets/client15.png";
import Client16 from "../../../public/assets/client16.png";
import Client17 from "../../../public/assets/client17.png";
import Client18 from "../../../public/assets/client18.png";











const ClientData = [
  {
    id: 1,
    image: Client1,
  },
  {
    id: 2,
    image: Client2,
  },
  {
    id: 3,
    image: DMJTravel,
  },
  {
    id: 4,
    image:  Client4,
  },
  {
    id: 5,
    image:  Gigs,
  },{
    id: 6,
    image:  Client6,
  },
  {
    id: 7,
    image:  Client7,
  },
  {
    id: 8,
    image:  Client8,
  },
    {
    id: 9,
    image:  Client9,
  },
      {
    id: 10,
    image:  Client10,
  },
        {
    id: 11,
    image:  Client11,
  },
          {
    id: 12,
    image:  Client12,
  },
            {
    id: 13,
    image:  Client13,
  },
              {
    id: 14,
    image:  Client14,
  },
                {
    id: 15,
    image:  Client15,
  },
                  {
    id: 16,
    image:  Client16,
  },
                    {
    id: 17,
    image:  Client17,
  },
                      {
    id: 18,
    image:  Client18,
  }
]

const page = () => {
  return (
    <>
      <div className="lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Our Clients
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 items-center justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Meet Our Clients.
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Delivering tailored solutions to empower organizations, drive
            growth, and fuel innovation across diverse industries.
          </p>
        </div>

        <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={Banner}
            alt="about-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="py-[30px]">
          <div className="">
            <div className="w-full my-4">
              <p className="text-lg text-[#656565] my-3">
                Our strength lies in our diverse & dynamic team. From seasoned
                industry veterans to fresh perspectives, we unite under a shared
                commitment to excellence. With a passion for innovation & a
                dedication to client success, each member brings a unique set of
                skills & experiences to the table.
              </p>
            </div>
          </div>
        </div>
        <div className="my-8">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Our Clients
          </span>
          <h3 className="text-[#333] font-bold text-4xl md:text-3xl lg:text-3xl my-4">
            Collaborating with Forward-Thinking Clients
          </h3>
          <div className="w-full flex flex-wrap gap-2 my-14">
            {ClientData.map((client) => (
              <div key={client.id} className="w-[40%] md:w-[50%] lg:w-[13%] border-[#F7F7F8] rounded-lg p-4">
                <div className="w-[100px] h-[100px]  flex justify-center items-center mx-auto">
                  <Image
          src={client.image}
          alt={`${client.name} logo`}
          width={100}
          height={100}
          quality={100}
          className="object-contain w-full h-full"
          priority
        />
                </div>
              </div>
            ))}
          </div>
          <div className="my-14 py-8">
            <OurStand />
          </div>
        </div>
      </div>
      {/* old view */}
      {/* <div>
        <div className="py-[40px] px-[40px]">
          <h3 className="my-4 flex justify-center text-lg font-bold">
            <span className="p-2 text-2xl lg:text-[36px] text-[#016EF8] rounded-xl">
              Our Team
            </span>
          </h3>
          <p className="text-2xl font-semibold text-center my-2">
            Celebrating Diversity, Driving Excellence: Meet Our Team
          </p>
          <p className="text-xl text-[#656565] mx-8">
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
                  Elizabeth-Mary N. Okeke
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
      </div> */}
    </>
  );
};

export default page;

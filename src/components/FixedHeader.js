"use client";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { animated, useTransition } from "@react-spring/web";
import Collapsible from "react-collapsible";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/app/bfg-logo.png";
import WhiteLogo from "@/app/bfg-whitelogo.png";
import MediaQuery from "./media-query";
import { navigation_links } from "@/constants/navigation-constant";

const FixedHeader = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);


  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const modalRef = useRef(null);

  const handleClick = (e) => {
    if (activeTab !== null) {
      e.stopPropagation(); // Prevent event propagation only if modal is open
    }
  };



  const maskTransitions = useTransition(showMenu, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const handleTabClick = (id) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === id ? null : id));
  };

  const closeModal = () => {
    setActiveTab(null);
  };

  const ModalContentWrapper = ({ component, closeModal, color }) => {
    const router = useRouter(); // Import and initialize useRouter
    
    const handleClick = (e, href) => {
      e.stopPropagation(); // Prevent event propagation
      closeModal(); // Close modal
      if (href) {
        router.push(href); // Navigate to the specified href using Next.js router
      }
    };
  
    return component && React.cloneElement(component, { closeModal, onClick: handleClick, hoverText: color });
  };
  

  return (
    <div>
      <MediaQuery min="lg">
        <div
          className={`${
            active === true
              ? "w-full p-[10px] px-[40px] bg-white fixed top-0 left-0 z-10"
              : "w-full p-[10px] px-[40px] bg-white fixed top-0 left-0 z-10"
          } px-[40px] text-gray-400`}
        >
          <div className="flex justify-between items-center">
            {active ? (
              <>
                <Link href="/">
                  <div className="w-[100px] h-[90px]">
                    <Image
                      src={Logo}
                      alt="logo"
                      className="w-full h-full object-fit"
                    />
                  </div>
                </Link>
                <div>
                  <ul className="relative flex gap-2">
                    {navigation_links.map(
                      ({ id, link, label, dropdown, dropdown_item }) => (
                        <li
                          key={id}
                          className={`${
                            activeTab === id
                              ? "nav-links flex gap-2 px-4 cursor-pointer capitalize font-medium text-gray-500 border-b-2 border-[#E26015] hover:scale-105 hover:text-[#E26015] duration-200 link-underline"
                              : "nav-links flex gap-2 px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-[#E26015] duration-200 link-underline"
                          } rounded-tl-md z-10 ${
                            id === navigation_links.length - 1
                              ? "rounded-tr-md"
                              : ""
                          }`}
                         
                        >
                          <button  onClick={() => handleTabClick(id)}>{label}</button>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                 <div>
                <button className="bg-[#E26015] hover:bg-black hover:text-white text-white border-[#E26015] font-semibold  py-2 px-4 rounded-lg">
                  <Link href="/contact">Discuss Your Project</Link>
                </button>
              </div>
                <div>
                  {navigation_links.map(({ id, label, component }) => (
                    <div
                      key={id}
                      ref={modalRef}
                      className={`modal relative z-5 inset-0 overflow-y-auto ${
                        activeTab === id ? "block" : "hidden"
                      }`}
                    >
                      <div
                        className={`fixed top-0 left-0 flex w-full justify-center mt-[90px] min-h-[80vh]  ${
                          activeTab === id
                            ? "animate-slide-in"
                            : "animate-slide-out"
                        }`}
                      >
                        <div className="relative z-10 modal-content mt-[21px] bg-white  border-[#E45F11] border-r-4 border-l-4 border-b-4 rounded-b-xl rounded-l-xl rounded-r-xl rounded-tr-none rounded-tl-none w-full p-8">
                          <div className="flex flex-col items-center justify-center">
                            <span
                              className="absolute bottom-5 justify-center p-2 cursor-pointer"
                              onClick={() => handleTabClick(id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="32"
                                height="32"
                                fill="rgba(1,1,1,1)"
                              >
                                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                              </svg>
                            </span>
                          </div>
                          <ModalContentWrapper component={component} closeModal={closeModal} color="#016EF8" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <Link href="/">
                  <div className="w-[100px] h-[90px]">
                    <Image
                      src={Logo}
                      alt="logo"
                      className="w-full h-full object-fit"
                    />
                  </div>
                </Link>
                <div>
                  <ul className="relative flex gap-2">
                    {navigation_links.map(
                      ({ id, link, label, dropdown, dropdown_item }) => (
                        <li
                          key={id}
                          ref={modalRef}
                          className={`${
                            activeTab === id
                              ? "nav-links flex gap-2 px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 z-10 hover:text-[#E26015] border-b-2 border-[#E26015] duration-200 link-underline"
                              : "nav-links flex gap-2 px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 z-10 hover:text-[#E26015] duration-200 link-underline"
                          } rounded-tl-md z-10 ${
                            id === navigation_links.length - 1
                              ? "rounded-tr-md"
                              : ""
                          }`}
                        >
                          {/* <Link href={link}>{label}</Link> */}
                          <button  onClick={() => handleTabClick(id)}>{label}</button>
                        </li>
                      )
                    )}
                  </ul>
                  </div>
                   <div>
                <button className="bg-[#E26015] hover:bg-black hover:text-white text-white border-[#E26015] font-semibold  py-2 px-4 rounded-lg">
                  <Link href="/contact">Discuss Your Project</Link>
                </button>
              </div>
                <div>
                  {navigation_links.map(({ id, label, component }) => (
                    <div
                      key={id}
                      className={`modal relative z-5 inset-0 overflow-y-auto ${
                        activeTab === id ? "block" : "hidden"
                      }`}
                    >
                      <div
                        className={`fixed top-0 left-0 flex w-full justify-center mt-[90px] min-h-[80vh]  ${
                          activeTab === id
                            ? "animate-slide-in"
                            : "animate-slide-out"
                        }`}
                      >
                        <div className="relative z-10 modal-content mt-[21px] bg-white  border-[#E45F11] border-r-4 border-l-4 border-b-4 rounded-b-xl rounded-l-xl rounded-r-xl rounded-tr-none rounded-tl-none w-full p-8">
                          <div className="flex flex-col items-center justify-center">
                            <span
                              className="absolute bottom-5 justify-center p-2 cursor-pointer"
                              onClick={() => handleTabClick(id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="32"
                                height="32"
                                fill="rgba(1,1,1,1)"
                              >
                                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                              </svg>
                            </span>
                          </div>
                          <ModalContentWrapper component={component} closeModal={closeModal} color="#016EF8" />
                       
                      </div>
                    </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </MediaQuery>

      {/* small screens */}
      {/* small screens */}
      <MediaQuery max="lg">
        <div
          className={`${
            active === true ? "w-full p-[10px] px-[40px] bg-white fixed top-0 left-0 z-10" : null
          } px-[40px] text-white border-b border-[#e4e4eb]`}
        >
          <div className="flex justify-between items-center gap-2">
            {active ? (
              <>
                <Link href="/">
                  <div className="w-[100px] h-[90px]">
                    <Image src={Logo || "/placeholder.svg"} alt="logo" className="w-full h-full object-fit" />
                  </div>
                </Link>
                <button className="" onClick={() => setShowMenu(!showMenu)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    fill="rgba(1,1,1,1)"
                  >
                    <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                  </svg>
                </button>
              </>
            ) : (
              <>
                <Link href="/">
                  <div className="w-[100px] h-[90px]">
                    {" "}
                    <Image src={Logo || "/placeholder.svg"} alt="logo" className="w-full h-full object-fit" />{" "}
                  </div>
                </Link>
                <button className="" onClick={() => setShowMenu(!showMenu)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    fill="rgba(0,0,0,1)"
                  >
                    <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                  </svg>
                </button>
              </>
            )}
          </div>

          {maskTransitions(
            (styles, item) =>
              item && (
                <animated.div
                  className=" bg-black fixed top-0 left-0 w-full h-full z-50 opacity-50 "
                  onClick={() => setShowMenu(false)}
                ></animated.div>
              ),
          )}
          {menuTransitions(
            (styles, item) =>
              item && (
                <animated.div
                  style={styles}
                  className="fixed p-3 bg-white top-0 left-0 w-[70%] z-50 h-full shadow overflow-y-auto"
                >
                  <div className="flex justify-between items-center">
                    <div className="w-[100px] h-[100px] p-1">
                      <Image src={Logo || "/placeholder.svg"} className="w-full h-full object-fit" alt="logo" />
                    </div>
                    <button className="text-black" onClick={() => setShowMenu(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
                        <path d="M6 18L18 6M6 6l12 12" stroke="black" strokeWidth="2" />
                      </svg>
                    </button>
                  </div>
                  <hr />
                  <div className="py-[40px]  text-[16px] text-gray-800">
                    {/* {navigation_links.map(({ id, link, label }) => (
                      <div key={id} className="pl-[32px] py-[20px]">
                        <Link href={link} className="hover:text-[#E45F11]">
                       </span>   {label}
                        </Link>
                      </div>
                    ))} */}
                    <Collapsible
                      trigger={
                        <div className=" flex items-center gap-4 hover:text-[#E45F11]">
                          <span>
                            <svg
                              className="group-hover:text-[#E45F11]"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              fill="currentColor"
                            >
                              <path d="M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71404 11.8922 2.71404 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM6.75977 11.7573L8.17399 10.343L11.0024 13.1715L16.6593 7.51465L18.0735 8.92886L11.0024 15.9999L6.75977 11.7573Z"></path>
                            </svg>
                          </span>
                          <p className="font-bold py-[20px] hover:text-[#E45F11]"> Solutions</p>
                          <p>
                            {" "}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path
                                d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
                                fill="rgba(181,181,189,1)"
                              />
                            </svg>
                          </p>{" "}
                        </div>
                      }
                    >
                      <div className="bg-[#EFEFEF] divide-y">
                                                  <Link href="/solutions/information-technology" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Technology and Software Development
                          </p>
                                                    </Link>
                          <Link href="/solutions/business-strategy" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Strategy and Operations Transformation
                          </p>
                                                    </Link>
                          <Link href="/solutions/research-analytics" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Research and Analytics
                        </p>
                          </Link>
                          <Link href="/solutions/training-development" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Training and Development
                          </p>
                                                    </Link>

                      </div>
                    </Collapsible>

                    <Collapsible
                      trigger={
                        <div className="flex items-center gap-4 hover:text-[#E45F11]">
                          <span>
                            <svg
                              className="group-hover:text-[#E45F11]"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              fill="currentColor"
                            >
                              <path d="M21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM8 11V13H11V11H8ZM8 7V9H11V7H8ZM8 15V17H11V15H8ZM13 15V17H16V15H13ZM13 11V13H16V11H13ZM13 7V9H16V7H13Z"></path>
                            </svg>
                          </span>
                          <p className="font-bold py-[20px] hover:text-[#E45F11]">Industry</p>
                          <p>
                            {" "}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path
                                d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
                                fill="rgba(181,181,189,1)"
                              />
                            </svg>
                          </p>{" "}
                        </div>
                      }
                    >
                      <div className="bg-[#EFEFEF] divide-y">
                                                  <Link href="/industry/industries/consumer" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Consumer and Retail Market
                          </p>
                                                    </Link>
                          <Link href="/industry/industries/financial" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Financial Services
                          </p>
                          </Link>
                                                    <Link href="/industry/industries/hospitality" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Hospitality and Tourism
                          </p>
                                                    </Link>
                          <Link href="/industry/industries/real-estate" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Real Estate
                          </p>
                                                    </Link>

                                                  <Link href="/industry/industries/technology" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Technology and Finance
                          </p>
                                                    </Link>
                          <Link href="/industry/industries/government" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Government and Non-for-Profit
                          </p>
                                                    </Link>
                          <Link href="/industry/industries/oil-gas" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Oil and Gas
                          </p>
                                                    </Link>
                          <Link href="/industry/industries/industrial-manufacturing" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Industrial Manufacturing
                          </p>
                                                    </Link>
                          <Link href="/industry/industries/telecom-media" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Telecommunication and Media
                          </p>
                                                    </Link>
                          <Link href="/industry/industries/entertainment" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Entertainment and Creative Industry
                          </p>
                                                    </Link>
                          <Link href="/industry/industries/health-social-care" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Health and Social Care
                          </p>
                                                    </Link>

                      </div>
                    </Collapsible>
                    <Collapsible
                      trigger={
                        <div className="hover:text-[#E45F11] flex items-center gap-4">
                          <span>
                            <svg
                              className="group-hover:text-[#E45F11]"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              fill="currentColor"
                            >
                              <path d="M20.0833 10.4999L21.2854 11.2212C21.5221 11.3633 21.5989 11.6704 21.4569 11.9072C21.4146 11.9776 21.3557 12.0365 21.2854 12.0787L11.9999 17.6499L2.71451 12.0787C2.47772 11.9366 2.40093 11.6295 2.54301 11.3927C2.58523 11.3223 2.64413 11.2634 2.71451 11.2212L3.9166 10.4999L11.9999 15.3499L20.0833 10.4999ZM20.0833 15.1999L21.2854 15.9212C21.5221 16.0633 21.5989 16.3704 21.4569 16.6072C21.4146 16.6776 21.3557 16.7365 21.2854 16.7787L12.5144 22.0412C12.1977 22.2313 11.8021 22.2313 11.4854 22.0412L2.71451 16.7787C2.47772 16.6366 2.40093 16.3295 2.54301 16.0927C2.58523 16.0223 2.64413 15.9634 2.71451 15.9212L3.9166 15.1999L11.9999 20.0499L20.0833 15.1999ZM12.5144 1.30864L21.2854 6.5712C21.5221 6.71327 21.5989 7.0204 21.4569 7.25719C21.4146 7.32757 21.3557 7.38647 21.2854 7.42869L11.9999 12.9999L2.71451 7.42869C2.47772 7.28662 2.40093 6.97949 2.54301 6.7427C2.58523 6.67232 2.64413 6.61343 2.71451 6.5712L11.4854 1.30864C11.8021 1.11864 12.1977 1.11864 12.5144 1.30864Z"></path>
                            </svg>
                          </span>
                          <p className="font-bold py-[20px] hover:text-[#E45F11]">SaaS Products</p>
                          <p>
                            {" "}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path
                                d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
                                fill="rgba(181,181,189,1)"
                              />
                            </svg>
                          </p>{" "}
                        </div>
                      }
                    >
                      <div className="bg-[#EFEFEF] divide-y">
                                                  <Link href="/product/appetiza" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Appetiza
                          </p>
                                                    </Link>
                          <Link href="/product/career-fun" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            CareerFun
                          </p>
                                                    </Link>

                      </div>
                    </Collapsible>
                    <Collapsible
                      trigger={
                        <div className="flex items-center gap-4 hover:text-[#E45F11]">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              fill="currentColor"
                            >
                              <path d="M21 10.063V4C21 3.44772 20.5523 3 20 3H19C17.0214 4.97864 13.3027 6.08728 11 6.61281V17.3872C13.3027 17.9127 17.0214 19.0214 19 21H20C20.5523 21 21 20.5523 21 20V13.937C21.8626 13.715 22.5 12.9319 22.5 12 22.5 11.0681 21.8626 10.285 21 10.063ZM5 7C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H6L7 22H9V7H5Z"></path>
                            </svg>
                          </span>
                          <p className="font-bold py-[20px] hover:text-[#E45F11]">Programs</p>
                          <p>
                            {" "}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path
                                d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
                                fill="rgba(181,181,189,1)"
                              />
                            </svg>
                          </p>{" "}
                        </div>
                      }
                    >
                      <div className="bg-[#EFEFEF] divide-y">
                                                  <Link href="/program/dialectics" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Dialetics
                          </p>
                                                    </Link>
                          <Link href="/program/leadership-summit" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Emerging Marketplace Leader
                          </p>
                                                    </Link>
                          <Link href="/program/women-tech" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Women in Tech
                          </p>
                                                    </Link>
                          <Link href="/program/sme-klinic" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            SME Klinic
                          </p>
                                                    </Link>
                          <Link href="/program/ai-advantage" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            The AI Advantage
                          </p>
                                                    </Link>
                          <Link href="/program/sme-webinar" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            SME Webinar Series
                          </p>
                                                    </Link>
                          <Link href="/program/tech-achievers" onClick={() => setShowMenu(false)}>

                        <p className="text-sm ml-9 py-[20px] hover:text-[#E45F11]">
                            Tech Achievers Graduate Scheme
                          </p>
                                                    </Link>

                      </div>
                    </Collapsible>
                    <Collapsible
                      trigger={
                        <div className="flex items-center gap-4 hover:text-[#E45F11]">
                          <span>
                            <svg
                              className="group-hover:text-[#E45F11]"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              fill="currentColor"
                            >
                              <path d="M13 21V23.5L10 21.5L7 23.5V21H6.5C4.567 21 3 19.433 3 17.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V20C21 20.5523 20.5523 21 20 21H13ZM7 19V17H13V19H19V16H6.5C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19H7ZM7 5V7H9V5H7ZM7 8V10H9V8H7ZM7 11V13H9V11H7Z"></path>
                            </svg>
                          </span>
                          <p className="font-bold py-[20px] hover:text-[#E45F11]">Resources</p>
                          <p>
                            {" "}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path
                                d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
                                fill="rgba(181,181,189,1)"
                              />
                            </svg>
                          </p>{" "}
                        </div>
                      }
                    >
                      <div className="bg-[#EFEFEF] divide-y">
                                                  <Link href="/insight/news" onClick={() => setShowMenu(false)}>

                        <p className="ml-9 text-sm py-[20px] hover:text-[#E45F11]">
                            Newsroom
                          </p>
                                                    </Link>
                          <Link href="/insight/blogs" onClick={() => setShowMenu(false)}>

                        <p className="ml-9 text-sm py-[20px] hover:text-[#E45F11]">
                            Blogs
                          </p>
                                                    </Link>
                          <Link href="/insight/case-study" onClick={() => setShowMenu(false)}>

                        <p className="ml-9 text-sm py-[20px] hover:text-[#E45F11]">
                            Case Studies
                          </p>
                                                    </Link>
                          <Link href="/careers" onClick={() => setShowMenu(false)}>

                        <p className="ml-9 text-sm py-[20px] hover:text-[#E45F11]">
                            Careers
                          </p>
                                                    </Link>

                      </div>
                    </Collapsible>
                    <Collapsible
                      trigger={
                        <div className="flex items-center gap-4 hover:text-[#E45F11]">
                          <span>
                            <svg
                              className="group-hover:text-[#E45F11]"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              fill="currentColor"
                            >
                              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 9.5C12.8284 9.5 13.5 8.82843 13.5 8C13.5 7.17157 12.8284 6.5 12 6.5C11.1716 6.5 10.5 7.17157 10.5 8C10.5 8.82843 11.1716 9.5 12 9.5ZM14 15H13V10.5H10V12.5H11V15H10V17H14V15Z"></path>
                            </svg>
                          </span>
                          <p className="font-bold py-[20px] hover:text-[#E45F11]">About Us</p>
                          <p>
                            {" "}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path
                                d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
                                fill="rgba(181,181,189,1)"
                              />
                            </svg>
                          </p>{" "}
                        </div>
                      }
                    >
                      <div className="bg-[#EFEFEF] divide-y">
                        {/* <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                        <Link href="/about">About Us</Link>
                      </p> */}
                                                  <Link href="/about" onClick={() => setShowMenu(false)}>

                        <p className="ml-9 text-sm py-[20px] hover:text-[#E45F11]">
                            Who We Are
                          </p>
                                                    </Link>
                          <Link href="/clients" onClick={() => setShowMenu(false)}>

                        <p className="ml-9 text-sm py-[20px] hover:text-[#E45F11]">
                            Our Clients
                          </p>
                                                    </Link>
                          <Link href="/team" onClick={() => setShowMenu(false)}>

                        <p className="ml-9 text-sm py-[20px] hover:text-[#E45F11]">
                            Our Team
                          </p>
                                                    </Link>
                          <Link href="/industry/projects" onClick={() => setShowMenu(false)}>

                        <p className="ml-9 text-sm py-[20px] hover:text-[#E45F11]">
                            Project Executed
                          </p>
                                                    </Link>
                          <Link href="/award-recognition" onClick={() => setShowMenu(false)}>

                        <p className="ml-9 text-sm py-[20px] hover:text-[#E45F11]">
                            Award & Recognition
                          </p>
                                                    </Link>
                          <Link href="/governance-culture" onClick={() => setShowMenu(false)}>

                        <p className="ml-9 text-sm py-[20px] hover:text-[#E45F11]">
                            Governance & Culture
                          </p>
                                                    </Link>

                      </div>
                    </Collapsible>

                    <div className="hover:text-[#E45F11] flex items-center gap-4">
                      <span>
                        <svg
                          className="group-hover:text-[#E45F11]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="currentColor"
                        >
                          <path d="M4 2C3.44772 2 3 2.44772 3 3V5H5V7H2V9H5V11H2V13H5V15H2V17H5V19H3V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V3C21 2.44772 20.5523 2 20 2H4ZM9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16H9ZM12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12Z"></path>
                        </svg>
                      </span>
                      <Link href="/contact" onClick={() => setShowMenu(false)}>
                        <p className="font-bold py-[20px] hover:text-[#E45F11]">Contact</p>
                      </Link>
                    </div>
                  </div>
                </animated.div>
              ),
          )}
        </div>
      </MediaQuery>
    </div>
  );
};

export default FixedHeader;

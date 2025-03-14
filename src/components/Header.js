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

const Header = () => {
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


  // const handleTabClick = (id) => {
  //   setActiveTab((prevActiveTab) => (prevActiveTab === id ? null : id));
  // };

  const maskTransitions = useTransition(showMenu, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: "translateY(-100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(-100%)" },
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

  //   useEffect(() => {
  //     const handleClickOutside = (event) => {
  //       if (
  //         modalRef.current &&
  //         !modalRef.current.contains(event.target)
  //       ) {
  //         setActiveTab(null); // Close the modal when clicked outside
  //         setModalOpen(false); // Update modal state
  //       }
  //     };

  //     // Add event listener when component mounts
  //     document.addEventListener('mousedown', handleClickOutside);

  //     // Remove event listener when component unmounts
  //     return () => {
  //       document.removeEventListener('mousedown', handleClickOutside);
  //     };
  // }, [modalOpen]);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       modalRef.current &&
  //       !modalRef.current.contains(event.target)
  //     ) {
  //       setActiveTab(null);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  const handleTabClick = (id) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === id ? null : id));
  };

  const closeModal = () => {
    setActiveTab(null);
  };

  const ModalContentWrapper = ({ component, closeModal, color }) => {
    const router = useRouter();

    const handleClick = (e, href) => {
      e.stopPropagation();
      closeModal();
      if (href) {
        router.push(href);
      }
    };

    return (
      component &&
      React.cloneElement(component, {
        closeModal,
        onClick: handleClick,
        hoverText: color,
      })
    );
  };

  const handleLinkClick = () => {
    setShowMenu(false); // Close the menu when a link is clicked
  };

  return (
    <div>
      <MediaQuery min="lg">
        <div
          className={`${
            active === true
              ? "w-full p-[10px] px-[40px] bg-white fixed top-0 left-0 z-10"
              : "w-full p-[10px] px-[40px] bg-white fixed top-0 left-0 z-10"
          } px-[40px] text-white`}
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
                          <button onClick={() => handleTabClick(id)}>
                            {label}
                          </button>
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
                          <ModalContentWrapper
                            component={component}
                            closeModal={closeModal}
                            color="#016EF8"
                          />
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
                          <button onClick={() => handleTabClick(id)}>
                            {label}
                          </button>
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
                          <ModalContentWrapper
                            component={component}
                            closeModal={closeModal}
                            color="#016EF8"
                          />
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
      <MediaQuery max="lg">
        <div
          className={`${
            active === true
              ? "w-full p-[10px] px-[40px] bg-white  fixed top-0 left-0 z-10"
              : "bg-white p-3"
          } px-[40px] text-white border-b border-[#e4e4eb]`}
        >
          <div className="flex justify-between items-center gap-2">
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
              )
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
                      <Image
                        src={Logo}
                        className="w-full h-full object-fit"
                        alt="logo"
                      />
                    </div>
                    <button
                      className="text-black"
                      onClick={() => setShowMenu(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="36"
                        height="36"
                      >
                        <path
                          d="M6 18L18 6M6 6l12 12"
                          stroke="black"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </div>
                  <hr />
                  <div className="font-bold text-center text-[16px] text-gray-800">
                    <Collapsible
                      trigger={
                        <div className="px-[32px]  flex items-center justify-center">
                          <p className="pl-[32px] py-[20px] hover:text-[#E45F11]">
                            {" "}
                            Solutions
                          </p>
                          <p>
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
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
                        <div className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link
                            href="/solutions/research-analytics"
                            onClick={handleLinkClick}
                          >
                            Research and Analytics
                          </Link>
                        </div>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link 
                            href="/solutions/business-strategy"
                            onClick={handleLinkClick}
                          >
                            Strategy and Operations Transformation
                          </Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/solutions/training-development" onClick={handleLinkClick}>
                            Training and development
                          </Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/solutions/information-technology" onClick={handleLinkClick}>
                            Technology and Software Development
                          </Link>
                        </p>
                      </div>
                    </Collapsible>

                    <Collapsible
                      trigger={
                        <div className="px-[32px] flex items-center justify-center">
                          <p className="pl-[32px] py-[20px] hover:text-[#E45F11]">
                            Industry
                          </p>
                          <p>
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
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
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/industry/industries/consumer" onClick={handleLinkClick}>
                            Consumer and Retail Market
                          </Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/industry/industries/financial" onClick={handleLinkClick}>
                            Financial Services
                          </Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/industry/industries/hospitality" onClick={handleLinkClick}>
                            Hospitality and Tourism
                          </Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/industry/industries/real-estate" onClick={handleLinkClick}>
                            Real Estate
                          </Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/industry/industries/technology" onClick={handleLinkClick}>
                            Technology and Finance
                          </Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/industry/industries/government" onClick={handleLinkClick}>
                            Government and Non-for-Profit
                          </Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/industry/industries/oil-gas" onClick={handleLinkClick}>
                            Oil and Gas
                          </Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/industry/industries/industrial-manufacturing" onClick={handleLinkClick}>
                            Industrial Manufacturing
                          </Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/industry/industries/telecom-media" onClick={handleLinkClick}>
                            Telecommunication and Media
                          </Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/industry/industries/Entertainment and Creative Industry" onClick={handleLinkClick}>
                            Entertainment and Creative Industry
                          </Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/industry/industries/health-social-care" onClick={handleLinkClick}>
                            Health and Social Care
                          </Link>
                        </p>
                        
                      </div>
                    </Collapsible>
                    <Collapsible
                      trigger={
                        <div className="px-[32px]  flex items-center justify-center">
                          <p className="pl-[32px] py-[20px] hover:text-[#E45F11]">
                            SaaS Products
                          </p>
                          <p>
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
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
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/product/appetiza" onClick={handleLinkClick}>Appetiza</Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/product/career-fun" onClick={handleLinkClick}>Career Fun</Link>
                        </p>
                      </div>
                    </Collapsible>
                    <Collapsible
                      trigger={
                        <div className="px-[32px] flex items-center justify-center">
                          <p className="pl-[32px] py-[20px] hover:text-[#E45F11]">
                            Programs
                          </p>
                          <p>
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
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
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/program/dialectics" onClick={handleLinkClick}>The Dialetics</Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/program/leadership-summit" onClick={handleLinkClick}>
                            Emerging Marketplace Leader
                          </Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/program/women-tech" onClick={handleLinkClick}>Women in Tech</Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/program/sme-klinic" onClick={handleLinkClick}>SME Klinic</Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/program/ai-advantage" onClick={handleLinkClick}>AI Advantage</Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/program/sme-webinar" onClick={handleLinkClick}>
                            SME Webinar Series
                          </Link>
                        </p>
                      </div>
                    </Collapsible>
                    <Collapsible
                      trigger={
                        <div className="px-[32px] flex items-center justify-center">
                          <p className="pl-[32px] py-[20px] hover:text-[#E45F11]">
                            Resources
                          </p>
                          <p>
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
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
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/insight/news" onClick={handleLinkClick}>News</Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/insights/blogs" onClick={handleLinkClick}>Blogs</Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/insight/case-study" onClick={handleLinkClick}>Case Studies</Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/careers" onClick={handleLinkClick}>Careers</Link>
                        </p>
                      </div>
                    </Collapsible>
                    <Collapsible
                      trigger={
                        <div className="px-[32px] flex items-center justify-center">
                          <p className="pl-[32px] py-[20px] hover:text-[#E45F11]">
                            About Us
                          </p>
                          <p>
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
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
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/about" onClick={handleLinkClick}>Who We Are</Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/clients" onClick={handleLinkClick}>Our Clients</Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/team" onClick={handleLinkClick}>Our Team</Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/industry/projects" onClick={handleLinkClick}>
                            Project Executed
                          </Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/award-recognition" onClick={handleLinkClick}>
                            Award & Recognition
                          </Link>
                        </p>
                        <p className="pl-[10px] py-[20px] hover:text-[#E45F11]">
                          <Link href="/governance-culture" onClick={handleLinkClick}>
                            Governance & Culture
                          </Link>
                        </p>
                      </div>
                    </Collapsible>

                    <div className="px-[32px] flex items-center justify-center">
                      <Link href="/contact" onClick={handleLinkClick}>
                        <p className="pl-[32px] py-[20px] hover:text-[#E45F11]">
                          Contact
                        </p>
                      </Link>
                    </div>
                  </div>
                </animated.div>
              )
          )}
        </div>
      </MediaQuery>
    </div>
  );
};

export default Header;

"use client";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { animated, useTransition } from "@react-spring/web";
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
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setActiveTab(null); // Close the modal when clicked outside
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTabClick = (id) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === id ? null : id));
  };

  const closeModal = () => {
    setActiveTab(null);
  };

  const ModalContentWrapper = ({ component, color }) => {
    const handleClick = (e) => {
      if (activeTab !== null) {
        e.stopPropagation(); // Prevent event propagation only if modal is open
      }
    };
  
    return component && React.cloneElement(component, { closeModal, onClick: handleClick, hoverText: color});
  };

  return (
    <div>
      <MediaQuery min="lg">
        <div
          className={`${
            active === true
              ? "w-full p-[10px] px-[40px] bg-[#016EF8] fixed top-0 left-0 z-10"
              : null
          } px-[40px] text-white border-b border-[#e4e4eb]`}
        >
          <div className="flex justify-between items-center">
            {active ? (
              <>
                <Link href="/">
                  <div className="w-[80px] h-15">
                    <Image
                      src={WhiteLogo}
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
                              ? "nav-links flex gap-2 px-4 cursor-pointer capitalize font-medium text-white border-b-2 border-white hover:scale-105 hover:text-white duration-200 link-underline"
                              : "nav-links flex gap-2 px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-white duration-200 link-underline"
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
                  {navigation_links.map(({ id, label, component }) => (
                    <div
                      key={id}
                      ref={modalRef}
                      className={`modal fixed z-5 inset-0 overflow-y-auto ${
                        activeTab === id ? "block" : "hidden"
                      }`}
                    >
                      <div
                        className={`fixed flex w-full justify-center mt-[90px] min-h-[80vh]  ${
                          activeTab === id
                            ? "animate-slide-in"
                            : "animate-slide-out"
                        }`}
                      >
                        <div className="relative z-10 modal-content bg-[#3781e0] w-full p-8">
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
                                fill="rgba(255,255,255,1)"
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
                              ? "nav-links flex gap-2 px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-[#E45F11] border-b-2 border-[#E45F11] duration-200 link-underline"
                              : "nav-links flex gap-2 px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-[#E45F11] duration-200 link-underline"
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
                  {navigation_links.map(({ id, label, component }) => (
                    <div
                      key={id}
                      className={`modal fixed z-5 inset-0 overflow-y-auto ${
                        activeTab === id ? "block" : "hidden"
                      }`}
                    >
                      <div
                        className={`fixed flex w-full justify-center mt-[90px] min-h-[80vh]  ${
                          activeTab === id
                            ? "animate-slide-in"
                            : "animate-slide-out"
                        }`}
                      >
                        <div className="relative z-10 modal-content bg-gray-600 w-full p-8">
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
                                fill="rgba(255,255,255,1)"
                              >
                                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                              </svg>
                            </span>
                          </div>
                          <ModalContentWrapper component={component} onClick={activeTab !== null ? handleClick : null} color="#6B7280" />
                       
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
              ? "w-full p-[10px] px-[40px] bg-[#016EF8] fixed top-0 left-0 z-10"
              : null
          } px-[40px] text-white border-b border-[#e4e4eb]`}
        >
          <div className="flex justify-between items-center gap-2">
            {active ? (
              <>
                <button className="" onClick={() => setShowMenu(!showMenu)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                  </svg>
                </button>

                <div className="w-[80px] h-15">
                  <Image
                    src={WhiteLogo}
                    alt="logo"
                    className="w-full h-full object-fit"
                  />
                </div>
              </>
            ) : (
              <>
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

                <div className="w-[100px] h-[90px]">
                  {" "}
                  <Image
                    src={Logo}
                    alt="logo"
                    className="w-full h-full object-fit"
                  />{" "}
                </div>
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
                  className="fixed p-3 bg-white top-0 left-0 w-3/5 z-50 h-full shadow "
                >
                  {/* <div className="w-[100px] h-[100px]">
                    <Image src={Logo} className="w-full h-full object-fit" alt="logo" />
                  </div> */}
                  <div className="py-[40px] font-bold text-center text-[16px] text-gray-800">
                    {navigation_links.map(({ id, link, label }) => (
                      <div key={id} className="pl-[32px] py-[20px]">
                        <Link href={link} className="hover:text-[#E45F11]">
                          {label}
                        </Link>
                      </div>
                    ))}
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

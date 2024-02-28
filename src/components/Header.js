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

  const links = [
    {
      id: 1,
      label: "Home",
      link: "/",
      dropdown: false,
    },
    {
      id: 2,
      label: "About",
      link: "about",
      dropdown: true,
    },
    {
      id: 3,
      label: "Portfolio",
      link: "portfolio",
      dropdown: true,
    },
    {
      id: 4,
      label: "Product",
      link: "product",
      dropdown: true,
    },
    {
      id: 5,
      label: "Program",
      link: "program",
      dropdown: true,
    },
    {
      id: 6,
      label: "Solutions",
      link: "solutions",
      dropdown: true,
    },
    {
      id: 7,
      label: "Contact",
      link: "contact",
      dropdown: true,
    },
  ];

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
                <div className="w-[80px] h-15">
                  <Image
                    src={WhiteLogo}
                    alt="logo"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div>
                  <ul className="flex gap-2">
                    {navigation_links.map(
                      ({ id, link, label, dropdown, dropdown_item }) => (
                        <li
                          key={id}
                          className="nav-links flex gap-2 px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-white duration-200 link-underline"
                        >
                          <Link href={link}>{label}</Link>
                          {dropdown && (
                            <div>
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="inline-flex w-full justify-center rounded-md   text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      height="24"
                                      fill="rgba(255,255,255,1)"
                                    >
                                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                    </svg>
                                  </Menu.Button>
                                </div>
                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                    {dropdown_item &&
                                      dropdown_item.map(
                                        ({ id, label, link }) => (
                                          <Menu.Item key={id}>
                                            <button className="text-gray-900 hover:text-[#016EF8] group flex w-full items-center rounded-md px-2 py-2 text-sm">
                                              <Link href={link}>{label}</Link>
                                            </button>
                                          </Menu.Item>
                                        )
                                      )}

                                  
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </div>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="w-[100px] h-[90px]">
                  <Image
                    src={Logo}
                    alt="logo"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div>
                  <ul className="flex gap-2">
                    {navigation_links.map(({ id, link, label, dropdown, dropdown_item }) => (
                      <li
                        key={id}
                        className="nav-links flex gap-2 px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-[#E45F11] duration-200 link-underline"
                      >
                        <Link href={link}>{label}</Link>
                        {dropdown && (
                            <div>
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="inline-flex w-full justify-center rounded-md   text-sm font-medium text-gray-500 hover:text-[#E45F11] hover:bg-[#E45F11]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
                                  </Menu.Button>
                                </div>
                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                    {dropdown_item &&
                                      dropdown_item.map(
                                        ({ id, label, link }) => (
                                          <Menu.Item key={id}>
                                            <button className="text-gray-900 hover:text-[#E45F11] group flex w-full items-center rounded-md px-2 py-2 text-sm">
                                              <Link href={link}>{label}</Link>
                                            </button>
                                          </Menu.Item>
                                        )
                                      )}
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </div>
                          )}
                      </li>
                    ))}
                  </ul>
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
                    {links.map(({ id, link, label }) => (
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

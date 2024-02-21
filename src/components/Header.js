"use client";
import React, { useState, useEffect } from 'react'
import { animated, useTransition } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/bfg-logo.png";
import WhiteLogo from "@/app/bfg-whitelogo.png";
import MediaQuery from './media-query';


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
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const links = [
        {
          id: 1,
          label: "Home",
          link: "/",
        },
        {
          id: 2,
          label: "About",
          link: "about",
        },
        {
          id: 3,
          label: "Portfolio",
          link: "portfolio",
        },
        {
          id: 4,
          label: "Product",
          link: "product",
        },
        {
          id: 5,
          label: "Program",
          link: "program",
        },
        {
          id: 6,
          label: "Solutions",
          link: "solutions",
        },
        {
          id: 7,
          label:"Contact",
          link: "contact",
        },
        
      ];

  return (
    <div>
              <MediaQuery min="lg">

        <div
          className={`${
            active === true ? "w-full p-[10px] px-[40px] bg-[#016EF8] fixed top-0 left-0 z-10" : null
          } px-[40px] text-white border-b border-[#e4e4eb]`}
        >
            <div className="flex justify-between items-center">
                {active ? <>
                <div className="w-[80px] h-15">
                <Image
                  src={WhiteLogo}
                  alt="logo"
                  className="w-full h-full object-fit"
                />
              </div>
              <div>
                  <ul className="flex gap-2">
                  {links.map(({ id, link, label }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{label}</Link>
          </li>
        ))}
                  </ul>
              </div>
              </> 
              : 
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
                  {links.map(({ id, link, label }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-[#E45F11] duration-200 link-underline"
          >
            <Link href={link}>{label}</Link>
          </li>
        ))}
                  </ul>
              </div>
              </> }
           
            </div>
        </div>
        </MediaQuery>

        {/* small screens */}
        <MediaQuery max="lg">
        <div
          className={`${
            active === true ? "w-full p-[10px] px-[40px] bg-[#016EF8] fixed top-0 left-0 z-10" : null
          } px-[40px] text-white border-b border-[#e4e4eb]`}
        >
            <div className="flex justify-between items-center gap-2">
            {active ? 
            <>
            <button className="" onClick={() => setShowMenu(!showMenu)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(255,255,255,1)"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>   
                       </button>     

                       <div className="w-[80px] h-15">
                <Image
                  src={WhiteLogo}
                  alt="logo"
                  className="w-full h-full object-fit"
                />
              </div>

             </> 
             : 
             <>
              <button className="" onClick={() => setShowMenu(!showMenu)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(0,0,0,1)"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>     
              </button>     

            <div className="w-[100px] h-[90px]">
              {" "}
              <Image src={Logo} alt="logo" className="w-full h-full object-fit" />{" "}
            </div>
            </>}
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
            <Link href={link} className="hover:text-[#E45F11]">{label}</Link>
          </div>
        ))}
                    
                  </div>
                </animated.div>
              )
          )}
          </div>
          </MediaQuery>
    </div>
  )
}

export default Header
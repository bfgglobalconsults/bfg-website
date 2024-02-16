"use client";
import React, { useState, useEffect } from 'react'
import { animated, useTransition } from "@react-spring/web";
import Image from "next/image";
import Logo from "@/app/bfg-logo.png";
import WhiteLogo from "@/app/bfg-whitelogo.png";


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

  return (
    <div>
        <div
          className={`${
            active === true ? "w-full p-[10px] bg-[#037bd1] fixed top-0 left-0 z-10" : null
          } p-[10px] text-white border-b border-dotted border-[#037bd1]`}
        >
            <div className="flex justify-between items-center">
                {active ? <><div>
                <Image
                  src={WhiteLogo}
                  alt="logo"
                  className="w-[80px] h-[68px] object-fit"
                />
              </div>
              <div>

              </div>
              </> 
              : 
              <>
            <div>
                <Image
                  src={Logo}
                  alt="logo"
                  className="w-[120px] h-[100px] object-fit"
                />
              </div>
              <div>

              </div>
              </> }
           
            </div>
        </div>
    </div>
  )
}

export default Header
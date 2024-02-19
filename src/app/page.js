"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Banner from "../../public/assets/header-banner.png";
import Logo from "./bfg-logo.png";
import Animation from "../../public/office_banner.jpg";

export default function Main() {
  

  return (
    <>
      <div className="py-[30px]">
        <div className="w-full flex items-center">
          <div className="w-[50%]">
              <div className="p-[40px]">
                <h3 className="font-bold text-4xl text-[#E45F11]">We Grow Your Business & Organization with the Latest Technology</h3>
                <p className="text-xl my-2">With expertise  in research and analytics, business strategy and operations, training and development, and information technology, we empower companies to thrive in today's dynamic business landscape.  </p>
              </div>
          </div>
          <div className="w-[50%]">
              <Image src={Banner} alt="banner" className="w-full h-full object-fit" />
          </div>
        </div>
      </div>
    </>
  );
}

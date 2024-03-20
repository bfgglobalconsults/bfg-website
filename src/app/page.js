"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "./bfg-logo.png";
import Animation from "../../public/office_banner.jpg";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date("2024-03-21") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <>
      <div className="w-screen h-screen">
        <header className="w-full bg-white p-2 border-b-2 text-black">
          <div className="w-[100px] h-[calc(100vh - 500px)]">
            <Image src={Logo} alt="Logo" width="100%" height="100%" />
          </div>
        </header>
        {/* <main className="flex min-h-screen flex-col items-center justify-between">

    </main> */}
        <div className="bg-[#037bd1] text-white p-2 lg:p-3">
          <h1 className="sm:text-3xl  lg:text-4xl text-white font-bold text-center my-6">
            <span className="text-white font-inter">
              Planned Maintenance in Progress
            </span>
          </h1>
          <p className="text-center md:px-[50px] lg:px-[70px]">
            <span className="text-white text-2xl font-inter">
              Welcome to the Business Site of{" "}
              <b className="text-[#df350a]">BFG Global Consulting Limited</b>
            </span>
          </p>
          <p className="text-center sm:p-5 text-xl font-inter">
            Our site is currently scheduled for maintenance and service update.
            While we are working to complete our maintenance
          </p>
          <div className="text-2xl text-center font-mono">in</div>
          <div className="text-5xl lg:text-6xl text-center flex w-full items-center justify-center my-8">
            <div className="w-18 lg:w-24 mx-1 p-2 bg-white text-[#037bd1] rounded-lg">
              <div className="font-mono leading-none">
                {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
              </div>
              <div className=" uppercase text-sm leading-none">Days</div>
            </div>
            <div className="w-18 lg:w-24 mx-1 p-2 bg-white text-[#037bd1] rounded-lg">
              <div className="font-mono leading-none">
                {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
              </div>
              <div className=" uppercase text-sm leading-none">Hours</div>
            </div>
            <div className="w-18 lg:w-24 mx-1 p-2 bg-white text-[#037bd1] rounded-lg">
              <div className="font-mono leading-none">
                {timeLeft.minutes < 10
                  ? `0${timeLeft.minutes}`
                  : timeLeft.minutes}
              </div>
              <div className=" uppercase text-sm leading-none">Minutes</div>
            </div>
            <div className="text-2xl mx-1 font-mono">and</div>
            <div className="w-18 lg:w-24 mx-1 p-2 bg-white text-[#037bd1] rounded-lg">
              <div className="font-mono leading-none">
                {timeLeft.seconds < 10
                  ? `0${timeLeft.seconds}`
                  : timeLeft.seconds}
              </div>
              <div className=" uppercase text-sm leading-none">Seconds</div>
            </div>
          </div>
          <p className="text-center text-lg lg:text-2xl font-inter">
            For immediate enquiry on our services
          </p>
          <div className="font-inter flex justify-center gap-3">
            <p className="font-inter flex  gap-1 lg:gap-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                </svg>
              </span>{" "}
              <span>+2348184165533</span>
            </p>
            <p className=" font-inter flex  gap-1 lg:gap-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                </svg>
              </span>{" "}
              <span>info@bfgconsults.com</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

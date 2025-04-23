import Image from "next/image";
import React from "react";
import TopBanner from "../../../public/assets/career-img.jpg";
import Link from "next/link";
import Slides from "@/components/Slides";
import Banner from "../../../public/assets/career-banners-new.jpg";

const page = () => {
  return (
    <>
      <div className="lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Join our Team
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 items-center justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
           Careers
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
Discover a world of possibilities. Elevate your career with us a place where passion meets purpose.          </p>
        </div>

        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={Banner}
            alt="about-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
              </div>
              <hr className="my-3" />
              <div>
                  <Slides />
        </div>
        <div className="my-8">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Our Jobs
          </span>
          <div className="w-full flex gap-10 items-center justify-between my-4">
            <h3 className="w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
              Open Jobs
                      </h3>
            <Link className="w-[50%] text-[#999] text-decoration-underline hover:text-[#E26015] cursor-pointer" href="https://career-bfgconsults.odoo.com/jobs">
                View Latest Jobs
              
            </Link>
          </div>
        </div>
        </div>
      {/* <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
        <Image
          src={TopBanner}
          alt="top-banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h3 className="text-white font-bold text-4xl md:text-3xl lg:text-4xl">
            Find your dream jobs at BFG Global Consulting
          </h3>
          <p className="text-[#ffffff9a] my-2 text-lg lg:text-2xl">
            Join us and unlock your potential with meaningful work that makes a
            difference.
          </p>
        </div>
      </div>
      <div className="py-[30px]">
        <div className="p-[40px]">
          <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
            Latest Jobs
          </h3>
          <div className="relative py-12 bg-[#f8f5f5] my-8">
            <Link href="/careers/jobs">
              <div className="w-full flex gap-6 flex-wrap justify-center px-8">
                <div className="bg-white w-[100%] lg:w-[50%] shadow-xl p-4 py-8 cursor-pointer hover:border-b hover:border-[#016EF8]">
                  <div className="flex items-center gap-8">
                    <div className="p-2 rounded-full bg-[#7db6ff]">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="36"
                          height="36"
                          fill="rgba(1,110,248,1)"
                        >
                          <path d="M9 13V16H15V13H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V13H9ZM11 11H13V14H11V11ZM7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V11H15V9H9V11H2V6C2 5.44772 2.44772 5 3 5H7ZM9 3V5H15V3H9Z"></path>
                        </svg>
                      </span>
                    </div>
                    <div>
                      <div className="w-full flex gap-8 justify-between">
                        <div className="flex flex-wrap gap-2 justify-between">
                          <span className="text-[#656565]">Type:</span>
                          <p>Hybrid</p>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-between">
                          <span className="text-[#656565]">Experience:</span>
                          <p>1 - 3 Years</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xl lg:text-2xl font-bold my-2">
                          Junior Product Designer
                        </p>
                      </div>
                      <div>
                        <span className="text-lg">Abuja</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default page;

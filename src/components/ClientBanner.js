"use client";
import Image from "next/image";
import React, { useState } from "react";
import VideoImg from "../../public/assets/video-img.png";
import SensangImg from "../../public/assets/sensang-img.png";
import GigsImg from "../../public/assets/gigs-img.png";
import TwentyImg from "../../public/assets/12twenty-img.png";
import Link from "next/link";

const ClientBanner = () => {
    const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="bg-[#E26015]">
        <div className="p-12">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Clients
          </span>
          <div className="w-full flex flex-col lg:flex-row gap-7 justify-between my-4">
            <div className="w-[100%] lg:w-[30%]">
              <h3 className="text-white text-4xl">
                Our Clients Success Stories
              </h3>
            </div>
            <div className="w-[100%] lg:w-[40%]">
              <p className="text-white text-xl">
                Discover how businesses like yours are driving change and thriving with our high-impact consulting and technology solutions.
              </p>
            </div>
            <div className="w-[100%] lg:w-[30%]">
              <Link href="/clients">
                <button className="py-2 px-4 rounded-3xl bg-white hover:bg-[#222] text-[#E26015] hover:text-white font-semibold">
                  See More
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full relative">
            <Image src={VideoImg} alt="video-img" className="w-full" />
            <button
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-xl font-bold rounded-xl transition hover:bg-opacity-60"
              onClick={() => setShowVideo(true)}
              style={{ width: "100%", height: "100%" }}
              aria-label="Watch Video"
            >
              <span className="bg-red-600 hover:bg-red-700 p-3 lg:p-6 rounded-2xl">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 md:w-8 md:h-8" 
                  fill="rgba(255,255,255,1)">
                  <path d="M6 20.1957V3.80421C6 3.01878 6.86395 2.53993 7.53 2.95621L20.6432 11.152C21.2699 11.5436 21.2699 12.4563 20.6432 12.848L7.53 21.0437C6.86395 21.46 6 20.9812 6 20.1957Z"></path>
                </svg>
              </span>
              {/* ▶ Watch Video */}
            </button>
          </div>
          {/* <div className="w-full flex flex-col lg:flex-row gap-10 my-6">
            <div className="w-[100%] lg:w-[30%] p-3 border border-white rounded-xl">
              <p className="text-white">
                &quot; BFG Global Consult has been a trusted partner to Sensang
                Constructions LLC, Nigeria, delivering expert consulting
                services that drive growth & excellence. Their exceptional
                support has been instrumental in our success. &quot;
              </p>
              <div className="my-4 flex gap-2">
                <div>
                  <Image src={SensangImg} alt="sendsang-img" className="" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Arch Felix Elisha
                  </h4>
                  <p className="text-white">
                    MD, Sensang Constructions LLC, Nigeria{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[100%] lg:w-[30%] p-3 border border-white rounded-xl">
              <p className="text-white">
                &quot; BFG Global Consult has been an invaluable partner to GIG
                Travels, UK, providing expert guidance & tailored solutions.
                Their exceptional service has empowered our success. Highly
                recommended. &quot;
              </p>
              <div className="my-4 flex gap-2">
                <div>
                  <Image src={GigsImg} alt="gigs-img" className="" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Adelanke Olasehinde Alade
                  </h4>
                  <p className="text-white">
                    Managing Partner/CEO, GIG Travels, UK{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[100%] lg:w-[30%] p-3 border border-white rounded-xl">
              <p className="text-white">
                &quot; BFG Global Consult embodies excellence, innovation, and
                commitment. Their expertise & passion deliver tailored solutions
                that exceed expectations. We highly recommend them for top-notch
                consulting services. A trusted partner in achieving success.
                &quot;
              </p>
              <div className="my-4 flex gap-2">
                <div>
                  <Image src={TwentyImg} alt="twenty-img" className="" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Prince Arinze Alozie
                  </h4>
                  <p className="text-white">MD, 12Twenty Limited, Nigeria</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="relative w-full max-w-2xl aspect-video">
            <button
              className="absolute -top-8 right-0 bg-black bg-opacity-50 p-2 w-15 h-15 rounded-full text-white text-2xl z-10"
              onClick={() => setShowVideo(false)}
              aria-label="Close Video"
            >
              ×
            </button>
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/OixG0QzmKwQ?si=wSHfLYZ2SErN2ule" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientBanner;

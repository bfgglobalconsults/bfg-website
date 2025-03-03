import Slides from "@/components/Slides";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FirstNews from "../../../../../../public/assets/last-research.jpg";
const page = () => {
  return (
    <>
      <div className="lg:mt-[150px] p-10">
        <div className="inline-block bg-white border-2 border-[#E26015] p-2 rounded-3xl">
          <Link href="/">
            <div className="flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                >
                  <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                </svg>
              </span>
              <span className="font-semibold">Back</span>
            </div>
          </Link>
        </div>
        <div className="w-full my-4">
          <h3 className="w-[100%]  text-[#333] font-bold text-3xl md:text-3xl lg:text-5xl">
            PocketFI: Market Research and Digital Platform Development for
            Nigeria&apos;s P2P Cryptocurrency Ecosystem
          </h3>
        </div>
        <div className="relative w-full h-[300px] lg:h-[500px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={FirstNews}
            alt="about-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="my-4">
          <Slides />
        </div>
        <div className="p-1 lg:p-12">
          <h3 className="text-2xl text-black font-semibold my-3">
            Project Overview
          </h3>
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              <p className="text-lg text-[#9b8b8b]">
                PocketFI engaged us with a dual objective: to conduct
                comprehensive market research on Nigeria&apos;s P2P cryptocurrency
                ecosystem and to design and develop a user-friendly website and
                mobile application for their platform. With Nigeria&apos;s
                crypto market experiencing rapid growth—driven by inflation
                hedging and economic uncertainties—PocketFI aims to offer a
                secure and reliable trading experience in this evolving
                landscape. The platform is designed to address key challenges in
                Nigeria&apos;s P2P crypto trading, including security risks,
                fraudulent transactions, and the absence of trusted
                intermediaries or escrow services, ensuring a safer and more
                efficient trading environment.
              </p>
              <br />
            </div>
            <div className="hidden lg:block lg:w-[20%]">
              <div className="bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-3">
                <h3 className="font-semibold my-2 text-lg">Details</h3>
                <div className="flex justify-between">
                  <p className="text-[#999]">Date</p>
                  <p className="text-[#999]">Jan 11, 2025</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Category</p>
                  <p className="text-[#999]">Research</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Reading</p>
                  <p className="text-[#999]"> 2 Min</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Author</p>
                  <p className="text-[#999]">
                    BFG Product
                    <br /> Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* problem statement */}
        <div className="p-1 lg:p-12">
          <h3 className="text-2xl text-black font-semibold my-3">
            Problem Statement
          </h3>
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              <p className="text-lg text-[#9b8b8b]">
                Despite its rapid growth, Nigeria&apos;s cryptocurrency market
                faces significant challenges that hinder the development of a
                secure and trustworthy P2P trading environment. The exit of
                major platforms like Binance and Paxful has left a gap in
                accessible and reliable trading services, exposing traders to
                increased risks.{" "}
              </p>
              <br />
              <p className="text-lg text-[#9b8b8b]">
                The absence of dependable escrow systems and the rise in
                fraudulent activities have further contributed to market
                volatility and distrust. PocketFI aimed to bridge this gap by
                developing a solution that enhances security, minimizes fraud,
                and fosters a seamless and user-friendly trading experience in
                Nigeria&apos;s evolving crypto landscape{" "}
              </p>
            </div>
            <div className="hidden lg:block lg:w-[20%]"></div>
          </div>
        </div>
        {/* problem statement end */}

        {/* approach used */}
        <div className="p-1 lg:p-12">
          <h3 className="text-2xl text-black font-semibold my-3">
            Approach (The How)
          </h3>
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              <p className="text-lg text-[#9b8b8b]">
                Our approach began with in-depth market research, incorporating surveys and interviews with local crypto traders, platform users, and industry experts. We analyzed key market gaps, particularly in security, user experience, and regulatory challenges. Leveraging these insights, we developed a strategic framework for PocketFI, focusing on a secure, user-friendly platform with integrated escrow services and a robust verification system to mitigate fraud.
              </p>
              <br />{" "}
              <p className="text-lg text-[#9b8b8b]">
                Additionally, we provided guidance on regulatory compliance and seamless integration with the evolving decentralized finance ecosystem. The project culminated in a detailed market research report and the complete design of PocketFI&apos;s website and mobile application.
              </p>
              <br />
            </div>
            <div className="hidden lg:block lg:w-[20%]"></div>
          </div>
        </div>
        {/* approach used end */}

        {/* solution */}
        <div className="p-1 lg:px-12">
          <h3 className="text-2xl text-black font-semibold my-3">
            Solution Introduced (The Problem Solving Innovation)
          </h3>
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              <p className="text-lg text-[#9b8b8b]">
               Leveraging our research insights, we crafted a tailored market entry strategy for PocketFI, ensuring the platform was secure, user-friendly, and efficient. To address fraud and build trust, we integrated a robust escrow service, serving as a secure intermediary between buyers and sellers.
              </p>
              <br />
              <p className="text-lg text-[#9b8b8b]">
               The platform&apos;s design prioritized a seamless user experience, featuring real-time trade tracking, identity verification, and multi-layered security protocols to protect transactions. Additionally, we provided PocketFI with a strategic roadmap to navigate Nigeria&apos;s regulatory landscape, ensuring compliance while fostering a safe and scalable P2P trading environment. </p>
            </div>
            <div className="hidden lg:block lg:w-[20%]"></div>
          </div>
        </div>
        {/* solution end */}
      </div>
    </>
  );
};

export default page;

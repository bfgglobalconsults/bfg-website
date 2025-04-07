import Slides from "@/components/Slides";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FirstNews from "../../../../../public/assets/ceo-news-banner.jpg";
import AwardCert from "../../../../../public/assets/award-cert.jpg";
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
           Navigating Funding Challenges: Insights on How Nigerian Startups Can Attract Investment 
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
          {/* <h3 className="text-2xl text-</p>black font-semibold my-3">
            Laying the Foundation: Vision & Strategy
          </h3> */}
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              <p className="text-lg text-[#9b8b8b]">
                One of the biggest hurdles for startups in Africa&apos;s challenging economic landscape is access to venture capital funding. According to the <span className="text-black font-semibold">Big Deal Data Report</span>, African tech startups raised only <span className="text-black font-semibold">$780 million in H1 2024</span>, reflecting a <span className="text-black font-semibold">31% decline</span> from the previous half and a <span className="text-black font-semibold"> staggering 57% drop</span> from H1 2023. This marks the lowest funding level since H2 2020, signalling a significant downturn in investment within Africa&apos;s startup ecosystem.
              </p>
              <br />

              <p className="text-lg text-[#999]">
                Recognizing this pressing issue, <span className="text-black font-semibold">ADBN-Market TV</span> reached out to <span className="text-black font-semibold">our Managing Partner/CEO – Mr. Festus BELLO</span> to share expert insights on how Nigerian startups can successfully attract funding for their businesses and products.
              </p>
              <br />

              <p className="text-lg text-[#999]">
               In an exclusive interview aired on <span className="text-black font-semibold">DSTV Channel 258</span>, the discussion explored key strategies that entrepreneurs must adopt to secure investment in today&apos;s competitive market. The session highlighted the critical <span className="text-black font-semibold">&quot;Must Do,&quot; &quot;Should Not Do,&quot; and &quot;Could Do &quot;</span> approaches that can help startups stay afloat, enhance their product-market fit, and drive long-term sustainability and profitability.
              </p>
              <br />
              <p className="text-lg text-[#999]">
               As the startup funding landscape evolves, equipping entrepreneurs with the right knowledge and strategies remains crucial. 
              </p>

              <br />
              <p className="text-lg text-[#999]">
               Watch Full Video - <Link href="https://www.youtube.com/watch?v=HKbSMvNSQIk" target="_blank" className="text-black">https://www.youtube.com/watch?v=HKbSMvNSQIk</Link> 
              </p>
             
            </div>
            <div className="hidden lg:block lg:w-[20%]">
              <div className="bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-3">
                <h3 className="font-semibold my-2 text-lg">Details</h3>
                <div className="flex justify-between">
                  <p className="text-[#999]">Date</p>
                  <p className="text-[#999]">Jan 21, 2025</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Category</p>
                  <p className="text-[#999]">Ceo Message</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Reading</p>
                  <p className="text-[#999]"> 1 Min</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Author</p>
                  <p className="text-[#999]">
                    BFG Consults
                    <br /> News
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* latest news */}
      </div>
    </>
  );
};

export default page;

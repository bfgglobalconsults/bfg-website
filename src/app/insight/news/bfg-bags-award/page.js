import Slides from "@/components/Slides";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FirstNews from "../../../../../public/assets/bfg-award.jpg";

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
            BFG consults bags UK award for research
          </h3>
        </div>
        <div className="relative w-full h-[200px] lg:h-[500px] bg-cover bg-center flex justify-center items-center">
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
          {/* <h3 className="text-2xl text-black font-semibold my-3">
            Laying the Foundation: Vision & Strategy
          </h3> */}
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              <p className="text-lg text-[#9b8b8b]">
                BFG Global Consults, an emerging name in Management Consulting,
                proudly announces its recent accolade as the recipient of the
                Best International Business Research & Analytics Specialists
                2023–UK Award from Wealth and Finance International.{" "}
              </p>
              <br />

              <p className="text-lg text-[#999]">
                {" "}
                This prestigious honor showcases BFG Global Consults’ commitment
                to delivering exceptional research and analytical solutions
                globally while actively promoting Nigeria’s market intelligence
                on the global stage.{" "}
              </p>
              <br />

              <p className="text-lg text-[#999]">
                Festus Bello, the Founder and Managing Partner at BFG Consults,
                expressed gratitude for this esteemed recognition: “Last week,
                we were honoured to receive the Management Consulting Award for
                Best International Business Research & Analytics Specialists
                2023–UK from Wealth and Finance International, a distinguished
                name in international finance and public relations in the UK.{" "}
              </p>
              <br />
              <p className="text-lg text-[#999]">
                “I am truly grateful to Wealth and Finance International for
                this prestigious recognition, marking our success after a
                rigorous screening process. I extend my heartfelt
                congratulations to our Research and Analytics Consulting Team.{" "}
              </p>

              <br />
              <p className="text-lg text-[#999]">
                “Their dedication and adherence to global standards have
                consistently delivered valuable insights and analytical
                excellence to our clients and stakeholders.”
              </p>
              <br />
              <p className="text-lg text-[#999]">
                BFG Global Consults operates at the forefront of research,
                strategy, workforce training, and information technology,
                enabling companies to thrive amidst today’s dynamic business
                landscape. The company’s dedication to exporting services that
                highlight Nigeria’s market intelligence on a global scale has
                been a hallmark of its operations.
              </p>
              <br />
              <p className="text-lg text-[#999]">
                “Our commitment goes beyond excellence in our services; we take
                pride in exporting services that epitomize Nigeria’s market
                intelligence to the global stage,” stated Festus Bello. “This
                recognition from Wealth and Finance International reaffirms our
                mission to deliver growth and transformational impact not only
                to businesses in Africa but also beyond its borders.”
              </p>
              <br />
              <p className="text-lg text-[#999]">
                BFG Global Consults is renowned for deploying innovative
                strategies tailored to foster growth for businesses and
                organizations. Positioned at the nexus of research, strategy,
                workforce training, and technology, the company empowers
                enterprises across sectors, from startups to large enterprises,
                through a diverse spectrum of consulting practices.
              </p>
              <br />
              <p className="text-lg text-[#999]">
                The award underscores the company’s commitment to advancing
                marketplace impact across human networks and business sectors.
                With a vision to deliver growth and transformational impact to
                underserved businesses and organizations in Africa and beyond,
                BFG Global Consults continuously aims to elevate standards and
                drive excellence in the industry.
              </p>
            </div>
            <div className="hidden lg:block lg:w-[20%]">
              <div className="bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-3">
                <h3 className="font-semibold my-2 text-lg">Details</h3>
                <div className="flex justify-between">
                  <p className="text-[#999]">Date</p>
                  <p className="text-[#999]">Dec 17, 2023</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Category</p>
                  <p className="text-[#999]">Awards</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Reading</p>
                  <p className="text-[#999]"> 2 Min</p>
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

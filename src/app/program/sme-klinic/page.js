import Image from "next/image";
import React from "react";
import TopBanner from "../../../../public/assets/sme-klinic.png";
import KlinicGroup from "../../../../public/assets/klinic-card.png";
import Beauty from "../../../../public/assets/sme-woman.png";
import Slides from "@/components/Slides";

const page = () => {
  return (
    <>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <div className="">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            SME Klinic
          </span>
          <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
            <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
              SME Klinic
            </h3>
            <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
              Peer-to-Peer Learning for SME Leaders
            </p>
          </div>
        </div>
        <div className="px-1 py-12">
          <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
            <Image
              src={TopBanner}
              alt="top-banner"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="py-[1px] lg:py-[10px]">
          <div className="p-2 lg:p-[40px]">
            <div className="my-4">
              <Slides />
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-4 my-4">
            <div className="w-[100%] lg:w-[60%]">
              <p className="text-[#999] my-4">
                The SME Klinic is a unique meet and greet conversation program
                hosted by BFG Global Consults, designed specifically for SME
                leaders. This initiative provides an invaluable opportunity for
                entrepreneurs and business owners to share knowledge, discuss
                challenges, and explore innovative solutions regarding the
                future of work.
              </p>
              <p className="text-[#999] my-4">
                In today’s fast-paced business environment, SMEs face numerous
                challenges, including navigating economic uncertainties,
                adapting to technological advancements, and meeting changing
                customer demands. The SME Klinic recognizes the importance of
                collaboration and peer support in addressing these issues. By
                bringing together a diverse group of leaders, we foster an
                environment where participants can learn from one another’s
                experiences and insights.
              </p>
              <p className="text-[#999] my-4">
                Each session is structured to encourage open dialogue, allowing
                participants to voice their concerns, ask questions, and share
                success stories. Resource persons within our firm facilitate and
                drive discussions, offering expert perspectives on topics such
                as digital transformation, workforce development, and
                sustainable business practices.
              </p>
               <p className="text-[#999] my-4">
              The SME Klinic is not only about discussion; it is also a platform
              for actionable insights. At BFG Consults, we believe that the
              future of work is collaborative, and the SME Klinic embodies this
              belief. By fostering connections among SME leaders, we aim to
              create a community that supports innovation and shared learning.
            </p>
            </div>
            <div className="w-[100%] lg:w-[40%] relative">
              <Image
                src={KlinicGroup}
                alt="klinic-image"
                className="w-full h-full object-fit rounded-r-md"
              />
              {/* <div className="w-full h-[400px] shadow-lg rounded-xl relative">
                <div className="bg-[#E26015] py-10 px-3 rounded-xl">
                  <div className="w-[60%]">
                    <h4 className="text-white font-semibold text-3xl lg:text-3xl">
                      Shaping Nigeria&apos;s Business Future
                    </h4>
                    <p className="text-white text-sm my-4 pr-4">
                      Aren&apos;t you ready to empower your business with
                      knowledge
                    </p>
                  </div>
                </div>
                <div className="bg-white py-4 px-3">
                  <div className="w-[60%]">
                    <ul className="text-[#333] list-disc marker:text-[#E26015] pl-4">
                      <li>Various Insights, Strategies and Growth.</li>
                      <li>Join Our SME Webinar Series Today!</li>
                    </ul>
                    <button className="bg-[#E26015] hover:bg-black my-4 text-white rounded-2xl py-2 px-4">
                      Join Now!
                    </button>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-[45%] h-full">
                  <Image
                    src={Beauty}
                    alt="beauty-image"
                    className="w-full h-full object-cover rounded-r-md"
                  />
                </div>
              </div> */}
            </div>
          </div>
          <div className="">
           

            <p className="font-semibold my-4">Register for the next sessions</p>
            <button className="bg-[#041926] py-2 px-4 flex gap-2 my-3 rounded-2xl">
              <span className="text-white">Apply for our next session</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

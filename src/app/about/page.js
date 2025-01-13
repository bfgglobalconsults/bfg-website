import Image from "next/image";
import React from "react";
// import Banner from "../../../public/assets/about-banner.png";
import Banner from "../../../public/assets/about-team.jpg";

import Picture from "../../../public/assets/bello-frame.png";
import Statistics from "@/components/Statistics";
import OurStand from "@/components/OurStand";

const page = () => {
  return (
    <>
      <div className="lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          About Us
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 items-center justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Our Company
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Discover BFG Consults, where passion meets expertise in business
            consulting. We are more than consultants; we are architects of
            growth, innovators of strategy, & your dedicated partners in
            success.
          </p>
        </div>

        <div className="relative h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={Banner}
            alt="about-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="py-[30px]">
          <div className="">
            <div className="w-full my-4">
              <p className="text-lg text-[#656565] my-3">
                BFG Global Consulting is a management consulting firm that specializes in research, strategy, training, and software development. With offices in Nigeria&apos;s capital city and the United Kingdom, we offer services globally as a solution partner to individuals, businesses, corporate organizations, and government agencies.
                Our company takes pride in its cutting-edge consulting services, which are designed to deliver transformative value for a wide range of businesses and organisations including tech start-ups and emerging brands. 
              </p>
            </div>
            <div className="my-10">
              <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold my-4">
                CEO Message
              </span>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-2 my-4">
              <div className="w-[100%] lg:w-[60%]">
                <h3 className="text-[#333] font-bold text-3xl md:text-3xl lg:text-5xl">
                  Your Growth Partner in a Changing Business Landscape
                </h3>
                <p className=" text-[#999] my-5 text-lg lg:text-xl">
                  I am delighted to address you today as the Managing Partner
                  and CEO of BFG Global Consulting Limited and introduce our
                  firm. With great passion and commitment, our team at BFG
                  Global Consulting is dedicated to assisting organizations from
                  diverse industries in their pursuit of business growth. We aim
                  to be your growth partners, guiding you towards the new
                  opportunities of contemporary business.
                </p>
                <p className=" text-[#999] my-5 text-lg lg:text-xl">
                  At BFG Global Consulting, we understand that the business
                  landscape is constantly evolving, presenting both challenges
                  and prospects for organizations worldwide. In this fast-paced
                  environment, it is crucial for businesses to adapt and thrive
                  to remain competitive. Thats where we come in.
                </p>
                <p className=" text-[#999] my-5 text-lg lg:text-xl">
                  Our expertise lies in deploying and managing innovative
                  solutions that empower businesses and organizations to achieve
                  growth. We firmly believe that success in todays marketplace
                  requires a multidimensional approach, blending research,
                  strategy, workforce training, and information technology. By
                  operating at the intersection of these critical areas, we
                  offer comprehensive consulting services that equip our clients
                  with the tools they need to drive their success.
                </p>
                <p className=" text-[#999] my-5 text-lg lg:text-xl">
                  As we embark on this exciting journey, we invite you to join
                  us in shaping the future of business growth. Whether you are a
                  small startup seeking guidance or a well-established
                  organization looking for fresh insights, BFG Global Consulting
                  is here to support you every step of the way. Our team of
                  experts are ready to listen, understand your unique challenges,
                  and tailor solutions that align with your specific goals.
                </p>
                <p className=" text-[#999] my-5 text-lg lg:text-xl">
                  While you explore our business profile, we thank you for your
                  attention, and we look forward to connecting with you soon.
                  Together, let us embrace the possibilities and create a future
                  of sustainable growth and success.
                </p>
                <div className="bg-[#E26015] px-3 py-6 rounded-2xl">
                  <div className="flex flex-col lg:flex-row justify-center gap-10">
                    <div>
                      <h3 className="text-4xl text-white font-bold">10K+</h3>
                      <p className="text-white">Complete project</p>
                    </div>
                    <div>
                      <h3 className="text-4xl text-white font-bold">20+</h3>
                      <p className="text-white">Team Member</p>
                    </div>
                    <div>
                      <h3 className="text-4xl text-white font-bold">5K+</h3>
                      <p className="text-white">Winning Award</p>
                    </div>
                    <div>
                      <h3 className="text-4xl text-white font-bold">100+</h3>
                      <p className="text-white">Clients covered</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[350px] h-[450px] lg:w-[450px] lg:h-[600px]">
                <Image
                  src={Picture}
                  alt="festus-bello"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <hr className="my-2" />
            <div className="my-4">
              <OurStand />
              </div>
          </div>
        </div>
      </div>
      {/* old view */}
      
      
    </>
  );
};

export default page;

import React from "react";
import Image from "next/image";
import Picture from "../../../public/assets/festus-bello.jpg";

const page = () => {
  return (
    <>
      <div className="py-[30px]">
        <div className="p-[40px]">
          <h2 className="text-3xl text-[#E45F11] font-bold">BFG Global Consulting, LLC</h2>
          <h3 className="text-2xl font-semibold">Your Growth Partner in a Changing Business Landscape</h3>
          <div className="flex gap-2 w-full">
            <div className="w-[70%]">
              <p className="text-lg my-2 text-[#656565]">
                I am delighted to address you today as the <span className="font-bold">Managing Partner</span> and 
                 <span className="font-bold"> CEO</span> of <span className="font-bold">BFG Global Consulting Limited</span> and introduce our firm.
                With great passion and commitment, our team at BFG Global
                Consulting is dedicated to assisting organizations from diverse
                industries in their pursuit of business growth. We aim to be
                your growth partners, guiding you towards the new opportunities of contemporary business. At BFG Global
                Consulting, we understand that the business landscape is
                constantly evolving, presenting both challenges and prospects
                for organizations worldwide. In this fast-paced environment, it
                is crucial for businesses to adapt and thrive to remain
                competitive. Thats where we come in.
              </p>
              <p className="text-lg text-[#656565]">
              Our expertise lies in deploying and managing innovative solutions
              that empower businesses and organizations to achieve growth. We
              firmly believe that success in todays marketplace requires a
              multidimensional approach, blending research, strategy, workforce
              training, and information technology. By operating at the
              intersection of these critical areas, we offer comprehensive
              consulting services that equip our clients with the tools they
              need to drive their success. As we embark on this exciting
              journey, we invite you to join us in shaping the future of
              business growth. Whether you are a small startup seeking guidance
              or a well-established organization looking for fresh insights, BFG
              Global Consulting is here to support you every step of the way.
              Our team of experts is ready to listen, understand your unique
              challenges, and tailor solutions that align with your specific
              goals. While you explore our business profile, we thank you for
              your attention, and we look forward to connecting with you soon.
              Together, let us embrace the possibilities and create a future of
              sustainable growth and success.
            </p>
            </div>
            <div className="w-[30%] h-[400px]">
            <Image
                  src={Picture}
                  alt="festus-bello"
                  className="w-full h-full object-fit"
                />
                <p className="font-bold">Festus Bello</p>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

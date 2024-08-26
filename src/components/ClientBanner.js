import Image from "next/image";
import React from "react";
import VideoImg from "../../public/assets/video-img.png";
import SensangImg from "../../public/assets/sensang-img.png";
import GigsImg from "../../public/assets/gigs-img.png";
import TwentyImg from "../../public/assets/12twenty-img.png";


const ClientBanner = () => {
  return (
    <>
      <div className="bg-[#E26015]">
        <div className="p-12">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Clients
          </span>
          <div className="w-full flex gap-7 justify-between my-4">
            <div className="w-[30%]">
              <h3 className="text-white text-4xl">
                Our clients success stories
              </h3>
            </div>
            <div className="w-[40%]">
              <p className="text-white text-xl">
                Discover how businesses like yours transformed with our software
                Real stories of growtn innovation & success.
              </p>
            </div>
            <div className="w-[30%]">
              <button className="py-2 px-4 rounded-3xl bg-white hover:bg-[#222] text-[#E26015] hover:text-white font-semibold">
                See More
              </button>
            </div>
                  </div>
                  <div className="w-full">
                      <Image src={VideoImg} alt="video-img" className="w-full" />
                  </div>
                  <div className="w-full flex gap-10 my-6">
                      <div className="w-[30%] p-3 border border-white rounded-xl">
                          <p className="text-white">
                            &quot; FG Global Consult has been a trusted partner to Sensang Constructions LLC, Nigeria, delivering expert consulting services that drive growth & excellence. Their exceptional support has been instrumental in our success.  &quot;
                          </p>
                          <div className="my-4 flex gap-2">
                              <div>
                                  <Image src={SensangImg} alt="sendsang-img" className="" />
                              </div>
                              <div>
                                  <h4 className="text-white font-semibold">Adelanke Olasehinde Alade</h4>
                                  <p className="text-white">MD, Sensang Constructions LLC, 
Nigeria </p>
                              </div>
                          </div>
                      </div>
                      <div className="w-[30%] p-3 border border-white rounded-xl">
                          <p className="text-white">
                            &quot; BFG Global Consult has been an invaluable partner to GIG Travels, UK, providing expert guidance & tailored solutions. Their exceptional service has empowered our success. Highly recommended.  &quot;
                          </p>
                          <div className="my-4 flex gap-2">
                              <div>
                                  <Image src={GigsImg} alt="gigs-img" className="" />
                              </div>
                              <div>
                                  <h4 className="text-white font-semibold">Adelanke Olasehinde Alade</h4>
                                  <p className="text-white">Managing Partner/CEO, 
GIG Travels, UK </p>
                              </div>
                          </div>
                      </div>
                       <div className="w-[30%] p-3 border border-white rounded-xl">
                          <p className="text-white">
                            &quot; BFG Global Consult embodies excellence, innovation, and commitment. Their expertise & passion deliver tailored solutions that exceed expectations.
We highly recommend them for top-notch consulting services. A trusted partner in achieving success. &quot;
                          </p>
                          <div className="my-4 flex gap-2">
                              <div>
                                  <Image src={TwentyImg} alt="twenty-img" className="" />
                              </div>
                              <div>
                                  <h4 className="text-white font-semibold">Adelanke Olasehinde Alade</h4>
                                  <p className="text-white">MD, 12Twenty Limited, Nigeria</p>
                              </div>
                          </div>
                      </div>
                  </div>
        </div>
      </div>
    </>
  );
};

export default ClientBanner;

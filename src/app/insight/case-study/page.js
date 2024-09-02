import Image from 'next/image'
import React from 'react';
import Banner from "../../../../public/assets/case-banner.png";
import Slides from '@/components/Slides';

const page = () => {
  return (
      <>
          <div className="mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Our Cases Study
        </span>
        <div className="flex w-full gap-4 items-center justify-between my-4">
          <h3 className="w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Cases Studies
          </h3>
          <p className="w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Discover how BFG has helped businesses like yours achieve remarkable success through our innovative solutions
          </p>
        </div>

        <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={Banner}
            alt="about-banner"
            className="w-full h-full object-fit rounded-3xl"
          />
              </div>
              <hr className="my-3" />
              <div>
                  <Slides />
              </div>
               <div className="my-8">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Recent Case Study
          </span>
          <div className="w-full flex gap-10 items-center justify-between my-4">
            <h3 className="w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
              Real Solutions,Tangible Results
                      </h3>
                      <p className="w-[50%] text-[#999]">
                          Explore our diverse portfolio showcasing how BFG optimizes operations & fosters growth for businesses. From strategic planning to technology integration, witness the transformative impact of our tailored solutions.
                      </p>
          </div>
        </div>
              
      </div>
      </>
  )
}

export default page
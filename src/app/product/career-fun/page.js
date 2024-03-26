import React from "react";
import Careerfun from "../../../../public/assets/careerfun-bg.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-[400px] h-[200px]">
          <Image
            src={Careerfun}
            alt="career-product"
            className="w-full h-full object-fit"
          />
        </div>
        <p className="text-2xl font-bold">Coming Soon....</p>
      </div>
    </>
  );
};

export default page;

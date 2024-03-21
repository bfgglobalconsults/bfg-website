import React from "react";
import Appetizer from "../../../../public/assets/appetiza-bg.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-[300px] h-[150px]">
          <Image
            src={Appetizer}
            alt="appetizer-product"
            className="w-full h-full object-fit"
          />
        </div>
        <p className="text-2xl font-bold">Coming Soon....</p>
      </div>
    </>
  );
};

export default page;

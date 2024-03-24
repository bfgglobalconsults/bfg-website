import { industry_links } from "@/constants/industrycomponent-constant";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import React from "react";

const IndustryComponent = ({ closeModal }) => {
  const router = useRouter(); 

  const handleLinkClick = (href) => {
    console.log('Navigating to:', href); 
    closeModal(); 
    router.push(href); 
  };
  return (
    <>
      <div>
        <div className="w-full flex gap-8">
          <div className="w-[20%]">
            <h3 className="text-2xl text-white font-semibold my-3">
              Portfolio
            </h3>
            <p className="text-white text-lg">
              We combine industry expertise with analytical insights to help
              clients achieve growth, drive innovation, and navigate complex
              business landscapes.
            </p>
            <button className="my-8 px-6 py-4 border-2 border-white text-lg font-semibold">
              Explore
            </button>
          </div>
          <div className="w-[40%]">
          {industry_links.map(({ id, label, link }) => (
            <p
              key={id}
              className="mx-4 py-4 border-t border-b border-white text-lg font-semibold cursor-pointer hover:text-black"
              onClick={() => handleLinkClick(link)}
            >
              {label}
            </p>
          ))}
          </div>
          <div className="w-[40%]">
            <h3 className="text-2xl text-white font-semibold my-3">
              Case Studies
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryComponent;

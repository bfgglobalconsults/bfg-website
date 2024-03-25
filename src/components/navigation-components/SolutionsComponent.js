import { solution_links } from "@/constants/solutioncomponent-constant";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import React from "react";

const SolutionsComponent = ({ closeModal, color }) => {
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
              Solutions
            </h3>
            <p className="text-white text-lg">
              With expertise in research and analytics, business strategy and
              operations, training and development, and information technology,
              we empower companies to thrive in todays dynamic business
              landscape.
            </p>
            {/* <button
              onClick={closeModal}
              className="my-8 px-6 py-4 border-2 border-white text-lg font-semibold hover:text-black hover:border-black"
            >
              Explore
            </button> */}
          </div>
          <div className="w-[40%]">
          {solution_links.map(({ id, label, link }) => (
            <p
              key={id}
              className={`mx-4 py-4 border-t border-b border-white text-lg font-semibold cursor-pointer hover:text-black ${color ? `hover:bg-white hover:text-${color}` : ''}`}
              onClick={() => handleLinkClick(link)}
            >
              {label}
            </p>
          ))}
        </div>
          <div className="w-[40%]">
            <h3 className="text-2xl text-white font-semibold my-3">Projects</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsComponent;

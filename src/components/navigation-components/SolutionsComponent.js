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
            <h3 className="text-2xl text-[#222] font-semibold my-3">
              Solutions
            </h3>
            <p className="text-[#999999] text-lg">
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
            <>
            <p
              key={id}
              className={`flex gap-2 items-center mx-4 py-4  border-b text-black border-[#E45F11] text-lg font-semibold cursor-pointer hover:text-[#E45F11] ${color ? `hover:bg-white hover:text-${color}` : ''}`}
              onClick={() => handleLinkClick(link)}
            >
                  {label}
                    <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(228,95,17,1)"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
            </span>

            </p>
              
              </>
          ))}
        </div>
          <div className="w-[40%]">
            <h3 className="text-2xl text-white font-semibold my-3">Why BFG?</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsComponent;

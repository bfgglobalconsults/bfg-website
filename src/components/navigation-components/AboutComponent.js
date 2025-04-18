import { about_links } from "@/constants/aboutcomponent-constant";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import React from "react";

export const AboutComponent = ({ closeModal, color }) => {
  const router = useRouter(); 

  const handleLinkClick = (href) => {
    console.log('Navigating to:', href); 
    closeModal(); 
    router.push(href); 
  };

  return (
    <div>
      <div className="w-full flex gap-8 modal" onClick={(e) => e.stopPropagation()}>
        <div className="w-[20%]">
          <h3 className="text-2xl text-black font-semibold my-3">About us</h3>
          <p className="text-[#999] text-lg">
           BFG Global Consulting, LLC. ediﬁes your business and organisation to grow. We are at the intersection of software development, research, strategy, and workforce training.
          </p>
          <Link href="/about">
            <button onClick={closeModal} className="my-8 px-6 py-4 border-2 text-black border-[#E45F11] text-lg font-semibold">
              Explore
            </button>
          </Link>
        </div>
        <div className="w-[40%]">
          {about_links.map(({ id, label, link }) => (
            <p
              key={id}
              className="flex gap-2 items-center mx-4 py-4  border-b text-black border-[#E45F11] text-lg font-semibold cursor-pointer hover:text-[#E45F11]"
              onClick={() => handleLinkClick(link)}
            >
              {label}
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(228,95,17,1)"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
            </span>
            </p>
          ))}
        </div>
        <div className="w-[40%]"></div>
      </div>
    </div>
  );
};

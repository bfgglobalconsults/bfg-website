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
            BFG Global Consulting, LLC. ediﬁes your business and organisation
            to growth. We are at the intersection of research, strategy,
            workforce training, and information technology.
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
              className="mx-4 py-4  border-b text-black border-[#E45F11] text-lg font-semibold cursor-pointer hover:text-[#E45F11]"
              onClick={() => handleLinkClick(link)}
            >
              {label}
            </p>
          ))}
        </div>
        <div className="w-[40%]"></div>
      </div>
    </div>
  );
};

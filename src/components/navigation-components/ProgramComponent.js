import { about_links } from "@/constants/aboutcomponent-constant";
import { program_links } from "@/constants/programcomponent-constant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const ProgramComponent = ({ closeModal, color }) => {
  const router = useRouter();

  const handleLinkClick = (href) => {
    console.log("Navigating to:", href);
    closeModal();
    router.push(href);
  };

  return (
    <div>
      <div
        className="w-full flex gap-8 modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[20%]">
          <h3 className="text-2xl text-white font-semibold my-3">Programs</h3>
          <p className="text-white text-lg">
            BFG Global Consulting, LLC. From optimizing operations to
            fostering growth and navigating complex challenges, our tailored
            programs are designed to elevate performance, drive sustainable
            success, and unlock untapped potential in todays dynamic market
            landscape.
          </p>
        </div>
        <div className="w-[40%]">
          {program_links.map(({ id, label, link }) => (
            <p
              key={id}
              className="mx-4 py-4 border-t border-b border-white text-lg font-semibold cursor-pointer hover:text-black"
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

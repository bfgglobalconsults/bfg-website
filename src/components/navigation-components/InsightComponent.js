import { about_links } from "@/constants/aboutcomponent-constant";
import { insight_links } from "@/constants/insightcomponent-constant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const InsightComponent = ({ closeModal, color }) => {
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
          <h3 className="text-2xl text-black font-semibold my-3">Resources</h3>
          <p className="text-[#999] text-lg">
           Our resources reflect our commitment to transparency and ethics, career opportunities, client engagement, and thought leadership in the consulting industry.
          </p>
          
        </div>
        <div className="w-[40%]">
          <h3 className="text-2xl text-white font-semibold my-3"></h3>

          {insight_links.map(({ id, label, link }) => (
            <p
              key={id}
              className="flex gap-2 items-center mx-4 py-4 border-b text-black border-[#E45F11] text-lg font-semibold cursor-pointer hover:text-[#E45F11]"
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

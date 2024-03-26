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
          <h3 className="text-2xl text-white font-semibold my-3">Insights</h3>
          <p className="text-white text-lg">
            BFG Global Consulting, LLC. Through rigorous analysis, deep industry
            expertise, and cutting-edge research, we uncover valuable insights
            that illuminate opportunities, mitigate risks, and drive
            transformative outcomes for our clients.
          </p>
          
        </div>
        <div className="w-[40%]">
          <h3 className="text-2xl text-white font-semibold my-3"></h3>

          {insight_links.map(({ id, label, link }) => (
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

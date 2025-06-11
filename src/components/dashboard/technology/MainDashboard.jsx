import React, { useState } from "react";
import AllComponents from "./filters/AllComponents";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import IndustryServed from "./filters/IndustryServed";
import CountryServed from "./filters/CountryServed";
import WebTechnologies from "./filters/WebTechnologies";
import CloudDeployments from "./filters/CloudDeployments";

const MainDashboard = () => {
  const [position, setPosition] = useState("All");

  return (
    <>
      <div>
        <div className="flex justify-end items-center gap-2 mb-4 px-12">
          <div></div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center gap-2 text-black cursor-pointer p-1 border border-[#E26015] rounded-md">
                <span>{position}</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="currentColor"
                  >
                    <path d="M14 14V20L10 22V14L4 5V3H20V5L14 14ZM6.4037 5L12 13.3944L17.5963 5H6.4037Z"></path>
                  </svg>
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Portfolio Filters</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="All">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Industry Served">
                  Industry Served
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Countries Served">
                  Countries Served
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Web Technologies">
                  Web Technologies
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Cloud Deployments">
                  Cloud Deployments
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Mobile Platforms">
                  Mobile Platforms
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {position === "All" && <AllComponents />}
        {position === "Industry Served" && <IndustryServed />}
        {position === "Countries Served" && <CountryServed />}
        {position === "Web Technologies" && <WebTechnologies />}
        {position === "Cloud Deployments" && <CloudDeployments />}
      </div>
    </>
  );
};

export default MainDashboard;

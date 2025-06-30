"use client"
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
import IndustriesResearched from "./filters/IndustriesResearched";
import ResearchedProjects from "./filters/ResearchedProjects";
import SurveyGroups from "./filters/SurveyGroups";
import Reports from "./filters/Reports";
import ClientMetrics from "./filters/ClientMetrics";


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
                <DropdownMenuRadioItem value="Training Sessions">
                  Training Sessions{" "}
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Participants">
                  Participants
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Organizations">
                  Organizations
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Reports & Dashboards">
                  Reports & Dashboards
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Client Metrics">
                  Client Metrics
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {position === "All" && <AllComponents />}
        {position === "Researched Projects" && <ResearchedProjects />}
        {position === "Industries Researched" && <IndustriesResearched />}
        {position === "Survey & Focus Groups" && <SurveyGroups />}
        {position === "Reports & Dashboards" && <Reports />}
        {position === "Client Metrics" && <ClientMetrics />}
      </div>
    </>
  );
};

export default MainDashboard;

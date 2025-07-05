"use client";
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

import ClientROIDashboard from "./filters/ClientROIDashboard";
import CountriesDashboard from "./filters/CountriesDashboard";
import ProcessReengineeringDashboard from "./filters/ProcessReengineeringDashboard";
import ProjectDistributionDashboard from "./filters/ProjectDistributionDashboard";
import TransformationProjectsDashboard from "./filters/TransformationProjectsDashboard";

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
                <DropdownMenuRadioItem value="Client ROI">
                  Client ROI
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Countries">
                  Countries
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Process Re-engineering">
                  Process Re-engineering
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Project Distribution">
                  Project Distribution
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Transformation Projects">
                  Transformation Projects
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {position === "All" && <AllComponents />}
        {position === "Client ROI" && <ClientROIDashboard />}
        {position === "Countries" && <CountriesDashboard />}

        {position === "Process Re-engineering" && (
          <ProcessReengineeringDashboard />
        )}
        {position === "Project Distribution" && (
          <ProjectDistributionDashboard />
        )}
        {position === "Transformation Projects" && (
          <TransformationProjectsDashboard />
        )}
      </div>
    </>
  );
};

export default MainDashboard;

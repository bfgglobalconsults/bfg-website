"use client"
import Image from 'next/image'
import React from 'react'
import Logo from "@/app/bfg-logo.png";
import Dropdown from '@/components/admin-component/filter-dropdown';
import TotalRevenueCard from '@/components/admin-component/dashboard-cards/TotalRevenueCard';
import ProjectsCard from '@/components/admin-component/dashboard-cards/ProjectsCard';
import TimeCard from '@/components/admin-component/dashboard-cards/TimeCard';
import ClientCard from '@/components/admin-component/dashboard-cards/ClientCard';
import ProjectSummary from '@/components/admin-component/dashboard-components/ProjectSummary';
import OverallProgress from '@/components/admin-component/dashboard-components/OverallProgress';
import DailyProject from '@/components/admin-component/dashboard-components/DailyProject';
import HeatmapProjects from '@/components/admin-component/HeatmapProjects';


const page = () => {
  return (
      <>
       <div className="w-full p-4">
        <div className="flex gap-2 items-center justify-between">
          <h3 className="text-2xl">Overview</h3>
          <div>
            <Dropdown/>
          </div>
        </div>
        <div className="flex gap-4 my-4">
          <div><TotalRevenueCard /></div>
          <div><ProjectsCard /></div>
          <div><TimeCard /></div>
          <div><ClientCard /></div>
        </div>
        <div className="flex gap-4 my-8">
          <div className="w-[60%]">
            <ProjectSummary />
          </div>
          <div className="w-[40%] shadow-md p-2">
            <OverallProgress />
          </div>
          <div></div>
        </div>
        <div className="flex gap-4 my-8">
          <div className="w-[60%] bg-white rounded-lg p-4">
            <p className="text-[#060606] text-[16px] font-semibold my-2">Today Project</p>
            <DailyProject />
          </div>
          <div className="w-[40%]">
            <p className="text-[#060606] text-[16px] font-semibold my-2">Project Workload</p>
<HeatmapProjects />
          </div>
        </div>
      </div>
      </>
  )
}

export default page
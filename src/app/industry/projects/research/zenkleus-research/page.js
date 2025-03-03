import Slides from "@/components/Slides";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FirstNews from "../../../../../../public/assets/zenkleus-research.jpg";
const page = () => {
  return (
    <>
      <div className="lg:mt-[150px] p-10">
        <div className="inline-block bg-white border-2 border-[#E26015] p-2 rounded-3xl">
          <Link href="/">
            <div className="flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                >
                  <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                </svg>
              </span>
              <span className="font-semibold">Back</span>
            </div>
          </Link>
        </div>
        <div className="w-full my-4">
          <h3 className="w-[100%]  text-[#333] font-bold text-3xl md:text-3xl lg:text-5xl">
                   ZENKLEUS Nigeria: A UI/UX Research Journey into User-Centered Design
          </h3>
        </div>
        <div className="relative w-full h-[300px] lg:h-[500px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={FirstNews}
            alt="about-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="my-4">
          <Slides />
        </div>
        <div className="p-1 lg:p-12">
          <h3 className="text-2xl text-black font-semibold my-3">
            Project Overview
          </h3>
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              <p className="text-lg text-[#9b8b8b]">
                Zenkleus approached us to design and execute a comprehensive
                survey and interview process to gather feedback from 35 schools
                using their school management portal. This research provided
                actionable insights for improving the platform&apos;s
                functionalities and user experience.
              </p>
              <br />

              <p className="text-lg text-[#9b8b8b]">
                BFG Global Consulting worked closely with Zenkleus to identify
                clear objectives, define key performance indicators (KPIs), and
                develop a communication strategy to ensure smooth execution of
                the feedback collection process.
              </p>
              <br />
              <p className="text-lg text-[#9b8b8b]">
                {" "}
                We developed a survey aimed at understanding how the platform
                was being used, identifying pain points, and collecting
                suggestions for improvements. Interviews were also conducted
                with school administrators and IT coordinators to gain deeper
                insights into the system&apos;s strengths, weaknesses, and areas
                for potential enhancement.
              </p>
              <br />
            </div>
            <div className="hidden lg:block lg:w-[20%]">
              <div className="bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-3">
                <h3 className="font-semibold my-2 text-lg">Details</h3>
                <div className="flex justify-between">
                  <p className="text-[#999]">Date</p>
                  <p className="text-[#999]">Jan 07, 2025</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Category</p>
                  <p className="text-[#999]">Research</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Reading</p>
                  <p className="text-[#999]"> 2 Min</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Author</p>
                  <p className="text-[#999]">
                    BFG Product
                    <br /> Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* problem statement */}
        <div className="p-1 lg:p-12">
          <h3 className="text-2xl text-black font-semibold my-3">
            Problem Statement
          </h3>
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              <p className="text-lg text-[#9b8b8b]">
                Zenkleus aimed to ensure that its school management portal
                continued to meet the evolving needs of its user base. While the
                platform had achieved significant success, opportunities for
                improvement remained, particularly in enhancing user experience
                and refining key functionalities. The challenge lay in
                effectively gathering actionable feedback from existing users
                while overcoming potential resistance to participating in
                surveys and interviews.
              </p>
              <br />
            </div>
            <div className="hidden lg:block lg:w-[20%]"></div>
          </div>
        </div>
        {/* problem statement end */}

        {/* approach used */}
        <div className="p-1 lg:p-12">
          <h3 className="text-2xl text-black font-semibold my-3">
            Approach (The How)
          </h3>
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              <p className="text-lg text-[#9b8b8b]">
                Our approach began with a thorough review of Zenkleus&apos; existing
                feedback mechanisms to assess their effectiveness and identify
                areas for improvement.</p><br/> <p className="text-lg text-[#9b8b8b]">This evaluation also helped establish a
                structured process for communicating insights back to schools
                and determining actionable steps based on the gathered feedback.</p><br/>
                <p className="text-lg text-[#9b8b8b]">Collaborating with Zenkleus, we compiled a comprehensive list of
                35 schools actively using the portal, along with key contacts
                such as school administrators and IT coordinators, ensuring
                efficient communication and seamless coordination of the survey
                process. Additionally, we helped define the key metrics
                necessary for measuring the impact of improvements made in
                response to user feedback.
              </p>
              <br />
            </div>
            <div className="hidden lg:block lg:w-[20%]"></div>
          </div>
        </div>
        {/* approach used end */}

        {/* solution */}
        <div className="p-1 lg:px-12">
          <h3 className="text-2xl text-black font-semibold my-3">
            Solution Introduced (The Problem Solving Innovation)
          </h3>
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              <p className="text-lg text-[#9b8b8b]">
                By implementing this structured approach, we successfully gathered valuable insights to help Zenkleus enhance its school management portal. The feedback from schools identified key areas for improvement, including the user interface, specific functionalities, and overall user experience. With these insights, Zenkleus was able to prioritize meaningful updates, ensuring the platform became more user-friendly, efficient, and better aligned with the needs of its users.
              </p>
              <br />
            </div>
            <div className="hidden lg:block lg:w-[20%]"></div>
          </div>
        </div>
        {/* solution end */}
      </div>
    </>
  );
};

export default page;

import Slides from "@/components/Slides";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FirstNews from "../../../../../../public/assets/research-cover-img.jpg";
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
           Corporate Scholarship Funding: Analyzing CSR Investment in Education Across Industries
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
                AKADAPlay commissioned us to conduct a comprehensive study on corporate scholarship funding as part of CSR initiatives across various industries. The research aimed to evaluate how corporations allocate resources for educational support, identify spending patterns, and uncover key trends in CSR-driven scholarship programs.
              </p>
              <br />
            </div>
            <div className="hidden lg:block lg:w-[20%]">
              <div className="bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-3">
                <h3 className="font-semibold my-2 text-lg">Details</h3>
                <div className="flex justify-between">
                  <p className="text-[#999]">Date</p>
                  <p className="text-[#999]">Nov 2, 2023</p>
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
                Despite widespread corporate involvement in educational CSR initiatives, there is limited consolidated data on scholarship funding, making it challenging to evaluate the impact of these contributions on educational development. This lack of transparency hinders stakeholders—such as policymakers, educational institutions, and CSR executives—from making informed decisions. AKADAPlay aimed to address this gap by providing data-driven insights into corporate scholarship spending, enabling more strategic and effective resource allocation.
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
                              Our research combined primary and secondary data analysis to examine corporate CSR spending on education. We analyzed financial records from 21 FMCG companies, 12 banks, and 5 telecommunications firms, comparing industry-specific contributions and identifying trends in scholarship allocations.
                          </p>
              <br />{" "}
              <p className="text-lg text-[#9b8b8b]">
                              The study also assessed whether CSR investments in education were increasing or declining over time. The findings were compiled into a comprehensive report, offering key insights, best practices, and strategic recommendations to enhance the effectiveness of corporate scholarship programs.
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
                              AKADAPlay conducted an in-depth analysis of corporate CSR spending on education, examining scholarship contributions from 21 FMCG companies, 12 banks, and 5 telecommunications firms. The study provided much-needed transparency in CSR allocations, equipping corporate decision-makers with data-driven insights to refine their scholarship strategies.
                          </p>
              <br />
              <p className="text-lg text-[#9b8b8b]">
                              Additionally, it highlighted opportunities for more targeted investments in education, ensuring greater impact. These findings positioned AKADAPlay as a valuable resource for stakeholders seeking to optimize corporate educational initiatives and drive meaningful change.
                          </p>
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

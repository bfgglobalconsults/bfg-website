import React from "react";
import Image from "next/image";

import TopBanner from "../../../../../public/assets/training-development-banner.jpg";
import Project18 from "../../../../../public/assets/training-areai.jpg";
import Project21 from "../../../../../public/assets/training-do-action.jpg";
import Project20 from "../../../../../public/assets/training-hope-behind-bars.jpg"
import Project19 from "../../../../../public/assets/training-ilead.jpg";
import EmployeePerformance from "../../../../../public/assets/employee-perfomance.jpg";
import Retention from "../../../../../public/assets/retention.png";
import GreaterFlexibility from "../../../../../public/assets/greater-flexibility.png";
import DecisionMaking from "../../../../../public/assets/decision-making.png";
import TopTalent from "../../../../../public/assets/top-talent.png";
import Operations from "../../../../../public/assets/operations.png";

import Link from "next/link";

const page = () => {
  
  return (
    <>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Case Studies
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Training & Development
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Empowering your workforce, Enhancing your business
          </p>
        </div>
      </div>
      <div className="px-12">
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={TopBanner}
            alt="top-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
              A skilled workforce is essential for business success. Our tailored training programs equip teams with the knowledge and skills needed to thrive in a dynamic business environment. From leadership development to technical training, our case studies demonstrate how we&apos;ve helped organizations upskill employees and foster a culture of continuous learning.
            </p>
          </div>

          <div className="w-full">
           <div>
            <div className="">
              <div className="w-full flex flex-col lg:flex-row flex-wrap gap-4 my-4">
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project18}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="font-sans text-xl lg:text-2xl font-semibold">
                      Empowering NGOs with Artificial Intelligence for Enhanced
                      Impact and Innovation (Areai)
                    </h3>
                    <p className="text-[#999]">
                      The objective of the Artificial Intelligence Training is
                      to equip Non-Governmental Organizations (NGOs) with the
                      knowledge and tools to enhance their efficiency, amplify
                      their impact, and drive innovation by improving
                      data-driven decision-making, streamlining operations,
                      enhancing service delivery, strengthening fundraising and
                      advocacy efforts, and fostering creative solutions to
                      social challenges.
                    </p>
                    <Link href="/industry/projects/training/areai">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* second image */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project19}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="font-sans text-xl lg:text-2xl font-semibold">
                      Empowering iLEAD Africa: Strategic Program Design and AI
                      Prompt Engineering Training
                    </h3>
                    <p className="text-[#999]">
                      A tailored two-day capacity-building training focused on
                      strategic program design and AI prompt engineering,
                      designed to equip the staff and volunteers of iLEAD Africa
                      with practical skills to enhance their operations and
                      impact.
                    </p>
                    <Link href="/industry/projects/training/ilead-africa">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* third product */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project20}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="font-sans text-xl lg:text-2xl font-semibold">
                      Empowering NGOs with Artificial Intelligence for Enhanced
                      Impact and Innovation (Hope Behind Bars)
                    </h3>
                    <p className="text-[#999]">
                      The objective of the Artificial Intelligence Training is
                      to equip Non-Governmental Organizations (NGOs) with the
                      knowledge and tools to enhance their efficiency, amplify
                      their impact, and drive innovation by improving
                      data-driven decision-making, streamlining operations,
                      enhancing service delivery, strengthening fundraising and
                      advocacy efforts, and fostering creative solutions to
                      social challenges.
                    </p>
                    <Link href="/industry/projects/training/hope-behind-bars">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* fourth product */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project21}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="font-sans text-xl lg:text-2xl font-semibold">
                      Empowering NGOs with Artificial Intelligence for Enhanced
                      Impact and Innovation (Do Take Action)
                    </h3>
                    <p className="text-[#999]">
                      The Workforce Training and Development Unit of BFG Global
                      Consulting LLC equipped DO Take Action with the knowledge
                      and practical application of Artificial Intelligence to
                      enhance their service delivery.
                    </p>
                    <Link href="/industry/projects/training/do-action">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          <hr />

          <div className="my-8">
            <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
              Benefits
            </span>
            <div>
              <h3 className="text-[#333] text-3xl my-8 font-semibold">
                Service Benefits
              </h3>
              <p className="text-[#999] text-xl my-2">
                Realize the full potential of your organization with our expert
                services, delivering actionable insights, improved efficiency, &
                sustained results that drive lasting impact & success.{" "}
              </p>
            </div>
            {/* <div className="w-full flex flex-col lg:flex-row gap-10">
              <div className="w-[100%] lg:w-[30%] h-[280px]">
                <Image
                  src={ServiceImage1}
                  alt="service-image1"
                  className="w-full h-full"
                />
              </div>
              <div className="w-[0%] h-[0%] lg:w-[70%] lg:h-[280px]">
                <Image
                  src={ServiceImage2}
                  alt="service-image2"
                  className="w-full h-full"
                />
              </div>
            </div> */}
            <div className="w-full flex flex-col lg:flex-row flex-wrap gap-10 my-6">
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={EmployeePerformance}
                    alt="employee"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Improved Employee Performance
                  </h4>
                  <p className="text-[#999]">
                    By providing employees with the knowledge, skills, &
                    abilities they need to succeed in their roles, this solution
                    helps organisations improve employee performance &
                    productivity.{" "}
                  </p>
                </div>
              </div>
              {/* second item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Retention}
                    alt="retention"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Better Retention of Employees
                  </h4>
                  <p className="text-[#999]">
                    Investing in employee training & development helps
                    organisations retain their best employees, & reduces the
                    costs associated with turnover.{" "}
                  </p>
                </div>
              </div>
              {/* third item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={GreaterFlexibility}
                    alt="flexibility"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Greater Adaptability & Flexibility
                  </h4>
                  <p className="text-[#999]">
                    By providing your employees with training & development that
                    keeps them up-to-date with new technologies & changing
                    industry trends, your organisation will be more adaptable &
                    flexible in response to changing business conditions.{" "}
                  </p>
                </div>
              </div>
              {/* fourth item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={DecisionMaking}
                    alt="decision"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Improved Decision-Making
                  </h4>
                  <p className="text-[#999]">
                    Access to accurate, up-to-date information & expert analysis
                    helps our clients make more informed & effective decisions
                    for their businesses.{" "}
                  </p>{" "}
                </div>
              </div>
              {/* fifth item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={TopTalent}
                    alt="talent"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Enhanced Ability to Attract top Talent
                  </h4>
                  <p className="text-[#999]">
                    Organisations that invest in this service are more likely to
                    attract top talent, as potential employees view such
                    investment as a sign of a committed & forward-thinking
                    organisation.{" "}
                  </p>{" "}
                </div>
              </div>
              {/* sixth item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Operations}
                    alt="operations"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Greater Scalability{" "}
                  </h4>
                  <p className="text-[#999]">
                    Developing scalable systems & processes, also helps leaders
                    & managers of organisations prepare for & manage growth in
                    their business.
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
          
          
         
        </div>
      </div>
    </>
  );
};

export default page;

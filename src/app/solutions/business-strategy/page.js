import React from "react";
import Image from "next/image";
// import Banner from "../../../../public/assets/business-strategy.jpg";

import TopBanner from "../../../../public/assets/business-strategy-banner.jpg";

import BusinessImage from "../../../../public/assets/business-image.png";
import Avatar from "../../../../public/assets/new-avatar.png";
import Ifeoma from "../../../../public/assets/ifeoma.png";
import Efficiency from "../../../../public/assets/efficiency.png";
import Cost from "../../../../public/assets/cost.png";
import Decision from "../../../../public/assets/decision.png";
import Advantage from "../../../../public/assets/advantage.png";
import Scalabity from "../../../../public/assets/scalability.png";
import Operations from "../../../../public/assets/operations.png";
import BusinessPortfolio from "../../../../public/assets/business-portfolio.jpg";
import ServiceImage1 from "../../../../public/assets/service-image1.png";
import ServiceImage2 from "../../../../public/assets/service-image2.png";
import AnimatedItems from "@/components/information-technology/AnimatedItems";
import Link from "next/link";

const page = () => {
  const BusinessSlides = [
    {
      title: "Business Process and Systems Engineering",
      content:
        "This involves optimizing and redesigning business processes and systems to improve efficiency, reduce costs, and enhance overall performance. By leveraging cutting-edge methodologies, we help businesses analyze their systems, processes, and data to identify opportunities for improvement and recommend technology-driven solutions.",
    },
    {
      title: "Business strategy development & implementation",
      content:
        "This includes market research & analysis, competitive analysis, & the development of a comprehensive business plan for your business.",
    },
    {
      title: "Operations assessment & optimization",
      content:
        "This covers our single-mindedness in reviewing & analysing current operations to identify areas for improvement & implementing changes to increase efficiency & reduce costs for organisations.",
    },
    {
      title: "Organisational design & restructuring",
      content:
        "This include reviewing your current organisational structure & making changes to improve alignment with business goals & objectives.",
    },
    {
      title: "Performance management",
      content:
        "We accelerate business decisions through the implementation of systems & processes for monitoring & measuring performance, as well as providing guidance & support for achieving performance goals in your business.",
    },
    {
      title: "Change management",
      content:
        "This includes planning & executing changes to systems, processes, & organisational structure in a way that minimise disruption & maximise benefits.",
    },
  ];
  return (
    <>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Strategy
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Strategy & Operations Transformation
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Streamline your operations, optimize your strategy, & achieve your
            goals
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
              Business strategy & operations consulting is a unit of our
              practice, which involves helping organisations improve their
              overall performance by identifying & implementing effective
              business strategies & streamlining operational processes. Using
              the latest deep industry insights, our combined team of business
              strategists, growth hackers, project managers, & quality control
              managers helps businesses of every size prosper by creating
              impactful solutions tailored to their unique needs today & in the
              future. The goal of this service is to help businesses become more
              efficient, profitable, & competitive in their respective
              industries.
            </p>
          </div>
        </div>
        <div className="w-full bg-[#041926] rounded-lg flex flex-col lg:flex-row gap-4 my-8">
          <div className="w-[100%] lg:w-[50%] bg-[#041926] p-10 rounded-lg">
            <div className="my-4">
              <span className="p-3 rounded-3xl bg-white border-2 font-semibold">
                Focus Area
              </span>
            </div>
            <h3 className="text-white text-3xl font-semibold">
              Focus areas of our Business Strategy & Operations Consulting
              Services
            </h3>
            <p className="text-white my-2">
              Drive business success with our strategic expertise, leveraging a
              systematic approach to optimize performance, efficiency, &
              innovation across your organization, from strategy to execution.
            </p>
            <div className="w-full">
              <Image
                src={BusinessImage}
                alt="business-image"
                className="w-full"
              />
            </div>
          </div>
          <div className="w-[100%] bg-[#041926] p-4 lg:w-[50%] flex flex-col gap-10">
            <AnimatedItems slides={BusinessSlides} />
          </div>
        </div>

        <hr />
        <div className="p-[40px]">
          <div className="my-8">
            <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
              Benefits
            </span>
            <div>
              <h3 className="text-[#333] text-3xl my-8 font-semibold">
                Service Benefits
              </h3>
              <p className="text-[#999] text-xl my-2">
                Experience how our tailored business strategies & operational
                expertise deliver transformative outcomes, driving long-term
                success & sustainable growth
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
                    src={Efficiency}
                    alt="efficiency"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Increased Efficiency & Productivity
                  </h4>
                  <p className="text-[#999]">
                    By streamlining operations & identifying areas for
                    improvement, our business strategy & operations service
                    helps organisations to increase their overall efficiency &
                    productivity.
                  </p>
                </div>
              </div>
              {/* second item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Cost}
                    alt="cost"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Cost Savings
                  </h4>
                  <p className="text-[#999]">
                    Identifying & implementing cost-saving measures can help
                    your organisation reduce expenses & increase its bottom
                    line.
                  </p>
                </div>
              </div>
              {/* third item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Decision}
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
                    for their businesses.
                  </p>
                </div>
              </div>
              {/* fourth item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Advantage}
                    alt="advantage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Enhanced Competitive Advantage
                  </h4>
                  <p className="text-[#999]">
                    Identifying & leveraging competitive advantages helps our
                    clients gain an edge over their rivals in the marketplace.
                  </p>{" "}
                </div>
              </div>
              {/* fifth item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Scalabity}
                    alt="scalability"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Greater Scalability
                  </h4>
                  <p className="text-[#999]">
                    Developing scalable systems & processes, also helps leaders
                    & managers of organisations prepare for & manage growth in
                    their business.{" "}
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
                    Streamlined Operational Processes
                  </h4>
                  <p className="text-[#999]">
                    Enhance workflow efficiency through process optimization,
                    reducing redundancies, and fostering a more agile
                    operational environment.{" "}
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* portfolio */}
          <div className="py-[100px]">
            <div className="flex flex-col items-center lg:flex-row gap-8">
              <div className="w-[100%] lg:w-[40%]">
                <Image
                  src={BusinessPortfolio}
                  alt="research"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[100%] lg:w-[60%]">
                <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
                  Portfolio
                </span>
                <h3 className="text-[#333] text-3xl my-8 font-semibold">
                  Driving Efficiency, Scalability, and Growth
                </h3>
                <p className="text-[#999] text-xl my-2">
                  Explore how BFG Global Consult empowers organizations to turn
                  strategic visions into measurable success stories. We
                  highlight innovative projects that exemplify our dedication to
                  excellence, adaptability, and transformative solutions across
                  various sectors.
                </p>
                <a
                  href="/bfg-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <button className="bg-[#041926] py-2 px-6 rounded-xl hover:bg-[#E26015] flex gap-2 items-center">
                    <span className="text-white text-md font-semibold">
                      View Our Portfolio
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* service team */}
          <div className="my-14">
            <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
              Service Team
            </span>
            <div>
              <h3 className="text-[#333] text-3xl my-8 font-semibold">
                Meet Our Strategy and Operations Transformation Team
              </h3>
              <p className="text-[#999] text-xl my-2">
                Discover the experts behind our solutions. Our dedicated team
                brings a wealth of experience and a passion for driving success,
                ensuring we meet our clients’ unique challenges with precision
                and insight.
              </p>
            </div>
            {/* team pictures */}
            <div className="w-full flex my-4">
              <div className="w-full flex flex-wrap gap-8  relative rounded-md p-4">
                <div className="w-[250px] h-[250px] my-8 bg-[#B0D4EA]">
                  <Image
                    src={Ifeoma}
                    alt="md"
                    className="w-full h-full object-cover"
                  />
                  <div className="bg-white p-2 shadow-md rounded-tr-xl">
                    <h3 className="font-semibold text-lg">Ifeoma Ezeamama</h3>
                    <p className="text-[#E45F11] font-semibold">
                      Senior Business Analyst - Strategy and Operations
                      Transformation
                    </p>
                  </div>
                </div>
                {/* second person */}
                <div className="w-[250px] h-[250px] my-8 bg-[#B0D4EA]">
                  <Image
                    src={Avatar}
                    alt="md"
                    className="w-full h-full object-cover"
                  />
                  <div className="bg-white p-2 shadow-md rounded-tr-xl">
                    <h3 className="font-semibold text-lg">Kate Abengowe</h3>
                    <p className="text-[#E45F11] font-semibold">
                      Business Analyst – Systems and Digital Intelligence
                    </p>
                  </div>
                </div>
                {/* third part */}
                <div className="w-[250px] h-[250px] my-8 bg-[#B0D4EA]">
                  <Image
                    src={Avatar}
                    alt="md"
                    className="w-full h-full object-cover"
                  />
                  <div className="bg-white p-2 shadow-md rounded-tr-xl">
                    <h3 className="font-semibold text-lg">John Ogbe</h3>
                    <p className="text-[#E45F11] font-semibold">
                      Business Analyst
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* contact */}
          </div>
          <div className="w-[100%] lg:w-[60%] flex justify-center pt-14 my-14 mx-auto">
            <div>
              <p className="text-center text-2xl">
                Connect, collaborate, and drive innovation from anywhere as you
                transform your business with our Strategy & Operations
                Transformation Solutions.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="bg-[#E26015] hover:bg-black my-4 text-white text-md lg:text-lg py-2 px-4 rounded-lg">
                    Contact our Service Team
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

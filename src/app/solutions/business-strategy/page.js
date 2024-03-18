import React from "react";
import Image from "next/image";
import Banner from "../../../../public/assets/business-strategy.jpg";
import MapBanner from "../../../../public/assets/map-banner.jpg";
import Accordion from "@/components/Accordion";

const page = () => {
  return (
    <>
      <div className="py-[30px]">
        <div className="p-[40px]">
        <h3 className="my-4 flex justify-center text-lg font-bold">
            <span className="bg-[#5d9df0] p-2 text-white rounded-xl">
              Business Strategy and Operations
            </span>
          </h3>
          <div className="w-full flex flex-col lg:flex-row items-center gap-2">
  <div className="w-full lg:w-[50%]">
    <p className="text-lg text-[#656565] my-3">
      Business strategy and operations consulting is a unit of our
      practice, which involves helping organisations improve their
      overall performance by identifying and implementing effective
      business strategies and streamlining operational processes.
      Using the latest deep industry insights, our combined team of
      business strategists, growth hackers, project managers, and
      quality control managers helps businesses of every size prosper
      by creating impactful solutions tailored to their unique needs
      today and in the future. The goal of this service is to help
      businesses become more efficient, profitable, and competitive in
      their respective industries.
    </p>
  </div>
  <div className="w-full lg:w-[50%] h-[400px] my-3 lg:my-0">
    <Image
      src={Banner}
      alt="business-banner"
      className="w-full h-full object-fit"
    />
  </div>
</div>

          <div>
          <h3 className="my-4 flex justify-center text-lg font-bold">
            <span className="bg-[#5d9df0] p-2 text-white rounded-xl">
            A key focus of our Business Strategy and Operations solutions
            </span>
          </h3>
            
            <div className="">
              <div className="relative w-[100%] lg:w-[80%] h-[100%] bg-white border-b-2 border-[#016EF8] shadow-lg p-8 mx-auto ">
                  <div className="text-black">
                    <ul className="list-disc">
                      <li className="my-2">
                        <span className="font-bold">Business Formation:</span>{" "}
                        We take the stress off our clients in the process of
                        choosing a business structure and registering their
                        business with the appropriate government agency. Common
                        business structures often include sole proprietorships,
                        partnerships, limited liability companies (LLCs), and
                        corporations.
                      </li>
                      <li className="my-2">
                        <span className="font-bold">
                          Business strategy development and implementation:
                        </span>{" "}
                        This includes market research and analysis, competitive
                        analysis, and the development of a comprehensive
                        business plan for your business.
                      </li>
                      <li className="my-2">
                        <span className="font-bold">
                          Operations assessment and optimisation:
                        </span>{" "}
                        This covers our single-mindedness in reviewing and
                        analysing current operations to identify areas for
                        improvement and implementing changes to increase
                        efficiency and reduce costs for organisations.
                      </li>
                      <li className="my-2">
                        <span className="font-bold">
                          Organisational design and restructuring:
                        </span>{" "}
                        This include reviewing your current organisational
                        structure and making changes to improve alignment with
                        business goals and objectives.
                      </li>
                      <li className="my-2">
                        <span className="font-bold">
                          Performance management:
                        </span>{" "}
                        We accelerate business decisions through the
                        implementation of systems and processes for monitoring
                        and measuring performance, as well as providing guidance
                        and support for achieving performance goals in your
                        business.
                      </li>
                      <li className="my-2">
                        <span className="font-bold">Change management:</span>{" "}
                        This includes planning and executing changes to systems,
                        processes, and organisational structure in a way that
                        minimise disruption and maximise benefits.
                      </li>
                    </ul>
                  </div>
              </div>
            </div>

            {/* services container */}
            <div className="container mx-auto py-8">
              <h1 className="text-lg font-bold mb-4">Service Benefits</h1>
              <Accordion title="Increased efficiency and productivity">
                <p>
                  By streamlining operations and identifying areas for
                  improvement, our business strategy and operations service
                  helps organisations to increase their overall efficiency and
                  productivity.
                </p>
              </Accordion>
              <Accordion title="Cost savings">
                <p>
                  Identifying and implementing cost-saving measures can help
                  your organisation reduce expenses and increase its bottom
                  line.
                </p>
              </Accordion>
              <Accordion title="Improved decision-making">
                <p>
                  Access to accurate, up-to-date information and expert analysis
                  helps our clients make more informed and effective decisions
                  for their businesses.
                </p>
              </Accordion>
              <Accordion title="Enhanced competitive advantage">
                <p>
                  Identifying and leveraging competitive advantages helps our
                  clients gain an edge over their rivals in the marketplace.
                </p>
              </Accordion>
              <Accordion title="Greater scalability">
                <p>
                  Developing scalable systems and processes, also helps leaders
                  and managers of organisations prepare for and manage growth in
                  their business.
                </p>
              </Accordion>
            </div>
            {/* services container end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

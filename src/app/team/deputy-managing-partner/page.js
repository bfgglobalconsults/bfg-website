import Image from "next/image";
import React from "react";
import CompanySecretary from "../../../../public/assets/secretary-md.png";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div>
        <div className="lg:mt-[150px] p-12">
          <div className="pb-9">
            <Link href="/team">
              <div className="flex gap-2 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(153,153,153,1)"
                  >
                    <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                  </svg>
                </span>
                <span className="text-[#999]">Back to Our Team</span>
              </div>
            </Link>
          </div>
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Team Members
          </span>
          <div className="my-4">
            <h3 className="text-3xl font-semibold my-8">Azeezat Aina Oyefesobi</h3>
          </div>
          <div className="flex flex-col lg:flex-row w-[100%] gap-8 my-8">
            <div className="w-[100%] lg:w-[20%]">
               <div className="flex flex-col">
                              <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                                <Image
                                  src={CompanySecretary}
                                  alt="secretary"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="bg-white w-[250px] p-4 shadow-md rounded-lg">
                                <h3 className="font-semibold text-lg">Aina A. Oyefesobi</h3>
                                <p className="text-[#E45F11]">
                                  Deputy Managing Partner/COO
                                </p>
                              </div>
                            </div>
              <div className="my-8">
                <a href="mailto:festus.bello@bfgconsults.com">
                  <button className="w-full flex justify-center gap-4 p-3 border border-[#E26015] hover:bg-[#E26015] hover:text-white rounded-md">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                      </svg>
                    </span>
                    <span>Get in Touch</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="w-[100%] lg:w-[80%]">
              <h4 className="text-xl font-semibold mb-6">About Azeezat</h4>
              <p className="text-[#999] text-lg">
Aina A. Oyefesobi is a business executive with a wealth of experience in administrative management, strategic planning, financial management, and marketing. As the Co-founder, Deputy Managing Partner and Chief Operating Officer (COO) of BFG Global Consulting Limited, she plays a pivotal role in shaping the firms strategic direction, optimizing operations, and fostering long-term growth. With a strong background in governance, compliance, and risk management, Aina ensures that the company aligns with people-oriented consulting practices while managing the vision for innovative solutions. Her leadership in business expansion, stakeholder engagement, and market positioning has made her an invaluable asset to the organization.              </p>
              <br />
              <p className="text-[#999] text-lg">
               Prior to co-founding BFG Global Consulting, Aina began her career at the National Identity Management Commission (NIMC), where she provided administrative support and gained valuable experience in identity management and regulatory compliance in Nigeria. Her diverse professional background has equipped her with a holistic approach to operational excellence. Prior to now, she has held key positions across diverse industries, showcasing her versatility and expertise. She previously served as a Portfolio Manager at Baobab Microfinance Bank, where she managed investment portfolios and advised clients on financial strategies. Aina has also served as Data Enrolment Manager at Knowledgesquare Foresight Limited, where she specialized in data management and analytics, optimizing information systems for operational efficiency.
              </p>
              <br />
              <p className="text-[#999] text-lg">
                Currently supporting market entry strategies for BFG Consults in the U.K. Market, Aina leverages her extensive expertise to drive business expansion, establish strategic partnerships, and navigate regulatory frameworks. Her role involves identifying growth opportunities, streamlining operational processes, and ensuring that BFG Consults maintains a strong competitive edge in the consulting industry. Aina holds a Diploma in Law, a Bachelor&apos;s degree in Political Science, and a Master&apos;s degree in International Relations, equipping her with a strong foundation in governance, policy analysis, and strategic decision-making.
               </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

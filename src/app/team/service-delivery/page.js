import Image from "next/image";
import React from "react";
import Executive from "../../../../public/assets/elizabeth-mary.png";
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
            <h3 className="text-3xl font-semibold my-8">
              Elizabeth-Mary N. Okeke
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row w-[100%] gap-8 my-8">
            <div className="w-[100%] lg:w-[20%]">
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Executive}
                    alt="executive"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">
                    Elizabeth-Mary N. Okeke
                  </h3>
                  <p className="text-[#E45F11]">
                  Ag Head, Projects and Service Delivery

                  </p>
                </div>
              </div>
              <div className="my-8">
                <a href="mailto:elizabeth.okeke@bfgconsults.com">
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
              <h4 className="text-xl font-semibold mb-6">
                About Elizabeth-Mary
              </h4>
              <p className="text-[#999] text-lg">
                Elizabeth-Mary N. Okeke is an accomplished project management and service delivery practitioner currently serving as the Acting Head of Projects and Service Delivery at BFG Global Consulting Limited. With a passion for operational excellence and a proven track record in managing complex, cross-functional initiatives, she plays a pivotal role in ensuring the seamless execution of projects and the consistent delivery of high-quality services to BFG&apos;s diverse clientele.
              </p>
              <br />
              <p className="text-[#999] text-lg">
              Elizabeth-Mary brings strategic insight and hands-on leadership to the firm&apos;s technology, research, and consulting portfolios. She oversees the end-to-end lifecycle of client engagements—from planning and resource allocation to delivery and post-project evaluation—ensuring alignment with business objectives and industry best practices.              </p>
              <br />
              <p className="text-[#999] text-lg">
              Her leadership is characterized by a client-centric mindset, strong stakeholder engagement, and a commitment to continuous improvement. Under her direction, BFG&apos;s service delivery framework continues to evolve in pace with emerging trends in digital transformation, innovation, and organizational agility — steering project teams with precision, empathy, and an unwavering dedication to excellence.              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

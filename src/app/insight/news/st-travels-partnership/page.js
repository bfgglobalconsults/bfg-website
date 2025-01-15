import Slides from "@/components/Slides";
import Image from "next/image";
import FirstNews from "../../../../../public/assets/News-ST.jpg";
import Banner from "../../../../../public/assets/news-banners.png";
import SecondNews from "../../../../../public/assets/second-news.png";
import React from "react";
import Link from "next/link";

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
            ST Travels CEO Visits BFG Consults to Strengthen Partnership
          </h3>
        </div>
        <div className="relative w-full h-[200px] lg:h-[500px] bg-cover bg-center flex justify-center items-center">
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
          {/* <h3 className="text-2xl text-black font-semibold my-3">
            Laying the Foundation: Vision & Strategy
          </h3> */}
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              
              <p className="text-lg text-[#9b8b8b]">
                Earlier this week, BFG Consults had the honor of hosting the Managing Director/CEO of ST Travels and Consulting LLC, a renowned travel and tour company operating in Australia and Nigeria. This visit marked a significant step in fortifying the fruitful partnership between our organizations.
              </p>
              <br />
             
              <p className="text-lg text-[#999]">
                {" "}
               The BFG product development team, led by our Head of Service Delivery and Projects, Peter Chukwuemeka, welcomed the esteemed guest to our offices. The meeting highlighted the successful collaboration between BFG Consults and ST Travels, particularly the development of their Web Application System Project in 2024 (See: <a href="https://www.sttravelsconsulting.com" target="_blank" rel="noopener noreferrer" className="text-black">www.sttravelsconsulting.com</a>). The project, completed within six months, delivered a seamless digital solution that has since been pivotal in transforming ST Travels operations and elevating its brand presence in both the Australian and Nigerian markets.
              </p>
              <br />
              
              <p className="text-lg text-[#999]">
               “We deeply value the honest and insightful feedback provided by the ST Travels CEO during his visit,” said Peter Chukwuemeka. “It reaffirms our commitment to delivering cutting-edge solutions that align with the unique needs of our clients.” The ST Travels CEO expressed his satisfaction with the system’s performance, emphasizing how it has enhanced efficiency and customer engagement, ultimately repositioning the company as a leader in the travel and tours industry.
              </p>
              <br />
              <p className="text-lg text-[#999]">
                This visit underscores the ongoing collaboration and mutual commitment to innovation and excellence shared by BFG Consults and ST Travels. We look forward to building on this success and continuing to deliver impactful solutions for our clients across the globe.
              </p>

              <br />
             
            </div>
            <div className="hidden lg:block lg:w-[20%]">
              <div className="bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-3">
                <h3 className="font-semibold my-2 text-lg">Details</h3>
                <div className="flex justify-between">
                  <p className="text-[#999]">Date</p>
                  <p className="text-[#999]">Jan 15, 2025</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Category</p>
                  <p className="text-[#999]">Partnership</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Reading</p>
                  <p className="text-[#999]"> 1 Min</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Author</p>
                  <p className="text-[#999]">BFG Consults<br/> News</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* latest news */}

        {/* <div className="my-4 p-12">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Related News
          </span>
          <h3 className="text-3xl lg:text-4xl font-bold text-[#333] my-4">
            Related News
          </h3>
          <div className="w-full flex flex-col lg:flex-row gap-3">
            <div className="p-4 border border-[#F7F7F8] rounded-lg w-[100%] lg:w-[50%] shadow-lg">
              <div className="p-4 relative">
                <Image src={FirstNews} alt="first-news" className="w-full" />
                <div className="absolute bottom-10 left-10">
                  <div className="flex gap-1 p-2 bg-white rounded-3xl">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(76,76,77,1)"
                      >
                        <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                      </svg>
                    </span>
                    <span className="text-[#4C4C4D]">July 15, 2024</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl text-[#333] font-semibold my-2">
                  A Blueprint for Business Brilliance
                </h3>
                <p className="text-[#999] text-lg">
                  Explore the intricacies of strategic planning & discover how
                  it can transform your business landscape.{" "}
                </p>
                <button className="flex gap-2 items-center py-2 px-4 rounded-3xl border border-[#E26015] my-4">
                  <span className="text-[#333]">Read More</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(1,1,1,1)"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="p-4 border border-[#F7F7F8] rounded-lg w-[100%] lg:w-[50%] shadow-lg">
              <div className="p-4 relative">
                <Image src={SecondNews} alt="first-news" className="w-full" />
                <div className="absolute bottom-10 left-10">
                  <div className="flex gap-1 p-2 bg-white rounded-3xl">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(76,76,77,1)"
                      >
                        <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                      </svg>
                    </span>
                    <span className="text-[#4C4C4D]">July 28, 2024</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl text-[#333] font-semibold my-2">
                  BFG Consults bags UK Award for Research
                </h3>
                <p className="text-[#999] text-lg">
                  Dive into the world of operational efficiency & learn
                  strategies to boost productivity effortlessly.
                </p>
                <button className="flex gap-2 items-center py-2 px-4 rounded-3xl border border-[#E26015] my-4">
                  <span className="text-[#333]">Read More</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(1,1,1,1)"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
              </div> */}
      </div>
    </>
  );
};

export default page;

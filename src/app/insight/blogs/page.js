import Image from "next/image";
import React from "react";
import Banner from "../../../../public/assets/news-banner.png";
import News1 from "../../../../public/assets/News-ST.jpg";
import CeoNews from "../../../../public/assets/ai-news.png";
import BlogImage from "../../../../public/assets/blog-image.jpeg";
import AfricaImage from "../../../../public/assets/africa-rising.png";
import News2 from "../../../../public/assets/news2.png";
import AwardNews from "../../../../public/assets/bfg-award.jpg";
import Slides from "@/components/Slides";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Blogs
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 items-center justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Latest  Blogs
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
            See the latest updates and blogs from BFG Global Consults. 
          </p>
        </div>

        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={Banner}
            alt="about-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="my-4">
          <Slides />
        </div>
        </div>
        <div className="py-[30px]">
          <div className="">
            <div className="w-full flex flex-col lg:flex-row gap-10 my-4">
            {/* first news */}
            <div className="w-[100%] lg:w-[50%]  p-10 border border-[#F7F7F8] rounded-3xl">
                <div className="h-[200px] lg:h-[350px]">
                  <Image
                    src={AfricaImage}
                    alt="blog-image"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold my-2">
                  Africa Rising: Why Nigeria Is the Next Big Digital Business
                  Opportunity       </h3>
                  <p className="text-[#999]">
                  While global business growth has long centered on the established markets of U.S. tech hubs, industrial Europe, and Asia, a profound shift is now redefining the landscape. Africa, particularly Nigeria, is emerging not merely as a new frontier for foreign investment, but as a vibrant economic powerhouse brimming with unprecedented potential for savvy businesses.


                  </p>
                  <Link href="/insight/blogs/africa-rising-why-nigeria-next-big-digital-business-opportunity">
                  <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                    <span className="text-white ml-2 font-semibold">Read More</span>
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
            {/* first news */}
            <div className="w-[100%] lg:w-[50%]  p-10 border border-[#F7F7F8] rounded-3xl">
                <div className="h-[200px] lg:h-[350px]">
                  <Image
                    src={BlogImage}
                    alt="blog-image"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold my-2">
                  The Digital Divide: A Tale of Two Nigerian Giants – GTBank&apos;s Ascent vs. Mr. Biggs&apos; Decline                  </h3>
                  <p className="text-[#999]">
                  Discover the key lessons from GTBank&apos;s digital masterstroke and Mr. Biggs&apos; costly missteps. Learn why embracing technology, prioritizing mobile-first customer experiences, and acting on data are crucial for survival and growth in today&apos;s rapidly evolving market.
                  </p>
                  <Link href="/insight/blogs/the-digital-divide">
                  <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                    <span className="text-white ml-2 font-semibold">Read More</span>
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
              {/* second news */}
              <div className="w-[100%] lg:w-[50%]  p-10 border border-[#F7F7F8] rounded-3xl">
                <div className="h-[200px] lg:h-[350px]">
                  <Image
                    src={CeoNews}
                    alt="ceo-news"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold my-2">
                 Unlocking Human Potential in the Age of AI and the 5th Industrial Revolution 
                  </h3>
                  <p className="text-[#999]">
                           In today&apos;s rapidly evolving world, one of the most remarkable demonstrations of human potential is Artificial Intelligence (AI). AI, along with other pillars of the 5th Industrial Revolution, is not just a product of human intellect—it is proof of its boundless capabilities.

                  </p>
                  <Link href="/insight/blogs/unlocking-human-potential">
                  <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                    <span className="text-white ml-2 font-semibold">Read More</span>
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
      
    </>
  );
};

export default page;

import Image from "next/image";
import React from "react";
import Banner from "../../../../public/assets/news-banner.png";
import News1 from "../../../../public/assets/News-ST.jpg";
import CeoNews from "../../../../public/assets/ceo-news.jpg"
import News2 from "../../../../public/assets/news2.png";
import AwardNews from "../../../../public/assets/bfg-award.jpg";
import Slides from "@/components/Slides";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          News
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 items-center justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Latest Updates <br /> & News
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Fuel your business growth with inspiring insights! Explore our
            expert-curated content on strategy, tech trends, leadership, &
            industry know-how. Learn, transform, & thrive with us!
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
                    src={CeoNews}
                    alt="ceo-news"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold my-2">
                  Navigating Funding Challenges: Our CEO Shares Insights on How Nigerian Startups Can Attract Investment 
                  </h3>
                  <p className="text-[#999]">
                                     Our Managing Partner/CEO – Mr. Festus BELLO shared expert insights on how Nigerian startups can successfully attract funding for their businesses and products.

                  </p>
                  <Link href="/insight/news/navigating-funding-challenges">
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
                    src={News1}
                    alt="news1"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold my-2">
                   Celebrating Success: ST Travels CEO Visits BFG Consults to Strengthen Partnership
                  </h3>
                  <p className="text-[#999]">
                    The CEO and Founder of ST Travels, Mr. Stanley Chidozie
                  Igboanugo, recently visited BFG Consult&apos;s office in Abuja
                  to celebrate its partnership.
                  </p>
                  <Link href="/insight/news/st-travels-partnership">
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
              {/* second image */}
              <div className="w-[100%] lg:w-[50%] p-10 border border-[#F7F7F8] rounded-3xl">
                <div className="h-[200px] lg:h-[350px]">
                  <Image
                    src={AwardNews}
                    alt="news1"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold my-2">
                    BFG consults bags UK award for research

                  </h3>
                  <p className="text-[#999]">
                    This prestigious honor showcases BFG Global Consults’ commitment to delivering exceptional research and analytical solutions globally while actively promoting Nigeria’s market intelligence on the global stage.
                  </p>
                   <Link href="/insight/news/bfg-bags-award">
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

"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import Slides from "@/components/Slides";
import Link from "next/link";
import { getNews } from "@/lib/api";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      const data = await getNews(null, 100); // Fetch all news
      setNews(data);
      setLoading(false);
    }
    fetchNews();
  }, []);

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
          <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
            Explore our expert-curated content on strategy, tech trends, leadership, &
            industry know-how. 
          </p>
        </div>

        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src="/assets/news-banner.png"
            alt="news-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        
        <div className="my-4">
          <Slides />
        </div>
      </div>

      <div className="py-[30px] px-12">
        {loading ? (
          <div className="flex justify-center items-center h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E26015]"></div>
          </div>
        ) : news.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#999] text-lg">No news articles available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {news.map((item) => (
              <div key={item.id} className="p-10 border border-[#F7F7F8] rounded-3xl">
                <div className="h-[200px] lg:h-[350px] mb-4">
                  {item.featuredImage ? (
                    <Image
                      src={item.featuredImage}
                      alt={item.title}
                      width={600}
                      height={350}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 rounded-3xl flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[#999] text-sm mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11Z"></path>
                    </svg>
                    <span>
                      {new Date(item.publishedDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold my-2 text-[#333]">
                    {item.title}
                  </h3>
                  <p className="text-[#999] line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link href={item.link}>
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
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NewsPage;

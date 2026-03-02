"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getRegionFromPath } from "@/utils/region";

export default function CaseStudiesList({ unit }) {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const region = getRegionFromPath(pathname);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await fetch(
          `/api/case-studies?unit=${unit}&region=${region}`
        );
        const data = await response.json();
        setCaseStudies(data.docs || []);
      } catch (error) {
        console.error("Error fetching case studies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, [unit, region]);

  if (loading) {
    return (
      <div className="w-full my-8 flex justify-center">
        <div className="text-xl text-[#999]">Loading case studies...</div>
      </div>
    );
  }

  if (caseStudies.length === 0) {
    return (
      <div className="w-full my-8">
        <div className="text-center text-xl text-[#999] p-10 border border-[#F7F7F8] rounded-3xl">
          No case studies available yet. Check back soon!
        </div>
      </div>
    );
  }

  // Determine the base path based on region
  const basePath = region === "uk" ? "/uk" : "";

  return (
    <div className="w-full my-8">
      <div className="w-full flex flex-col lg:flex-row flex-wrap gap-4 my-4">
        {caseStudies.map((caseStudy) => (
          <div
            key={caseStudy.id}
            className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl"
          >
            {caseStudy.featuredImage && (
              <div className="h-[200px] lg:h-[350px]">
                <Image
                  src={caseStudy.featuredImage.url}
                  alt={caseStudy.featuredImage.alt || caseStudy.title}
                  width={400}
                  height={350}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            )}
            <div>
              <h3 className="font-sans text-xl lg:text-2xl font-semibold my-4">
                {caseStudy.title}
              </h3>
              <p className="text-[#999]">{caseStudy.excerpt}</p>
              <Link
                href={`${basePath}/insight/case-study/${unit}/${caseStudy.slug}`}
              >
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
        ))}
      </div>
    </div>
  );
}

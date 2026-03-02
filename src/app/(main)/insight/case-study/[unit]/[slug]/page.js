"use client";
import { useEffect, useState, use } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRegionFromPath } from "@/utils/region";
import Slides from "@/components/Slides";

export default function CaseStudyDetail({ params }) {
  const unwrappedParams = use(params);
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const region = getRegionFromPath(pathname);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        const response = await fetch(
          `/api/case-studies?slug=${unwrappedParams.slug}&unit=${unwrappedParams.unit}&region=${region}`
        );
        const data = await response.json();

        if (data.docs && data.docs.length > 0) {
          setCaseStudy(data.docs[0]);
        }
      } catch (error) {
        console.error("Error fetching case study:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [unwrappedParams.slug, unwrappedParams.unit, region]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  if (!caseStudy) {
    notFound();
  }

  const basePath = region === 'uk' ? '/uk' : '';

  return (
    <div className="lg:mt-[150px] p-10">
      <div className="inline-block bg-white border-2 border-[#E26015] p-2 rounded-3xl">
        <Link href={`${basePath}/insight/case-study/${unwrappedParams.unit}`}>
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
        <h3 className="w-[100%] text-[#333] font-bold text-3xl md:text-3xl lg:text-5xl">
          {caseStudy.title}
        </h3>
      </div>

      {caseStudy.featuredImage && (
        <div className="relative w-full h-[300px] lg:h-[500px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={caseStudy.featuredImage.url}
            alt={caseStudy.featuredImage.alt || caseStudy.title}
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      )}

      <div className="my-4">
        <Slides />
      </div>

      {/* Project Overview */}
      <div className="p-1 lg:p-12">
        <h3 className="text-2xl text-black font-semibold my-3">
          Project Overview
        </h3>
        <div className="w-full flex gap-3">
          <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
            <p className="text-lg text-[#9b8b8b]">
              {caseStudy.excerpt || caseStudy.projectOverview}
            </p>
          </div>
          <div className="hidden lg:block lg:w-[20%]">
            <div className="bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-3">
              <h3 className="font-semibold my-2 text-lg">Details</h3>
              <div className="flex justify-between">
                <p className="text-[#999]">Date</p>
                <p className="text-[#999]">
                  {new Date(caseStudy.publishedDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#999]">Category</p>
                <p className="text-[#999] capitalize">{caseStudy.unit}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#999]">Reading</p>
                <p className="text-[#999]">2 Min</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#999]">Author</p>
                <p className="text-[#999]">
                  {caseStudy.author?.name || caseStudy.author?.email || "BFG Product"}<br /> Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      {caseStudy.problemStatement && (
        <div className="p-1 lg:p-12">
          <h3 className="text-2xl text-black font-semibold my-3">
            Problem Statement
          </h3>
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              <p className="text-lg text-[#9b8b8b]">
                {caseStudy.problemStatement}
              </p>
            </div>
            <div className="hidden lg:block lg:w-[20%]"></div>
          </div>
        </div>
      )}

      {/* Approach */}
      {caseStudy.approach && (
        <div className="p-1 lg:p-12">
          <h3 className="text-2xl text-black font-semibold my-3">
            Approach (The How)
          </h3>
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              <p className="text-lg text-[#9b8b8b]">
                {caseStudy.approach}
              </p>
            </div>
            <div className="hidden lg:block lg:w-[20%]"></div>
          </div>
        </div>
      )}

      {/* Solution */}
      {caseStudy.solution && (
        <div className="p-1 lg:px-12">
          <h3 className="text-2xl text-black font-semibold my-3">
            Solution Introduced (The Problem Solving Innovation)
          </h3>
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              <div
                className="text-lg text-[#9b8b8b]"
                dangerouslySetInnerHTML={{ __html: caseStudy.solution }}
              />
            </div>
            <div className="hidden lg:block lg:w-[20%]"></div>
          </div>
        </div>
      )}
    </div>
  );
}

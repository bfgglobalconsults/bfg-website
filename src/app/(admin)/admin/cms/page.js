"use client";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import BlogImage from "../../../../../public/assets/client-centric.png";
import UploadImage from "@/components/UploadImage";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="w-full p-4">
        <div className="flex gap-2 items-center justify-between my-4">
          <h3 className="text-2xl">Blog</h3>
          <div>
            <Link href="/admin/cms/add-new">
              <button className="bg-[#E26015] hover:bg-black py-2 px-6 text-white text-sm rounded-md">
                Add New
              </button>
            </Link>
          </div>
        </div>
        <hr className="my-4" />
        <div>
          {/* tab menu */}
          <div></div>
          {/* tab menu end */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <div>
                  <Image
                    src={BlogImage}
                    alt="Blog Image"
                    className="w-full h-full object-fit rounded-md"
                  />
                  <span className="text-[#777795] text-xs">date</span>
                  <h3 className="text-[#060606] text-md font-semibold">
                    title
                  </h3>
                  <p className="text-[#4D4D4D] text-xs">description</p>
                  <div className="flex items-center gap-2">
                    <button className="bg-[#E26015] hover:bg-black py-2 px-6 text-white text-xs rounded-md">
                      View
                    </button>
                    <button className="bg-[#E26015] hover:bg-black py-2 px-6 text-white text-xs rounded-md">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

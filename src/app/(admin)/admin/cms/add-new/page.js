"use client";
import RichTextEditor from "@/components/RichTextEditor";
import UploadImage from "@/components/UploadImage";
import { CldImage } from "next-cloudinary";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full p-4">
        <div className="flex flex-col gap-2  my-4">
          <h3 className="text-2xl">Create Blog</h3>
          <div>
            <form>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Blog Title
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Blog Title"
                      name="fullName"
                    />
                  </div>
                </div>
                <div className="grid gap-3">
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Enter Blog Description
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Fullname"
                      name="fullName"
                    />
                  </div>
                </div>
                              <UploadImage />
                              
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Blog Content
                  </label>
                  <RichTextEditor />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

"use client";
import dynamic from 'next/dynamic';
import UploadImage from "@/components/UploadImage";
import { CldImage } from "next-cloudinary";
import React, { useState, useRef } from "react";
import axios from 'axios';

const RichTextEditor = dynamic(() => import("@/components/RichTextEditor"), {
  ssr: false,
});

const Page = () => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (imgUrl) => setImage(imgUrl);
  console.log("Image URL:", image);

  const handleContentChange = (content) => setContent(content);

  const handleSubmit = async (e) => { 
    e.preventDefault();
    let content = "";
    if (editorRef.current && typeof editorRef.current.getContent === "function") {
      content = editorRef.current.getContent();
    }
    if (!content) {
      // fallback: get from DOM
      content = document.querySelector('.ql-editor')?.innerHTML || "";
    }
    console.log("Editor content:", content);
    // Now you can send { title, content } to your API
  
  setLoading(true);
    try {
      // Here you would typically send the data to your backend
      console.log("Content:", content);
      const blogData = {
        title,
        description,
        content,
        coverImage: image,
      };
      const res = await axios.post('/api/blogs', blogData, {
        headers: {
          'Content-Type': 'application/json'},
      });
      console.log("Blog Data:", blogData);
      console.log("Response:", res.data);
      
    } catch (error) {
      console.error("Error creating blog:", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <div className="w-full p-4">
        <div className="flex flex-col gap-2  my-4">
          <h3 className="text-2xl">Create Blog</h3>
          <div>
            <form onSubmit={handleSubmit}>
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
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
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
                      placeholder="Enter Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                </div>
                    <UploadImage onChange={handleImageChange} />
                              
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Blog Content
                  </label>
                  <RichTextEditor ref={editorRef} />
                </div>
                <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

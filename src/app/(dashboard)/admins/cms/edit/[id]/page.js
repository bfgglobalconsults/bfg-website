"use client";
import dynamic from 'next/dynamic';
import UploadImage from "@/components/UploadImage";
import { CldImage } from "next-cloudinary";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';

const RichTextEditor = dynamic(() => import("@/components/RichTextEditor"), {
  ssr: false,
});

const Page = ({ params }) => {
  const { id } = params;
  const router = useRouter();
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // Fetch existing blog data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/api/blogs/${id}`);
        const blog = res.data;
        setTitle(blog.title || "");
        setDescription(blog.description || "");
        setContent(blog.content || "");
        setImage(blog.coverImage || "");
        console.log("Fetched blog:", blog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setFetching(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleImageChange = (imgUrl) => setImage(imgUrl);

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
  
    setLoading(true);
    try {
      const blogData = {
        title,
        description,
        content,
        coverImage: image,
      };
      const res = await axios.put(`/api/blogs/${id}`, blogData, {
        headers: {
          'Content-Type': 'application/json'},
      });
      console.log("Updated Blog Data:", blogData);
      console.log("Response:", res.data);
      
      // Navigate back to CMS after successful update
      router.push('/admin/cms');
      
    } catch (error) {
      console.error("Error updating blog:", error);
    } finally {
      setLoading(false);
    }
  }

  if (fetching) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <>
      <div className="w-full p-4">
        <div className="flex flex-col gap-2 my-4">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl">Edit Blog</h3>
            <button
              onClick={() => router.push('/admin/cms')}
              className="text-blue-600 hover:underline"
            >
              ← Back to CMS
            </button>
          </div>
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
                  <RichTextEditor ref={editorRef} initialValue={content} />
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update Blog"}
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

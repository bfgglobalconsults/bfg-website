"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";

const SinglePostPage = ({ params }) => {
  const { id } = params;
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/blogs/${id}`);
        setPost(res.data);
        console.log("Fetched post:", res.data);
      } catch (err) {
        setError("Failed to fetch post");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;
  if (!post) return <div className="p-8">Post not found.</div>;

  // Format date
  const formattedDate = post.createdAt
    ? new Date(post.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md mt-8">
      <button
        className="mb-4 text-blue-600 hover:underline"
        onClick={() => router.back()}
      >
        ← Back to CMS
      </button>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        By {post.author} on {formattedDate}
      </p>
      <Image
        src={post.coverImage || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACUCAMAAAAAoYNxAAAAMFBMVEXp7vG6vsG3u77j6Ou+wsXY3N/e4uXFyczs8fTV2dzJzdDQ1Nfg5ejm6+7BxcjM0dSZOPRSAAACUklEQVR4nO2a63KDIBBGwy2IAr7/2zYSE0WJKWJZOvOdf51pzHHzsayX2w0AAAAAAAAAAAAAAAAAAACAdnH2Xoqta6x6L4vpVUXjQbIrkEM9Y36JMWPcVDK219Q4OIs6yiYUWfoywnnzoaui3E/KvRWF9JOzrqisSr+rU7WVTfF3KQ7lA7bK3UT+YeiUndJSepPfrciUlQ8tj7PBZR6GSLkz7LUT8jHzMETKdr11Z65IImW93n1l3jhJo3yPJ4a8wYxE+ZHkaMbpP3zAJstPozz8Sll4n2qBDSuLx8wmEx2QJssqznKyzVk/nY3fZ4NGWUTDvkxdy9m5qeidM1GTG9d9WSf+173boN7mmWrDlotz8qJo9TNs80ylLPTszGVi6A85XpzjcyIbi8TgGefMj4nea/U6N4zFa5BwXrbKGGUTXUxE2/n0S0R5bvCqxPnd7Q7uV2fWnrLwW+HgvNS5OeVdKna9rjXlT8arPDegHC3AVCpefaMVZdezpYWJ/cpb1Xnuz9TK7rF1y/v8h/2Uiigb1MrhBpt/Ortj4+nmIb1yN49H0k5T9EGOZ+iVXf+Ork3tIO0pu3GR8epbKppQHr8ZNqd84skJsXJ+jamVx/waEyufqTGt8qkaUyp35uQzS0Ll4ZsblKEM5caUCeflf1jlmzsLnXIRUD7kGuWuunL5y1dh7VZSfg5DuhD/bHd1lO3J1paA13ol8eSUnDD+9Dz2cpy+xpnvnlL9Iab8jU/JZK13EQOdUOWIOksPAAAAAAAAAAAAAAAAAAAAAAAAAKASP7r8KNXHFEI0AAAAAElFTkSuQmCC"}
        alt={post.title}
        className="w-full h-64 object-contain rounded mb-6"
        width={800}
        height={456}
      />
      <p className="mb-4 text-lg text-gray-700">{post.description}</p>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default SinglePostPage; 
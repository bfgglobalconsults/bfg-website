"use client";
import React, { useState, useEffect } from 'react';
import { FiPlus, FiSearch, FiFilter, FiEdit, FiTrash2, FiEye } from 'react-icons/fi';
import Link from 'next/link';
import axios from 'axios';
import Loading from '@/components/loader/page';


// Mock Data - Replace with your actual blog post data from an API
const initialPosts = [
  { id: 1, title: 'The Future of Renewable Energy', author: 'Jane Doe', date: '2024-07-20', status: 'Published', excerpt: 'A deep dive into solar, wind, and geothermal innovations...' },
  { id: 2, title: 'A Guide to Mindful Leadership', author: 'John Smith', date: '2024-07-18', status: 'Draft', excerpt: 'Learn how mindfulness can transform your leadership style...' },
  { id: 3, title: 'Top 10 UI/UX Design Trends in 2024', author: 'Emily White', date: '2024-07-15', status: 'Published', excerpt: 'Discover the latest trends shaping digital interfaces...' },
  { id: 4, title: 'The Importance of Data-Driven Decisions', author: 'Michael Brown', date: '2024-07-12', status: 'Published', excerpt: 'How to leverage data to make smarter business choices...' },
  { id: 5, title: 'Getting Started with Next.js 14', author: 'David Green', date: '2024-07-10', status: 'Draft', excerpt: 'A beginner-friendly tutorial for the latest Next.js features...' },
];

const StatusBadge = ({ status }) => {
  const statusStyles = {
    Published: 'bg-green-100 text-green-800',
    Draft: 'bg-yellow-100 text-yellow-800',
  };
  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}>
      {status}
    </span>
  );
};

const CMSPage = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);



  const handleDelete = async (blogId) => {
    try {
      if (window.confirm('Are you sure you want to delete this post?')) {
        await axios.delete(`/api/blogs?id=${blogId}`);
        console.log(`Post with id ${blogId} deleted successfully`);
        setBlogs(blogs.filter(post => post._id !== blogId));
      }
    } catch (error) {
      console.error(`Error deleting post with id ${blogId}:`, error);
    }
  };

  const filteredPosts = posts
    .filter(post => filter === 'All' || post.status === filter)
    .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
  
  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/blogs');
        setBlogs(response.data);
        console.log("Fetched blog posts:", response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        
      } finally {
         setLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">CMS Dashboard</h1>
        <Link href="/admin/cms/add-new">
          <button className="bg-[#E26015] hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 transition">
            <FiPlus />
            <span>Create New Post</span>
          </button>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="relative w-full md:w-1/3">
            <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015]"
            />
          </div>
          <div className="relative">
            <FiFilter className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#E26015] bg-white"
            >
              <option value="All">All Statuses</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {blogs.map(post => {
          // Format date as "July 20, 2024"
          const formattedDate = post.createdAt
            ? new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            : '';
          return (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start hover:shadow-lg transition-shadow">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-2">
                  <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
                  <StatusBadge status={post.status} />
                </div>
                <p className="text-sm text-gray-500 mb-1">By {post.author} on {formattedDate}</p>
                <p className="text-gray-600">{post.description}</p>
              </div>
              <div className="flex items-center space-x-3 mt-4 md:mt-0">
                <button className="text-gray-500 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition" title="View">
                  <FiEye size={18} />
                </button>
                <Link href={`/admin/cms/edit/${post._id}`}>
                  <button className="text-gray-500 hover:text-green-600 p-2 rounded-full hover:bg-gray-100 transition" title="Edit">
                    <FiEdit size={18} />
                  </button>
                </Link>
                <button onClick={() => handleDelete(post._id)} className="text-gray-500 hover:text-red-600 p-2 rounded-full hover:bg-gray-100 transition" title="Delete">
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {filteredPosts.length === 0 && (
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <p className="text-gray-500">No posts found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CMSPage;

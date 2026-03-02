"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { lexicalToHtml } from "@/utils/lexicalToHtml";

export default function BlogDetailPage() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs?where[slug][equals]=${params.slug}&where[status][equals]=published`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }

        const data = await response.json();
        
        if (data.docs && data.docs.length > 0) {
          setBlog(data.docs[0]);
          
          // Fetch related blogs (3 latest excluding current)
          const relatedResponse = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs?where[status][equals]=published&limit=3&sort=-publishedDate`
          );
          const relatedData = await relatedResponse.json();
          setRelatedBlogs(relatedData.docs.filter(item => item.slug !== params.slug).slice(0, 3));
        } else {
          setError("Blog post not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (params.slug) {
      fetchBlog();
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E26015]"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {error || "Blog post not found"}
          </h1>
          <Link href="/insight/blogs">
            <button className="px-6 py-3 bg-[#E26015] text-white rounded-lg hover:bg-[#c54f0f]">
              Back to Blogs
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E26015]">Home</Link>
            <span>/</span>
            <Link href="/insight/blogs" className="hover:text-[#E26015]">Blogs</Link>
            <span>/</span>
            <span className="text-gray-900">{blog.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Featured Image */}
      <div className="container mx-auto px-4 lg:px-12 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#333] mb-6 leading-tight">
            {blog.title}
          </h1>
          
          {blog.featuredImage && (
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-8">
              <Image
                src={blog.featuredImage.url || blog.featuredImage}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Partners/Sponsors Section (if applicable) */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-sm text-gray-600 mb-4">Trusted by Top Partners & Clients</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {/* Add partner logos here if needed */}
              <span className="text-gray-400 text-sm">Partner Logos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-12 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content - Article */}
            <div className="lg:col-span-2">
              {/* Date and Tags */}
              <div className="flex items-center gap-4 text-gray-600 mb-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11Z"></path>
                  </svg>
                  <span>
                    {new Date(blog.publishedDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                {blog.tags && blog.tags.length > 0 && (
                  <>
                    <span>•</span>
                    <div className="flex gap-2 flex-wrap">
                      {blog.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tag.tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Excerpt */}
              {blog.excerpt && (
                <div className="bg-[#FFF5F0] border-l-4 border-[#E26015] p-6 mb-8 rounded-r-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              )}

              {/* Main Content */}
              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: lexicalToHtml(blog.content) }}
              />

              {/* All Tags Section */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-600 mb-4">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#E26015] hover:text-white transition-colors cursor-pointer"
                      >
                        {tag.tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-600 mb-4">Share this article</p>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0 1.29 5.584 4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"></path>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Related Blogs */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-xl font-bold text-[#333] mb-6">Related Articles</h3>
                <div className="space-y-6">
                  {relatedBlogs.map((item) => (
                    <Link key={item.id} href={`/insight/blogs/${item.slug}`}>
                      <div className="group cursor-pointer">
                        {item.featuredImage && (
                          <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                            <Image
                              src={item.featuredImage.url || item.featuredImage}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <p className="text-sm text-gray-500 mb-2">
                          {new Date(item.publishedDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                        <h4 className="font-semibold text-gray-800 group-hover:text-[#E26015] transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Back to Blogs Button */}
                <Link href="/insight/blogs">
                  <button className="w-full mt-8 px-6 py-3 bg-[#E26015] text-white rounded-lg hover:bg-[#c54f0f] transition-colors">
                    ← All Blogs
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Client Success Stories */}
      <div className="bg-[#E26015] py-16 mt-16">
        <div className="container mx-auto px-4 lg:px-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Clients' Success Stories</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover how we've helped businesses across Africa achieve remarkable growth and transformation
          </p>
          <Link href="/insight/case-study">
            <button className="px-8 py-4 bg-white text-[#E26015] font-bold rounded-full hover:shadow-xl transition-all">
              View Case Studies
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="relative h-[400px] bg-cover bg-center" style={{backgroundImage: "url('/assets/middle-content-banner.png')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 to-[#0A2540]/70"></div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="max-w-2xl text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Securing Industry Relevance for Every African Business, Everywhere
              </h2>
              <p className="text-lg mb-6">
                Our solutions span all African markets and SMEs, ready to take action that advances the way we work and collaborate. Let's build the future together.
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-[#E26015] text-white font-bold rounded-full hover:bg-[#c54f0f] transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

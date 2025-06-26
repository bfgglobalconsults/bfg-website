// import dbConnect from '@/src/app/lib/db';
import { connectToMongoDB } from '@/app/lib/db';
import Blog from "@/app/models/blogModel";

// import Blog from '@/src/app/models/blogModel';

export async function GET(req, { params }) {
  await connectToMongoDB();
  const { id } = params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return new Response(JSON.stringify({ message: 'Blog not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching blog', error: error.message }), { status: 500 });
  }
}

export async function PUT(req, { params }) {
  await connectToMongoDB();
  const { id } = params;
  try {
    const data = await req.json();
    const updatedBlog = await Blog.findByIdAndUpdate(id, data, { new: true });
    if (!updatedBlog) {
      return new Response(JSON.stringify({ message: 'Blog not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(updatedBlog), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error updating blog', error: error.message }), { status: 500 });
  }
}

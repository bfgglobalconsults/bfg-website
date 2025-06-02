import Blog from "@/app/models/blogModel";
import { connectToMongoDB } from "@/app/lib/db";

export async function GET(request) {
  try {
    if (!process.env.MONGODB_URI) {
      return Response.json({ error: "MONGODB_URI is not set in environment variables" }, { status: 500 });
    }
    await connectToMongoDB();
    const blogs = await Blog.find();
    return Response.json(blogs);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    if (!process.env.MONGODB_URI) {
      return Response.json({ error: "MONGODB_URI is not set in environment variables" }, { status: 500 });
    }
    await connectToMongoDB();
    const data = await request.json();
    const blog = await Blog.create(data);
    return Response.json(blog, { status: 201 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 400 });
  }
}

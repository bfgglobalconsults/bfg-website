import Blog from "@/app/models/blogModel";
import { connectToMongoDB } from "@/app/lib/db";

export async function GET(request, { params }) {
  try {
    if (!process.env.MONGODB_URI) {
      return Response.json({ error: "MONGODB_URI is not set in environment variables" }, { status: 500 });
    }
    await connectToMongoDB();
    const blog = await Blog.findById(params.id);
    if (!blog) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json(blog);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    if (!process.env.MONGODB_URI) {
      return Response.json({ error: "MONGODB_URI is not set in environment variables" }, { status: 500 });
    }
    await connectToMongoDB();
    const blog = await Blog.findByIdAndDelete(params.id);
    if (!blog) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json({ message: "Deleted" });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
} 
import Blog from "@/app/models/blogModel";
import { connectToMongoDB } from "@/app/lib/db";
import { NextResponse } from "next/server";

function checkMongoEnv() {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json({ error: "MONGODB_URI is not set in environment variables" }, { status: 500 });
  }
  return null;
}

export async function GET(request, { params }) {
  const envError = checkMongoEnv();
  if (envError) return envError;
  try {
    await connectToMongoDB();
    const blog = await Blog.findById(params.id);
    if (!blog) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const envError = checkMongoEnv();
  if (envError) return envError;
  try {
    await connectToMongoDB();
    const blog = await Blog.findByIdAndDelete(params.id);
    if (!blog) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// Optional: Update a blog
export async function PUT(request, { params }) {
  const envError = checkMongoEnv();
  if (envError) return envError;
  try {
    await connectToMongoDB();
    const body = await request.json();
    const blog = await Blog.findByIdAndUpdate(params.id, body, { new: true });
    if (!blog) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(blog, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
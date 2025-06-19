import Blog from "@/app/models/blogModel";
import { connectToMongoDB } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    if (!process.env.MONGODB_URI) {
      return NextResponse.json({ error: "MONGODB_URI is not set in environment variables" }, { status: 500 });
    }
    await connectToMongoDB();
    const blogs = await Blog.find();
    return NextResponse.json(blogs);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectToMongoDB();
    const body = await request.json();
    const blog = await Blog.create(body);
    return NextResponse.json(blog, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    await connectToMongoDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

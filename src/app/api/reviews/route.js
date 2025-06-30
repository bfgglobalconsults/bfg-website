import { NextResponse } from 'next/server';
import { connectToMongoDB } from "@/app/lib/db";
import Review from '@/app/models/reviewModel';

export async function GET() {
  await connectToMongoDB();
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  await connectToMongoDB();
  try {
    const data = await req.formData();
    const review = await Review.create({
      department: data.get('department'),
      name: data.get('name'),
      role: data.get('role'),
      company: data.get('company'),
      review: data.get('review'),
      rating: data.get('rating'),
      logo: data.get('logo') || '',
    });
    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function PATCH(req) {
  await connectToMongoDB();
  try {
    const { id, ...update } = await req.json();
    const review = await Review.findByIdAndUpdate(id, update, { new: true });
    if (!review) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(review);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(req) {
  await connectToMongoDB();
  try {
    const { id } = await req.json();
    const review = await Review.findByIdAndDelete(id);
    if (!review) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ message: 'Deleted' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
} 
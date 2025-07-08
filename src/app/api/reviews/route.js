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
    let serviceUnits = [];
    let department = data.get('department') || '';
    if (data.get('serviceUnits')) {
      try {
        serviceUnits = JSON.parse(data.get('serviceUnits'));
        if (serviceUnits.length > 0) {
          department = serviceUnits[0].unit;
        }
      } catch (e) {
        // fallback: ignore serviceUnits if parsing fails
      }
    }
    const review = await Review.create({
      department,
      serviceUnits,
      name: data.get('name'),
      role: data.get('role'),
      company: data.get('company'),
      review: data.get('review') || data.get('ratingComment') || '',
      rating: data.get('rating'),
      location: data.get('location'),
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
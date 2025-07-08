import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  department: { type: String },
  serviceUnits: [
    {
      unit: { type: String, required: true },
      subServices: [{ type: String, required: true }],
    },
  ],
  name: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  review: { type: String },
  rating: { type: String, required: true },
  location: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models?.Review || mongoose.model('Review', ReviewSchema); 
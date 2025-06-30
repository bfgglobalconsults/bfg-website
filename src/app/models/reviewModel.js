import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  department: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: String, required: true },
  logo: { type: String, default: '' },
}, { timestamps: true });

export default mongoose.models?.Review || mongoose.model('Review', ReviewSchema); 
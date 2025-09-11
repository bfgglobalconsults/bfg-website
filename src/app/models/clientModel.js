import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  company: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    zipCode: String,
  },
  industry: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive', 'Prospect'],
    default: 'Prospect',
  },
  totalRevenue: {
    type: Number,
    default: 0,
  },
  totalProjects: {
    type: Number,
    default: 0,
  },
  lastProjectDate: {
    type: Date,
  },
  notes: {
    type: String,
  },
}, {
  timestamps: true,
});

const Client = mongoose.models?.Client || mongoose.model('Client', clientSchema);

export default Client;


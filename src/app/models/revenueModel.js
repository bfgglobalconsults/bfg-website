import mongoose from 'mongoose';

const revenueSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: 'NGN',
  },
  type: {
    type: String,
    enum: ['Invoice', 'Payment', 'Refund', 'Expense'],
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Paid', 'Overdue', 'Cancelled'],
    default: 'Pending',
  },
  dueDate: {
    type: Date,
  },
  paidDate: {
    type: Date,
  },
  description: {
    type: String,
  },
  invoiceNumber: {
    type: String,
  },
  paymentMethod: {
    type: String,
    enum: ['Bank Transfer', 'Cash', 'Check', 'Credit Card', 'Other'],
  },
}, {
  timestamps: true,
});

const Revenue = mongoose.models?.Revenue || mongoose.model('Revenue', revenueSchema);

export default Revenue;


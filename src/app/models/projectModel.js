import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  projectManager: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['Completed', 'Ongoing', 'Delayed', 'Pending'],
    default: 'Pending',
  },
  progress: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
  },
  budget: {
    type: Number,
    required: true,
  },
  actualCost: {
    type: Number,
    default: 0,
  },
  timeSpent: {
    type: Number, // in hours
    default: 0,
  },
  estimatedHours: {
    type: Number, // in hours
    required: true,
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High', 'Critical'],
    default: 'Medium',
  },
  category: {
    type: String,
    enum: ['Web Development', 'Mobile App', 'Design', 'Consulting', 'Other'],
    required: true,
  },
}, {
  timestamps: true,
});

const Project = mongoose.models?.Project || mongoose.model('Project', projectSchema);

export default Project;


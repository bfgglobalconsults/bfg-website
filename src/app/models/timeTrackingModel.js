import mongoose from 'mongoose';

const timeTrackingSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  employeeId: {
    type: String,
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  hoursWorked: {
    type: Number,
    required: true,
    min: 0,
    max: 24,
  },
  description: {
    type: String,
  },
  task: {
    type: String,
    required: true,
  },
  billable: {
    type: Boolean,
    default: true,
  },
  hourlyRate: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

const TimeTracking = mongoose.models?.TimeTracking || mongoose.model('TimeTracking', timeTrackingSchema);

export default TimeTracking;


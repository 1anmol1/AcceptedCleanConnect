import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
  bin: {
    type: mongoose.Schema.ObjectId,
    ref: 'Bin',
    required: true,
  },
  reportedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  issueType: {
    type: String,
    enum: ['Overflow', 'Damaged', 'Spill', 'Other'],
    required: true,
  },
  description: {
    type: String,
    maxlength: 500,
  },
  imageUrl: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Pending', 'In-Progress', 'Resolved'],
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Complaint = mongoose.model('Complaint', complaintSchema);
export default Complaint;
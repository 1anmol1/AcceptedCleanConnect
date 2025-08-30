import mongoose from 'mongoose';

const binSchema = new mongoose.Schema({
  binId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number], // [Longitude, Latitude]
      required: true,
    },
  },
  fillLevel: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
  },
  status: {
    type: String,
    enum: ['Empty', 'Half-Full', 'Full', 'Overflow', 'Maintenance'],
    default: 'Empty',
  },
  lastEmptied: {
    type: Date,
    default: null,
  },
});

// Create a 2dsphere index for geospatial queries
binSchema.index({ location: '2dsphere' });

const Bin = mongoose.model('Bin', binSchema);
export default Bin;
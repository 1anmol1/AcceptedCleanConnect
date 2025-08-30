import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

// Load env vars
dotenv.config({ path: './server/.env' });

// Load models
import User from '../models/User.js';
import Bin from '../models/Bin.js';
import Complaint from '../models/Complaint.js';

// --- INBUILT LOGIN CREDENTIALS & SAMPLE DATA ---

const seedData = async () => {
  // Hash passwords
  const salt = await bcrypt.genSalt(10);
  const citizenPassword = await bcrypt.hash('citizen123', salt);
  const workerPassword = await bcrypt.hash('worker123', salt);
  const officerPassword = await bcrypt.hash('officer123', salt);

  const users = [
    {
      name: 'Aarav Sharma (Citizen)',
      email: 'citizen@cleanconnect.com',
      password: citizenPassword,
      role: 'Citizen',
    },
    {
      name: 'Ramesh Kumar (Worker)',
      email: 'worker@cleanconnect.com', // Using email for login simplicity for now
      password: workerPassword,
      role: 'Worker',
    },
    {
      name: 'Priya Singh (Officer)',
      email: 'officer@cleanconnect.com',
      password: officerPassword,
      role: 'Officer',
    },
  ];

  const bins = [
    {
      binId: 'PN-FC-01',
      location: { type: 'Point', coordinates: [73.8567, 18.5204] },
      fillLevel: 85,
      status: 'Full',
    },
    {
      binId: 'PN-AU-02',
      location: { type: 'Point', coordinates: [73.8197, 18.5583] },
      fillLevel: 40,
      status: 'Half-Full',
    },
    {
      binId: 'PN-KT-03',
      location: { type: 'Point', coordinates: [73.8242, 18.5074] },
      fillLevel: 95,
      status: 'Overflow',
    },
  ];

  try {
    console.log('Connecting to database...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected.');

    console.log('Clearing existing data...');
    await User.deleteMany();
    await Bin.deleteMany();
    await Complaint.deleteMany();

    console.log('Importing new data...');
    await User.insertMany(users);
    await Bin.insertMany(bins);

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error}`);
    process.exit(1);
  }
};

seedData();
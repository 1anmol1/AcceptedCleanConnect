import express from 'express';
import cors from 'cors';
import 'dotenv/config';

// Ensure the DB connection is commented out
// import connectDB from './config/db.js'; 

import binRoutes from './routes/bins.js';
import authRoutes from './routes/auth.js';

// connectDB(); // Ensure this is commented out

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/bins', binRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Mock Server running on port ${PORT}`));
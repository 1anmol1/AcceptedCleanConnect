import express from 'express';
import { getAllBins } from '../controllers/binController.js';

const router = express.Router();

router.route('/').get(getAllBins);

export default router;
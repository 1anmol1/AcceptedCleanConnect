import { bins } from '../utils/mockDatabase.js';

export const getAllBins = async (req, res) => {
  res.status(200).json({
    success: true,
    count: bins.length,
    data: bins,
  });
};
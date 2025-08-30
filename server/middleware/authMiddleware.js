import jwt from 'jsonwebtoken';
import { users } from '../utils/mockDatabase.js'; // Import mock data to find the user

export const protect = async (req, res, next) => {
  let token;

  // Check if the token exists in the "Authorization: Bearer <token>" header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      // Verify the token is valid
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
      
      // Find the user from our mock database using the ID from the token
      req.user = users.find(u => u._id === decoded.id);

      if (!req.user) {
        return res.status(401).json({ error: 'Not authorized, user not found' });
      }

      // If successful, proceed to the AI controller
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(401).json({ error: 'Not authorized, no token' });
  }
};
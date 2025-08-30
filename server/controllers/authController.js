import jwt from 'jsonwebtoken';
import { users } from '../utils/mockDatabase.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt for:', email);

  if (!email || !password) {
    console.log('Missing email or password');
    return res.status(400).json({ success: false, error: 'Please provide an email and password' });
  }

  const user = users.find(u => u.email === email);
  console.log('Found user:', user ? 'yes' : 'no');
  
  if (!user || user.password !== password) {
    console.log('Invalid credentials for:', email);
    return res.status(401).json({ success: false, error: 'Invalid credentials' });
  }

  console.log('Successful login for:', email);
  sendTokenResponse(user, 200, res);
};

export const register = (req, res) => {
  const user = users.find(u => u.role === 'Citizen');
  sendTokenResponse(user, 201, res);
};

// CORRECTED: This function now correctly sends the response.
const sendTokenResponse = (user, statusCode, res) => {
  const payload = {
    id: user._id,
    role: user.role
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret', {
    expiresIn: process.env.JWT_EXPIRE || '30d',
  });

  res.status(statusCode).json({
    success: true,
    token,
    user: { 
      id: user._id, 
      name: user.name,
      email: user.email,
      role: user.role,
      email: user.email,
      role: user.role
    }
  });
};
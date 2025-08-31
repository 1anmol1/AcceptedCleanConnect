import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'; 
import './Login.css';

// Mock user data to simulate a successful login without a backend call
const mockUsers = {
  Citizen: {
    id: 'user001',
    name: 'Aarav Sharma (Citizen)',
    email: 'citizen@cleanconnect.com',
    role: 'Citizen',
  },
  Worker: {
    id: 'user002',
    name: 'Ramesh Kumar (Worker)',
    email: 'worker@cleanconnect.com',
    role: 'Worker',
  },
  Officer: {
    id: 'user003',
    name: 'Priya Singh (Officer)',
    email: 'officer@cleanconnect.com',
    role: 'Officer',
  },
};


const Login = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [activeRole, setActiveRole] = useState('Citizen');
  const [formData, setFormData] = useState({ name: '', email: '', password: '', workerCode: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  // EDITED: This function now bypasses the backend call for login
  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (isLoginView) {
      // --- Login Bypass Logic ---
      const userToLogin = mockUsers[activeRole];

      if (userToLogin) {
        // Simulate a successful API response
        const mockAuthData = {
          token: `mock-token-for-${activeRole.toLowerCase()}`,
          user: userToLogin,
        };
        
        // Use the login function from AuthContext
        login(mockAuthData);
        
        // Navigate to the correct dashboard
        navigate(`/${activeRole.toLowerCase()}/dashboard`);
      } else {
        setError('Could not find a mock user for the selected role.');
      }
    } else {
      // --- Registration Logic (can be implemented here later) ---
      alert('Registration form submitted (simulation).');
      // For now, we'll just switch back to the login view
      setIsLoginView(true);
    }
  };

  const setRole = (role) => {
    setActiveRole(role);
    setError('');
  };

  return (
    <div className="login-page-container">
      <div className={`form-container`}>
        <div className="form-card">
          <div className="role-selector">
            <button onClick={() => setRole('Citizen')} className={activeRole === 'Citizen' ? 'active' : ''}>Citizen</button>
            <button onClick={() => setRole('Worker')} className={activeRole === 'Worker' ? 'active' : ''}>Worker</button>
            <button onClick={() => setRole('Officer')} className={activeRole === 'Officer' ? 'active' : ''}>Officer</button>
          </div>

          <h2>{isLoginView ? 'Welcome Back' : `Create ${activeRole} Account`}</h2>
          <p>
            {isLoginView 
              ? `Select a role and click Login to continue.` 
              : `Fill out the form to create a ${activeRole} account.`
            }
          </p>
          
          <form onSubmit={onSubmit}>
            {!isLoginView && activeRole !== 'Worker' && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" value={name} onChange={onChange} required />
              </div>
            )}
            
            {/* The email and password fields are still visible but are ignored during login */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" value={email} onChange={onChange} required={!isLoginView} />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={password} onChange={onChange} required={!isLoginView} />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="btn btn-primary btn-block">
              {isLoginView ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <div className="toggle-text">
            {isLoginView ? "Don't have an account?" : "Already have an account?"}
            <button onClick={() => setIsLoginView(!isLoginView)} className="toggle-button">
              {isLoginView ? 'Sign Up' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'; // Import the hook
import './Login.css';

const Login = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [activeRole, setActiveRole] = useState('Citizen');
  const [formData, setFormData] = useState({ name: '', email: '', password: '', workerCode: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function from our hook

  const { name, email, password, workerCode } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const url = isLoginView ? '/api/auth/login' : '/api/auth/register';
    
    let payload = {};
    if (activeRole === 'Worker') {
      // For simplicity, using email for worker mock login.
      // The real backend can be adjusted to use workerCode later.
      payload = { email, password, role: 'Worker' };
    } else {
      payload = isLoginView 
        ? { email, password, role: activeRole } 
        : { name, email, password, role: activeRole };
    }
    
    try {
      const response = await axios.post(url, payload);
      
      // Use the centralized login function to update state and localStorage
      login(response.data);

      const userRole = response.data.user.role.toLowerCase();
      navigate(`/${userRole}/dashboard`);

    } catch (err) { // --- THIS BLOCK IS NOW CORRECTED ---
      setError(err.response?.data?.error || 'An error occurred. Please try again.');
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
          <p>Log in to access your {activeRole} portal.</p>
          
          <form onSubmit={onSubmit}>
            {!isLoginView && activeRole !== 'Worker' && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" value={name} onChange={onChange} required />
              </div>
            )}

            {activeRole !== 'Worker' && (
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={email} onChange={onChange} required />
              </div>
            )}
            
            {activeRole === 'Worker' && (
              <div className="form-group">
                {/* For the mock server, we still use email, but the label can be changed later */}
                <label htmlFor="workerEmail">Worker Email</label>
                <input type="email" id="workerEmail" name="email" value={email} onChange={onChange} placeholder="worker@cleanconnect.com" required />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={password} onChange={onChange} required />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="btn btn-primary btn-block">
              {isLoginView ? 'Login' : 'Sign Up'}
            </button>
          </form>

          {!isLoginView && activeRole === 'Worker' ? (
              <div className="toggle-text">
                Workers are registered by Officers.
              </div>
            ) : (
              <div className="toggle-text">
                {isLoginView ? "Don't have an account?" : "Already have an account?"}
                <button onClick={() => setIsLoginView(!isLoginView)} className="toggle-button">
                  {isLoginView ? 'Sign Up' : 'Login'}
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Login;
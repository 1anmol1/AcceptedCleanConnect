import React from 'react';
import { FaClipboardCheck, FaTrashAlt, FaChartLine } from 'react-icons/fa';
import profileImage from '/src/assets/profile.jpg'; // Corrected path
import './WorkerProfile.css';

const WorkerProfile = () => {
  return (
    <div className="profile-container container fade-in">
      <div className="profile-header">
        <img 
          src={profileImage}
          alt="Worker Avatar" 
          className="profile-avatar" 
        />
        <h2>Ramesh Kumar's Profile</h2>
        <span className="profile-badge">Sanitation Specialist</span>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <FaClipboardCheck className="stat-icon" />
          <h3>Route Completion (Today)</h3>
          <p className="stat-value">85%</p>
        </div>
        <div className="stat-card">
          <FaTrashAlt className="stat-icon" />
          <h3>Bins Cleared (Today)</h3>
          <p className="stat-value">34</p>
        </div>
        <div className="stat-card">
          <FaChartLine className="stat-icon" />
          <h3>Efficiency Rating</h3>
          <p className="stat-value">A+</p>
        </div>
      </div>
    </div>
  );
};

export default WorkerProfile;
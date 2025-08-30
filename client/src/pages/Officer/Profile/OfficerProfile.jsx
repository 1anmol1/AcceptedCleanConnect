import React from 'react';
import { FaUsers, FaRoute, FaCheckCircle } from 'react-icons/fa';
import profileImage from '/src/assets/profile.jpg'; // Corrected path
import './OfficerProfile.css';

const OfficerProfile = () => {
  return (
    <div className="profile-container container fade-in">
      <div className="profile-header">
        <img 
          src={profileImage}
          alt="Officer Avatar" 
          className="profile-avatar" 
        />
        <h2>Priya Singh's Profile</h2>
        <span className="profile-badge">Operations Head</span>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h3>Workers Managed</h3>
          <p className="stat-value">12</p>
        </div>
        <div className="stat-card">
          <FaRoute className="stat-icon" />
          <h3>Active Routes</h3>
          <p className="stat-value">8</p>
        </div>
        <div className="stat-card">
          <FaCheckCircle className="stat-icon" />
          <h3>Issues Resolved This Week</h3>
          <p className="stat-value">45</p>
        </div>
      </div>
    </div>
  );
};

export default OfficerProfile;
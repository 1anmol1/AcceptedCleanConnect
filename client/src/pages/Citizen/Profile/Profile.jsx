import React from 'react';
import './Profile.css';
import { FaTrophy, FaStar, FaHistory } from 'react-icons/fa';
import profileImage from '../../../assets/profile.jpg'; // 1. Import the local image

const Profile = () => {
  return (
    <div className="profile-container container fade-in">
      <div className="profile-header">
        <img 
          src={profileImage} // 2. Use the imported image variable here
          alt="User Avatar" 
          className="profile-avatar" 
        />
        <h2>Aarav Sharma's Profile</h2>
        <span className="profile-badge">Cleanliness Champion</span>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <FaStar className="stat-icon" />
          <h3>Points Earned</h3>
          <p className="stat-value">1,250</p>
        </div>
        <div className="stat-card">
          <FaTrophy className="stat-icon" />
          <h3>Badges Unlocked</h3>
          <p className="stat-value">5</p>
        </div>
        <div className="stat-card">
          <FaHistory className="stat-icon" />
          <h3>Reports Made</h3>
          <p className="stat-value">12</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
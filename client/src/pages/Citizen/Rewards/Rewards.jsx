import React from 'react';
import { FaTrophy, FaUsers } from 'react-icons/fa';
import dashboardHeroImage from '/src/assets/rewards.png'; // Import the local hero image
import './Rewards.css';

const Rewards = () => {
  return (
    <div className="rewards-page container fade-in">
      <header 
        className="page-header"
        style={{ backgroundImage: `url(${dashboardHeroImage})` }} // Apply image as inline style
      >
        <h1>Rewards & Leaderboard</h1>
        <p>Earn points for responsible waste disposal and climb the ranks!</p>
      </header>

      <div className="rewards-grid">
        <div className="card points-card">
          <FaTrophy className="card-icon" />
          <h3>Your Points</h3>
          <p className="points-total">1,250</p>
          <button className="btn btn-primary">Redeem Rewards</button>
        </div>
        <div className="card leaderboard-card">
          <FaUsers className="card-icon" />
          <h3>Community Leaderboard</h3>
          <ul className="leaderboard-list">
            <li><span>1. Priya S.</span> <span>2,500 pts</span></li>
            <li><span>2. Rohan K.</span> <span>2,310 pts</span></li>
            <li className="current-user"><span>3. You</span> <span>1,250 pts</span></li>
            <li><span>4. Aisha M.</span> <span>1,180 pts</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Rewards;
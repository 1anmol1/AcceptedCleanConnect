import React, { useState, useEffect } from 'react';
import { FaRoute, FaExclamationCircle, FaCheckDouble } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MapComponent from '../../../components/Map/MapComponent';
import axios from 'axios';
import dashboardHeroImage from '/src/assets/workerdash.png';
import './WorkerDashboard.css';

const ichalkaranjiCenter = { lat: 16.7033, lng: 74.4685 };

const WorkerDashboard = () => {
  const [bins, setBins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBins = async () => {
      try {
        const response = await axios.get('/api/bins');
        setBins(response.data.data);
      } catch (err) {
        setError('Failed to load bin data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBins();
  }, []);

  return (
    <div className="worker-dashboard-page container fade-in">
      <header 
        className="page-header"
        style={{ backgroundImage: `url(${dashboardHeroImage})` }}
      >
        <h1>Worker Dashboard</h1>
        <p>Welcome, Ramesh! Here's your summary for today.</p>
      </header>
      <div className="map-container">
        {loading && <p className="loading-text">Loading Map & Bin Data...</p>}
        {error && <p className="error-message">{error}</p>}
        {!loading && !error && (
          <MapComponent 
            center={ichalkaranjiCenter} 
            markers={bins} 
          />
        )}
      </div>
      <div className="dashboard-grid">
        <Link to="/worker/directions" className="dashboard-card card">
          <FaRoute className="card-icon" />
          <h3>View Assigned Route</h3>
          <p>Check your optimized collection route for the day.</p>
        </Link>
        <Link to="/worker/new-complaint" className="dashboard-card card">
          <FaExclamationCircle className="card-icon" />
          <h3>Report a New Issue</h3>
          <p>Report roadblocks, damaged bins, or other problems.</p>
        </Link>
        <Link to="/worker/resolutions" className="dashboard-card card">
          <FaCheckDouble className="card-icon" />
          <h3>View Resolutions</h3>
          <p>Check and resolve tasks assigned by your officer.</p>
        </Link>
      </div>
    </div>
  );
};

export default WorkerDashboard;


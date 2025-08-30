import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MapComponent from '../../../components/Map/MapComponent';
import dashboardHeroImage from '../../../assets/citizendash.png'; // Import the local hero image
import './CitizenDashboard.css';

// Define the center coordinates for the map
const ichalkaranjiCenter = { lat: 16.7033, lng: 74.4685 };

const CitizenDashboard = () => {
  const [bins, setBins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // This useEffect hook fetches bin data from the backend
  useEffect(() => {
    const fetchBins = async () => {
      try {
        // Get the authentication token from local storage
        const token = localStorage.getItem('token');

        // Make a GET request to your backend API endpoint, including the auth token
        const response = await axios.get('/api/bins', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setBins(response.data.data);
      } catch (err) {
        setError('Failed to load bin data. Please ensure you are logged in and try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBins();
  }, []);

  return (
    <div className="citizen-dashboard container fade-in">
      <header 
        className="dashboard-header"
        style={{ backgroundImage: `url(${dashboardHeroImage})` }} // Apply image as inline style
      >
        <h1>Live Dustbin Map - Ichalkaranji</h1>
        <p>View the real-time status of smart bins across the city.</p>
      </header>

      <div className="map-container">
        {/* The functional MapComponent is now rendered here */}
        {loading && <p className="loading-text">Loading Map & Bin Data...</p>}
        {error && <p className="error-message">{error}</p>}
        {!loading && !error && (
          <MapComponent 
            center={ichalkaranjiCenter} 
            markers={bins} 
          />
        )}
      </div>

      <div className="dashboard-actions">
        <Link to="/citizen/report" className="btn btn-primary report-button">
          <FaExclamationTriangle /> Report an Issue
        </Link>
      </div>
    </div>
  );
};

export default CitizenDashboard;

import React from 'react';
import { FaListOl } from 'react-icons/fa';
import MapComponent from '../../../components/Map/MapComponent';
import dashboardHeroImage from '/src/assets/dashboard-hero.jpg';
import './Directions.css';

// Mock data directly available for presentation
const mockRoute = [
  { binId: 'ICK-03', address: 'Near DKTE College', status: 'Overflow', location: { coordinates: [74.4582, 16.7091] } },
  { binId: 'ICK-01', address: 'Near Rajwada', status: 'Full', location: { coordinates: [74.4685, 16.7033] } },
  { binId: 'ICK-02', address: 'Near Bus Stand', status: 'Half-Full', location: { coordinates: [74.4751, 16.6989] } },
];

const ichalkaranjiCenter = { lat: 16.7033, lng: 74.4685 };

const Directions = () => {
  const route = mockRoute;

  const routeCoordinates = route.map(stop => ({
    lat: stop.location.coordinates[1],
    lng: stop.location.coordinates[0],
  }));

  return (
    <div className="directions-page container fade-in">
      <header 
        className="page-header"
        style={{ backgroundImage: `url(${dashboardHeroImage})` }}
      >
        <h1>Today's Assigned Route</h1>
        <p>Follow the optimized route for efficient collection.</p>
      </header>

      <div className="directions-layout">
        <div className="map-panel card">
          <MapComponent 
            center={ichalkaranjiCenter} 
            markers={route} 
            routeCoordinates={routeCoordinates} 
          />
        </div>
        <div className="route-list-panel card">
          <h3><FaListOl /> Collection Stops</h3>
          <ul className="route-list">
            {route.map((stop, index) => (
              <li key={stop.binId} className="route-item">
                <div className="route-number">{index + 1}</div>
                <div className="route-details">
                  <strong>Bin ID: {stop.binId}</strong>
                  <span>{stop.address}</span>
                </div>
                <span className={`route-status status-${stop.status.toLowerCase()}`}>{stop.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Directions;

import React, { useState } from 'react';
import { FaUserPlus, FaPhone } from 'react-icons/fa';
import AddWorkerModal from '../../../components/Modals/AddWorkerModal';
import MapComponent from '../../../components/Map/MapComponent';
import dashboardHeroImage from '../../../assets/workerdash.png';
import './WorkerManagement.css';

const ichalkaranjiCenter = { lat: 16.7033, lng: 74.4685 };

const WorkerManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const workers = [
    { id: 'W01', name: 'Ramesh Kumar', route: 'Kothrud', status: 'On-Duty' },
    { id: 'W02', name: 'Sita Sharma', route: 'Aundh', status: 'On-Duty' },
    { id: 'W03', name: 'Vikram Singh', route: 'FC Road', status: 'Off-Duty' },
  ];

  return (
    <>
      <div className="worker-management-page container fade-in">
        <header 
          className="page-header"
          style={{ backgroundImage: `url(${dashboardHeroImage})` }}
        >
          <h1>Worker Management</h1>
          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
            <FaUserPlus /> Add New Worker
          </button>
        </header>
        <div className="map-container" style={{marginBottom: '2rem'}}>
          <MapComponent center={ichalkaranjiCenter} />
        </div>
        <div className="worker-table-container card">
          <table className="worker-table">
            <thead>
              <tr>
                <th>Worker ID</th>
                <th>Name</th>
                <th>Assigned Route</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {workers.map(worker => (
                <tr key={worker.id}>
                  <td>{worker.id}</td>
                  <td>{worker.name}</td>
                  <td>{worker.route}</td>
                  <td><span className={`status-badge status-${worker.status.toLowerCase()}`}>{worker.status}</span></td>
                  <td>
                    <button className="btn-action"><FaPhone /> Contact</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddWorkerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default WorkerManagement;

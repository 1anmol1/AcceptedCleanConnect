import React, { useState } from 'react';
import { FaUserPlus, FaPhone } from 'react-icons/fa';
import AddWorkerModal from '../../../components/Modals/AddWorkerModal'; // Import the new modal
import dashboardHeroImage from '../../../assets/workerdash.png'; // Import the hero image
import './WorkerManagement.css';

const WorkerManagement = () => {
  // State to control the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Placeholder data for workers
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
          style={{ backgroundImage: `url(${dashboardHeroImage})` }} // Apply hero image
        >
          <h1>Worker Management</h1>
          {/* This button now opens the modal */}
          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
            <FaUserPlus /> Add New Worker
          </button>
        </header>
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
      
      {/* Render the modal component */}
      <AddWorkerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default WorkerManagement;

import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './AddWorkerModal.css';

const AddWorkerModal = ({ isOpen, onClose }) => {
  // If the modal is not open, don't render anything
  if (!isOpen) {
    return null;
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form data submission here
    alert('New worker added (simulation)!');
    onClose(); // Close the modal after submission
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add New Worker</h2>
          <button onClick={onClose} className="modal-close-btn">
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit} className="styled-form">
            <div className="form-group">
              <label htmlFor="workerName">Full Name</label>
              <input type="text" id="workerName" placeholder="e.g., Sandip More" required />
            </div>
            <div className="form-group">
              <label htmlFor="workerId">Worker ID / Email</label>
              <input type="text" id="workerId" placeholder="e.g., W04 or worker@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="assignedRoute">Assigned Route</label>
              <select id="assignedRoute" required>
                <option value="">-- Select a Route --</option>
                <option value="Kothrud">Kothrud</option>
                <option value="Aundh">Aundh</option>
                <option value="FC Road">FC Road</option>
                <option value="Swargate">Swargate</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary btn-submit">
              Add Worker
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddWorkerModal;


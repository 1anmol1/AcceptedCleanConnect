import React from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import dashboardHeroImage from '/src/assets/resolution.png'; // Import the local hero image
import './Resolutions.css';

const Resolutions = () => {
  const tasks = [
    { id: 1, desc: "Overflowing bin reported at FC Road.", status: 'Pending' },
    { id: 2, desc: "Damaged lid on bin PN012 in Aundh.", status: 'Resolved' },
    { id: 3, desc: "Waste spill near Kothrud bus stop.", status: 'Pending' },
  ];

  return (
    <div className="resolutions-page container fade-in">
      <header 
        className="page-header"
        style={{ backgroundImage: `url(${dashboardHeroImage})` }} // Apply image as inline style
      >
        <h1>Assigned Resolutions</h1>
        <p>View and manage tasks assigned to you by the officer.</p>
      </header>
      <div className="tasks-list">
        {tasks.map(task => (
          <div key={task.id} className="task-card card">
            <div className={`status-icon ${task.status.toLowerCase()}`}>
              {task.status === 'Pending' ? <FaExclamationCircle /> : <FaCheckCircle />}
            </div>
            <div className="task-details">
              <p>{task.desc}</p>
              <span className={`status-text ${task.status.toLowerCase()}`}>{task.status}</span>
            </div>
            {task.status === 'Pending' && (
              <button className="btn btn-primary">Mark as Resolved</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resolutions;
import React from 'react';
import { FaBell } from 'react-icons/fa';
import dashboardHeroImage from '/src/assets/notification.png'; // Import the local hero image
import './Notifications.css';

const Notifications = () => {
  const notifications = [
    { id: 1, type: 'drive', message: 'Cleanliness drive this Saturday at JM Road. Join us!', time: '2 days ago', read: false },
    { id: 2, type: 'schedule', message: 'Waste pickup schedule for Aundh has been updated.', time: '5 days ago', read: true },
    { id: 3, type: 'reward', message: 'You earned 50 points for correct disposal!', time: '1 week ago', read: true },
  ];

  return (
    <div className="notifications-page container fade-in">
      <header 
        className="page-header"
        style={{ backgroundImage: `url(${dashboardHeroImage})` }} // Apply image as inline style
      >
        <h1>Notifications</h1>
        <p>Stay updated with local news and alerts.</p>
      </header>
      <div className="notifications-list">
        {notifications.map(notif => (
          <div key={notif.id} className={`notification-item card ${!notif.read ? 'unread' : ''}`}>
            <FaBell className="notification-icon" />
            <div className="notification-content">
              <p>{notif.message}</p>
              <small>{notif.time}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Notifications;
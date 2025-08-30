import React from 'react';
import { FaBullseye, FaUsers, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page fade-in">
      <header className="about-hero">
        <div className="container">
          <h1>About CleanConnect</h1>
          <p className="subtitle">Leveraging technology to build cleaner, smarter, and more sustainable cities, starting with Pune.</p>
        </div>
      </header>

      <section className="about-content container">
        <div className="mission-section">
          <div className="mission-card">
            <FaBullseye className="mission-icon" />
            <h3>Our Mission</h3>
            <p>To revolutionize waste management by creating an efficient, data-driven, and transparent ecosystem that connects citizens, sanitation workers, and authorities for a common goal: a cleaner environment.</p>
          </div>
          <div className="mission-card">
            <FaLightbulb className="mission-icon" />
            <h3>Our Vision</h3>
            <p>To be the leading smart sanitation platform in India, creating a scalable and sustainable model for waste management that can be adopted by cities nationwide to foster healthier urban living.</p>
          </div>
        </div>

        <div className="team-section">
          <h2>Meet the Team</h2>
          <p>We are a passionate group of innovators, engineers, and environmentalists dedicated to making a tangible impact.</p>
          {/* Placeholder for team members */}
        </div>
      </section>
    </div>
  );
};

export default About;
import React from 'react';
import dashboardHeroImage from '/src/assets/issue.png'; // Import the local hero image
import './ReportIssue.css';

const ReportIssue = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to submit form data to the backend
    alert('Thank you! Your issue has been reported.');
  };

  return (
    // EDITED: The 'container' class is now on the main wrapper div
    <div className="report-issue-page container fade-in"> 
      <header 
        className="page-header"
        style={{ backgroundImage: `url(${dashboardHeroImage})` }}
      >
        <h1>Report an Issue</h1>
        <p>Help us keep the city clean by providing details below.</p>
      </header>

      {/* EDITED: Removed the extra wrapper div */}
      <div className="report-form-card">
        <form onSubmit={handleSubmit} className="report-form">
          <div className="form-group">
            <label htmlFor="binId">Bin ID (if known)</label>
            <input type="text" id="binId" name="binId" placeholder="e.g., ICK-01" />
          </div>
          <div className="form-group">
            <label htmlFor="issueType">Type of Issue</label>
            <select id="issueType" name="issueType" required>
              <option value="">-- Please select an issue --</option>
              <option value="overflow">Bin Overflowing</option>
              <option value="damaged">Bin is Damaged</option>
              <option value="spill">Waste Spilled Nearby</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows="4" placeholder="Provide more details..."></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="photo">Upload a Photo (optional)</label>
            <input type="file" id="photo" name="photo" accept="image/*" />
          </div>
          <button type="submit" className="btn btn-primary btn-submit">Submit Report</button>
        </form>
      </div>
    </div>
  );
};

export default ReportIssue;
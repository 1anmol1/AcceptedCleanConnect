import React from 'react';
import dashboardHeroImage from '/src/assets/complain.png'; // Import the local hero image
import './NewComplaint.css'; 

const NewComplaint = () => {
  return (
    // EDITED: The 'container' class is now on the main wrapper div
    <div className="new-complaint-page container fade-in">
      <header 
        className="page-header"
        style={{ backgroundImage: `url(${dashboardHeroImage})` }}
      >
        <h1>Report a New Issue</h1>
        <p>Found a problem on your route? Report it here.</p>
      </header>

      {/* EDITED: Simplified the structure */}
      <div className="form-card-container">
        <form className="styled-form">
          <div className="form-group">
            <label htmlFor="binId">Bin ID (if applicable)</label>
            <input type="text" id="binId" placeholder="e.g., ICK-01" />
          </div>
          <div className="form-group">
            <label htmlFor="issueType">Type of Issue</label>
            <select id="issueType" required>
              <option value="">-- Select an issue --</option>
              <option value="roadblock">Roadblock</option>
              <option value="damaged_bin">Damaged Bin</option>
              <option value="public_spill">Public Waste Spill</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="photo">Upload Photo</label>
            <input type="file" id="photo" accept="image/*" />
          </div>
          <button type="submit" className="btn btn-primary btn-submit">Submit Report</button>
        </form>
      </div>
    </div>
  );
};

export default NewComplaint;
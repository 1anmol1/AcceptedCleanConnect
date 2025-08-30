import React from 'react';
import '../../Shared/SharedForm.css'; // Import the new shared CSS

const UpdateBin = () => {
  return (
    <div className="form-page-container container">
      <div className="form-card-container">
        <h2>Add / Update Bin</h2>
        <p>Manage the smart bin network from here.</p>
        <form className="styled-form">
          <div className="form-group">
            <label htmlFor="binId">Bin ID</label>
            <input type="text" id="binId" placeholder="e.g., PN004" required />
          </div>
          <div className="form-group">
            <label htmlFor="coordinates">GPS Coordinates</label>
            <input type="text" id="coordinates" placeholder="e.g., 18.5204, 73.8567" required />
          </div>
          <div className="form-group">
            <label htmlFor="status">Initial Status</label>
            <select id="status" required>
              <option value="Empty">Empty</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-submit">Save Bin Details</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBin;
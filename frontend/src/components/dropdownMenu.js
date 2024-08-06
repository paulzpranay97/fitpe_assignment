import React, { useState } from 'react';
import '../style.css'; 

const DropdownMenu = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    // Perform logout logic here
    setShowModal(false); // Close the modal after logout
  };

  return (
    <div className="dropdown-menu">
      <a href="/account" className="dropdown-item"><img className="icon" src="images/account.svg" alt="Account" /> Account</a>
      <a href="/programs" className="dropdown-item"><img className="icon" src="images/program.svg" alt="Programs" /> Programs</a>
      <a href="/orders" className="dropdown-item"><img className="icon" src="images/order.svg" alt="Orders" /> Orders</a>
      <a href="/users" className="dropdown-item"><img className="icon" src="images/user.svg" alt="Users" /> Users</a>
      <a href="/developer" className="dropdown-item"><img className="icon" src="images/devcorner.svg" alt="Devcorner" /> Developer Corner</a>
      <a href="/events" className="dropdown-item"><img className="icon" src="images/giveawayevents.svg" alt="Giveawayevents" /> Giveaway Events</a>
      <a href="/settings" className="dropdown-item"><img className="icon" src="images/settings.svg" alt="Settings" /> Settings</a>
      <a href="/logout" className="dropdown-item logout" onClick={() => setShowModal(true)}>
        Logout<img className="logout-icon" src="images/logout.svg" alt=">" />
      </a>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirm Logout</h2>
            <p>Are you sure you want to logout?</p>
            <div className="modal-actions">
              <button className="btn btn-primary" onClick={handleLogout}>Yes, Logout</button>
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

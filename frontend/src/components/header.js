import React, { useState } from 'react';
import DropdownMenu from './dropdownMenu';
import 'remixicon/fonts/remixicon.css';
import '../style.css'; // Adjust path as necessary

function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="header">
      <div className="header-left">
        {/* <img src="images/logo.svg" alt="Logo" className="logo" /> */}
        <div className="search-container">
          <i class="ri-search-line"></i>
          <input className="form-control me-2 search-box" type="search" placeholder="Search here" aria-label="Search" />
          <div className="search-icon"></div>
        </div>
      </div>
      <div className="header-right">
        <div className="notifications">
        <i class="ri-notification-3-line"></i>
        </div>
        <div className="notifications">
            <i class="ri-settings-2-line"></i>
        </div>
        <div className="notifications">
          <i class="ri-mail-line"></i>
        </div>
        <div className="profile" onClick={toggleDropdown}>
          <img src="images/profile.svg" alt="Profile" className="profile-image" />
          {isDropdownVisible && <DropdownMenu />}
        </div>
      </div>
    </div>
  );
}

export default Header;

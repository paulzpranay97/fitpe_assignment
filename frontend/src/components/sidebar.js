import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'; // Ensure you have a CSS file for styling

function closeSidebar() {
  var sidebar = document.querySelector('.im-sidebar');
  var headerLeft = document.querySelector('.logo');
  
  // Toggle the collapsed class on both the sidebar and header-left elements
  sidebar.classList.toggle('collapsed');
  headerLeft.classList.toggle('collapsed');
}


const Sidebar = () => {
  return (
    <aside className="im-sidebar">
      
      <div className="close-button" onClick={closeSidebar}></div>
      <div className="logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 124 124" fill="none">
      <rect width="124" height="124" rx="24" fill="#FFFF"/>
      <path d="M19.375 36.7818V100.625C19.375 102.834 21.1659 104.625 23.375 104.625H87.2181C90.7818 104.625 92.5664 100.316 90.0466 97.7966L26.2034 33.9534C23.6836 31.4336 19.375 33.2182 19.375 36.7818Z" fill="#1f2029"/>
      <circle cx="63.2109" cy="37.5391" r="18.1641" fill="#1f2029"/>
      <rect opacity="0.4" x="81.1328" y="80.7198" width="17.5687" height="17.3876" rx="4" transform="rotate(-45 81.1328 80.7198)" fill="#FDBA74"/>
      </svg>
      </div>
      <ul id="sidebar">
        <li><Link to="/dashboard" id="add-items-link"><i class="ri-dashboard-fill"></i> Dashboard</Link></li>
        <li><a href="members" id="dashboard-link"><i class="ri-group-line"></i> Members</a></li>
        <li><a href="referrals" id="add-customer-link"><i class="ri-share-line"></i> Referrals</a></li>
        <li><a href="marketing" id="add-items-link"><i class="ri-survey-line"></i> Marketing</a></li>
        <li><a href="statistics" id="add-items-link"><i class="ri-wallet-2-line"></i> Wallet</a></li>
        <li><a href="logs" id="add-items-link"><i class="ri-shopping-cart-2-line"></i> Cart</a></li>
        {/* Add more links as needed */}
      </ul>

      <a href="help-center" className="help-center">
      <i class="ri-logout-circle-r-line"></i><span>Log Out</span>
      </a>
    </aside>
  );
};

export default Sidebar;

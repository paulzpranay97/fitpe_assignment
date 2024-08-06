

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar'; 
import Header from './components/header'; 
import './style.css'; 
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
    <div className="im-main-content">
      <Header />
      <Sidebar />
      <div className="content">
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Add more routes as needed */}
          </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;

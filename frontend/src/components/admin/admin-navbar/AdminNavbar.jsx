import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css';

const AdminNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/addpost">AddPost</Link></li>
          <li><Link to="/managepost">ManagePost</Link></li>
        </ul>
        
      </div>

      <div className="auth-buttons">
          <Link to="/"><button className='Btn'>Logout</button></Link>
        </div>
    </nav>
  );
};

export default AdminNavbar;

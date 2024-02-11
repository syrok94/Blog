// Navbar.js
import React , {useState} from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import '../navbar/Navbar.css';


const Navbar = () => {
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contribute">Contribute</Link></li>
        </ul>
      </div>

      <div className="auth-buttons">
        {/* <button className='Btn' >Admin</button> */}
        <Link to="/adminlogin"><button>
          Admin
          <div class="arrow-wrapper">
            <div class="arrow"></div>

          </div>
        </button></Link>

      </div>


    </nav>
  );
};

export default Navbar;

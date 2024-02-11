// Footer.js

import React from 'react';
import '../footer/Footer.css';

const Footer = () => {

  var d = new Date();
  const year = d.getFullYear();

  return (
    <div>
 
      <div className="footer-content">
        <p> Made with ❤️️ in India</p>
        <p> copyright &copy; {year} TabooTales. All rights reserved.</p>
      </div>
     
    </div>
  );
};

export default Footer;

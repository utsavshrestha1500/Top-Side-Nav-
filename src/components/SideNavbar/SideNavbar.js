import React from 'react';
import '../SideNavbar/SideNavbar.css';
import { FaHome, FaUser, FaCog, FaSearch, FaLock, FaFacebook, FaTwitter, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function SideNavbar() {
  return (
    <div className="side-navbar">
      <FaHome className="icon" />
      <FaUser className="icon" />
      <FaCog className="icon" />
      <FaLock className="icon" />
      <FaFacebook className="icon" />
      <FaTwitter className="icon" />
      <FaGithub className="icon" />
      
      <FaSearch className="icon" />
      
      
    </div>
  );
}

export default SideNavbar;

import React, { useState } from "react";
import "../style/Navigasi.css";
import Logo from '../assets/logoglory.png';
import { Link as RouterLink } from 'react-router-dom';

function Navigasi() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  

  return (
    <div className="navbar-container">
      <nav>
        <div className="logo">
            <img src={Logo} alt="" />
            <p>Glory Laundry</p>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "slide" : ""}`}>
          <li><RouterLink to="/glorylaundry20" onClick={handleLinkClick}>Beranda</RouterLink></li>
          <li><RouterLink to="/glorylaundry20/tentang" onClick={handleLinkClick}>Tentang Kami</RouterLink></li>
          <li><RouterLink to="/glorylaundry20/layanan" onClick={handleLinkClick}>Layanan</RouterLink></li>
          <li>Blog</li>
          <li><RouterLink to="/glorylaundry20/kontak" onClick={handleLinkClick}>Kontak</RouterLink></li>
        </ul>
        <div className="menu-toggle">
          <input type="checkbox" checked={isMenuOpen} onChange={handleMenuToggle} />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
}

export default Navigasi;

import React, { useState } from "react";
import "./Styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <h2 className="logo">
        <span>NK</span>Portfolio
      </h2>

      {/* Hamburger Icon for Mobile */}
      <div className={`menu-icon ${menuOpen ? "active" : ""}`} onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <nav className={`navigation ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={handleCloseMenu}>Home</a>
        <a href="#about" onClick={handleCloseMenu}>About</a>
        <a href="#award" onClick={handleCloseMenu}>Awards & Certifications</a>
        <a href="#skill" onClick={handleCloseMenu}>Tools & Skills</a>
        <a href="#project" onClick={handleCloseMenu}>Projects</a>
        <a href="/resume.pdf" download className="btn-resume" onClick={handleCloseMenu}>Download Resume</a>
        <a href="#contact" className="btn-talk" onClick={handleCloseMenu}>Let's Talk</a>
      </nav>
    </header>
  );
}

export default Header;

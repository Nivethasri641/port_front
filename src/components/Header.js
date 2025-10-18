import React, { useState } from "react";
import "./Header.css";

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
        <span>N</span>ive
      </h2>

      {/* Hamburger Icon for Mobile */}
      <div className={`menu-icon ${menuOpen ? "active" : ""}`} onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <nav className={`navigation ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={handleCloseMenu}>About</a>
        <a href="#award" onClick={handleCloseMenu}>Awards & Certifications</a>
        <a href="#skill" onClick={handleCloseMenu}>Tools & Skills</a>
        <a href="#contact" onClick={handleCloseMenu}>Contact</a>
        <a href="/resume.pdf" download className="btn-resume" onClick={handleCloseMenu}>Download Resume</a>
        <a href="#contact" className="btn-talk" onClick={handleCloseMenu}>Let's Talk</a>
      </nav>
    </header>
  );
}

export default Header;
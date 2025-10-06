import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <h2 className="logo"><span>N</span>ive</h2>
      <nav className="navigation">
        <a href="#about">About</a>
        <a href="#award">Awards & Certifications</a>
        <a href="#skill">Tools & Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="/resume.pdf" download className="btn-resume">Download Resume</a>
      <a href="#contact" className="btn-talk">Let's Talk</a>
    </header>
  );
}
export default Header;
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">

        <h3 className="footer-brand">NIVETHA SRI</h3>
        <p className="footer-tagline">
          Pre-Final Year CSE Student | UI/UX Designer | Full Stack Developer
        </p><br></br>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <p className="footer-text">
          © 2025 <span>NIVETHA SRI</span>. All rights reserved.
        </p>

        {/* Credits */}
        <p className="footer-design">
          Designed & Developed by <strong>Nivetha Sri</strong>
        </p>

      </div>
    </footer>
  );
};

export default Footer;

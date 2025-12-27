import React from "react";
import "./Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
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

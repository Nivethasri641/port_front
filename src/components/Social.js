import React from "react";
import "./Social.css";
import { FaGithub, FaLinkedin, FaBloggerB, FaBehance } from "react-icons/fa";

function Social() {
  return (
    <div className="social-floating">
      <a
        href="https://github.com/Nivethasri641"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/nivethasri-kannan "
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.behance.net/nivethasrik"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBehance />
      </a>
      <a
        href="http://nivethasrikannan.blogspot.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBloggerB />
      </a>
    </div>
  );
}

export default Social;
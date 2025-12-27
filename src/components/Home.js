import React from "react";
import "./Styles/Home.css";
import profileImg from "../assets/abt.jpg"; 

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">
        {/* Left Content */}
        <div className="home-text">
          <h4>Hi, I'm</h4>
          <h1>
            Nivetha <span>Kannan</span> 👋
          </h1>
          <h3>Full Stack Developer</h3>

          <p>
            Passionate about creating clean, modern, and user‑friendly web
            experiences using React and modern UI design.
          </p>

          <div className="home-buttons">
            <a href="/resume.pdf" className="btn-primary">Download Resume</a>
            <a href="#project" className="btn-outline">View My Work</a>
          </div>
        </div>

        {/* Right Image */}
        <div className="home-image">
          <img src={profileImg} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import "./Styles/About.css";
import profileImg from "../assets/bg.jpg";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={profileImg} alt="Nivethasri K" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h2>About <span>Me</span></h2>
          <div className="about-text-card"> 
          <p>
            Hi, I’m <span className="highlight">Nivetha Sri K</span>, a Computer
            Science and Engineering student passionate about building modern,
            user-friendly applications with a strong design focus.
            I specialize in <span className="highlight">UI/UX Design</span>,
            <span className="highlight"> MERN Stack Development</span>.
            Beyond tech, I’m an <span className="highlight">athlete</span> and
            <span className="highlight"> Silambam player</span>, driven by
            discipline, creativity, and teamwork.
          </p></div>

          {/* FEATURE CARDS */}
          <div className="about-features">
            <div className="feature-card">
              <h4>Full Stack Development (MERN)</h4>
              <p>Building responsive, scalable web applications using React, Node.js, MongoDB & Express</p>
            </div>

            <div className="feature-card">
              <h4>UI / UX Design</h4>
              <p>Creating intuitive and elegant interfaces</p>
            </div>

            <div className="feature-card">
              <h4>Hands-on Project Experience</h4>
              <p>Completed 15+ projects including full-stack apps and AICTE Idea Lab Wood Router projects</p>
            </div>

            <div className="feature-card">
              <h4>Continuous Learning</h4>
              <p>Always exploring modern tools and technologies</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;

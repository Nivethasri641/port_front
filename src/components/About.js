import React from "react";
import "./About.css";
import profileImg from "../assets/abt.jpg"; // update path if needed

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-card about-layout">

        {/* ===== Left : Profile Image ===== */}
        <div className="about-image">
          <img src={profileImg} alt="Nivethasri K" />
        </div>

        {/* ===== Right : About Content ===== */}
        <div className="about-content">
          <h2>About Me</h2>

          <p>
            Hi, I’m <span className="highlight">Nivethasri K</span>, a
            Computer Science and Engineering student at Vivekanandha College of
            Engineering for Women. I’m passionate about designing and developing
            impactful digital solutions with hands-on experience in
            <span className="highlight"> UI/UX Design</span>,
            <span className="highlight"> MERN Stack Development</span>, and
            <span className="highlight"> Aerial Technology (Drones)</span>.
          </p>

          <p>
            Currently, I’m working on
            <span className="highlight"> MERN stack projects</span> that enhance
            collaboration and productivity. My journey has shaped me into a
            creative problem-solver who enjoys blending design and technology.
          </p>

          <p>
            Beyond tech, I’m an <span className="highlight">athlete</span> and
            <span className="highlight"> Silambam player</span>, driven by
            discipline, teamwork, and creativity.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;

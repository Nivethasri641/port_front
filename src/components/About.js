import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <h2>About Me</h2>
        <p>
          Hi, I’m <span className="highlight">Nivetha Sri K</span>, a Computer Science and Engineering student at Vivekanandha College of Engineering for Women. I have a strong passion for designing and developing impactful digital solutions, with hands-on experience in UI/UX design, full-stack development (MERN), and aerial technology.
        </p>
        <p>
          Currently, I’m working on a <span className="highlight">MERN stack projects</span> to enhance team collaboration and productivity. My journey has shaped me into a creative problem-solver who enjoys combining design and technology to deliver meaningful results.
        </p>
        <p>
          Looking ahead, I aspire to grow as a versatile developer and designer, contributing to projects that empower people and businesses. Outside of tech, I’m an athlete and Silambam player, driven by discipline, teamwork, and creativity.
        </p>
      </div>
    </section>
  );
}

export default About;

import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <h2>About Me</h2>
        <p>
          Hi, I’m <span className="highlight">Nivethasri K</span>, a
          Computer Science and Engineering student at Vivekanandha College of
          Engineering for Women. I’m passionate about designing and developing
          impactful digital solutions, with hands-on experience in
          <span className="highlight"> UI/UX design</span>,
          <span className="highlight"> full-stack development (MERN)</span>, and
          <span className="highlight"> aerial technology (Drones)</span>.
        </p>

        <p>
          Currently, I’m working on <span className="highlight">MERN stack projects</span> that
          enhance team collaboration and productivity. My journey has shaped me
          into a creative problem-solver who enjoys blending design and
          technology to deliver meaningful results.
        </p>

        <p>
          Looking ahead, I aspire to grow as a versatile developer and designer,
          contributing to projects that empower people and businesses. Beyond
          tech, I’m an <span className="highlight">athlete</span> and{" "}
          <span className="highlight">Silambam player</span>, driven by
          discipline, teamwork, and creativity.
        </p>
      </div>
    </section>
  );
}

export default About;
import React from "react";
import "./Styles/Home.css";
import profileImg from "../assets/abt.jpg";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">

        {/* TEXT */}
        <div className="home-text">
          <h4>Hi, I'm</h4>
          <h1>
            Nivetha Sri <span>Kannan</span> 👋
          </h1>
          <h3>Full Stack Developer</h3>

          <p>
            Passionate about creating clean, modern, and user-friendly web
            experiences using React and modern UI design.
          </p>

          <div className="home-buttons">
            <div className="btn-wrap">
              <a href="/resume.pdf" className="btn primary">
                Download Resume
                <span></span>
              </a>
            </div>

            <div className="btn-wrap">
              <a href="#project" className="btn secondary">
                View My Work
                <span></span>
              </a>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="home-image">
          <img src={profileImg} alt="Profile" />
        </div>

      </div>
    </section>
  );
};

export default Home;

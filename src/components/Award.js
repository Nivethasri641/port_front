import React, { useState } from "react";
import Modal from "react-modal";
import "./Styles/Award.css";

import goldAward from "../assets/gold.jpeg";
import zonalImg from "../assets/zone.jpg";
import perform from "../assets/all.jpg";
import mother from "../assets/mother.jpg";
import kongu from "../assets/kongu.jpg";

Modal.setAppElement("#root");

const achievements = [
  {
    title: "Gold Award",
    image: goldAward,
    description: "Gold Award for innovative case study.",
    details: "Special thanks to HOD & project team"
  },
  {
    title: "Zonal Match",
    image: zonalImg,
    description: "Second place in relay match.",
    details: "Team effort & coaching support"
  },
  {
    title: "All‑Rounder",
    image: perform,
    description: "Best All‑Rounder (2023–2025)",
    details: "Academics + Sports excellence"
  },
  {
    title: "Presentation Award",
    image: mother,
    description: "Best Presentation Award",
    details: "Health‑Driven Productivity topic"
  },
  {
    title: "First Prize",
    image: kongu,
    description: "National Level First Prize",
    details: "Strong teamwork & innovation"
  }
];

function Award() {
  const [active, setActive] = useState(null);

  return (
    <section id="award" className="award-section">
      <h2><span>Awards</span> & Recognition</h2>

      <div className="award-grid">
        {achievements.map((item, i) => (
          <div
            key={i}
            className="award-card"
            onClick={() => setActive(item)}
          >
            <div className="award-image-box">
              <img src={item.image} alt={item.title} />

              {/* Touch / Hover Overlay */}
              <div className="award-overlay">
                <p>{item.description}</p>
                <span>Tap to view</span>
              </div>
            </div>

            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <Modal
          isOpen={true}
          onRequestClose={() => setActive(null)}
          className="award-modal"
          overlayClassName="award-overlay-bg"
        >
          <button className="close-btn" onClick={() => setActive(null)}>
            ×
          </button>

          <img src={active.image} alt={active.title} />
          <h3>{active.title}</h3>
          <p>{active.details}</p>
        </Modal>
      )}
    </section>
  );
}

export default Award;

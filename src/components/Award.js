import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import "./Award.css";

// Import images properly
import goldAward from "../assets/gold.jpeg";
import zonalImg from "../assets/zone.jpg";
import perform from "../assets/all.jpg";
import mother from "../assets/mother.jpg";
import kongu from "../assets/kongu.jpg";

const achievements = [
  { title: "Gold Award", image: goldAward, description: "Gold Award for innovative case study.", details: "Special thanks to HOD & team" },
  { title: "Zonal Match", image: zonalImg, description: "Second Place in relay.", details: "Thanks to coach & teammates" },
  { title: "All-Rounder", image: perform, description: "Best All-Rounder 2023–2025.", details: "Academics & sports excellence" },
  { title: "Presentation Award", image: mother, description: "Best Presentation Award.", details: "Presented Health Driven Productivity" },
  { title: "First Prize", image: kongu, description: "First Prize National Level.", details: "Teamwork with partner" },
];

Modal.setAppElement('#root');

function Award() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeAchievement, setActiveAchievement] = useState(null);
  const trackRef = useRef(null);

  const openModal = (achievement) => {
    setActiveAchievement(achievement);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setActiveAchievement(null);
  };

  // Rotate carousel dynamically
  useEffect(() => {
    let angle = 0;
    const total = achievements.length;
    const interval = setInterval(() => {
      angle += 360 / total; // rotates proportionally
      trackRef.current.style.transform = `rotateY(${angle}deg) translateZ(-400px)`; // smaller Z for mobile-friendly view
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="award" className="award-section">
      <h2>Achievements & Awards</h2>
      <div className="carousel">
        <div className="carousel-track" ref={trackRef}>
          {achievements.map((a, i) => (
            <div className="carousel-slide" key={i} onClick={() => openModal(a)}>
              <div className="achievement-card">
                <img src={a.image} alt={a.title} className="achievement-image" />
                <div className="achievement-content">
                  <h3>{a.title}</h3>
                  <p>{a.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeAchievement && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <button className="modal-close" onClick={closeModal}>×</button>
          <img src={activeAchievement.image} alt={activeAchievement.title} className="modal-image"/>
          <h3>{activeAchievement.title}</h3>
          <p>{activeAchievement.details}</p>
        </Modal>
      )}
    </section>
  );
}

export default Award;

import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import "./Award.css";

// Achievement data
const achievements = [
  { title: "Gold Award", image: "../assets/gold.jpeg", description: "Gold Award for innovative case study.", details: "Special thanks to HOD & team" },
  { title: "Zonal Match", image: "../assets/zone.jpg", description: "Second Place in relay.", details: "Thanks to coach & teammates" },
  { title: "All-Rounder", image: "../assets/all.jpg", description: "Best All-Rounder 2023–2025.", details: "Academics & sports excellence" },
  { title: "Presentation Award", image: "../assets/mother.jpg", description: "Best Presentation Award.", details: "Presented Health Driven Productivity" },
  { title: "First Prize", image: "../assets/kongu.jpg", description: "First Prize National Level.", details: "Teamwork with partner" },
];

Modal.setAppElement('#root');

function Award() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeAchievement, setActiveAchievement] = useState(null);
  const trackRef = useRef(null);

  // Open modal
  const openModal = (achievement) => {
    setActiveAchievement(achievement);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setActiveAchievement(null);
  };

  // Auto rotate carousel
  useEffect(() => {
    let angle = 0;
    const total = achievements.length;
    const interval = setInterval(() => {
      angle += 1; // degrees per frame
      trackRef.current.style.transform = `rotateY(${angle}deg) translateZ(-500px)`;
    }, 50); // speed (lower = faster)
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

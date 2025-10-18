import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import "./Award.css";

// Import images
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
  const carouselRef = useRef(null);
  const rotation = useRef(0);

  const openModal = (achievement) => {
    setActiveAchievement(achievement);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setActiveAchievement(null);
  };

  useEffect(() => {
    const total = achievements.length;
    const radius = 400; // distance from center
    let animFrame;

    const rotateCarousel = () => {
      rotation.current += 0.3; // rotation speed
      achievements.forEach((_, i) => {
        const angle = (360 / total) * i + rotation.current;
        const rad = (angle * Math.PI) / 180;
        const slide = carouselRef.current.children[i];
        slide.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
        slide.style.zIndex = Math.round(Math.cos(rad) * 100); // center slide appears on top
      });
      animFrame = requestAnimationFrame(rotateCarousel);
    };

    rotateCarousel();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section id="award" className="award-section">
      <h2>Achievements & Awards</h2>
      <div className="carousel">
        <div className="carousel-track" ref={carouselRef}>
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

import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import "./Award.css";

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

Modal.setAppElement("#root");

function Award() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeAchievement, setActiveAchievement] = useState(null);

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isHovered = useRef(false);

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
    const radius = 400;

    const slides = carouselRef.current.children;

    for (let i = 0; i < total; i++) {
      const angle = (360 / total) * (i - currentIndex);
      const rad = (angle * Math.PI) / 180;

      slides[i].style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
      slides[i].style.opacity = Math.cos(rad) > 0 ? 1 : 0.25;
      slides[i].style.zIndex = Math.round(Math.cos(rad) * 100);
    }
  }, [currentIndex]);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered.current) {
        setCurrentIndex((prev) => (prev + 1) % achievements.length);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="award" className="award-section">
      <h2>Achievements & Awards</h2>

      <div
        className="carousel"
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        <div className="carousel-track" ref={carouselRef}>
          {achievements.map((item, i) => (
            <div className="carousel-slide" key={i} onClick={() => openModal(item)}>
              <div className="achievement-card">
                <img src={item.image} alt={item.title} className="achievement-image" />
                <div className="achievement-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
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
          <button className="modal-close" onClick={closeModal}>
            ×
          </button>

          <img
            src={activeAchievement.image}
            alt={activeAchievement.title}
            className="modal-image"
          />

          <h3>{activeAchievement.title}</h3>
          <p>{activeAchievement.details}</p>
        </Modal>
      )}
    </section>
  );
}

export default Award;

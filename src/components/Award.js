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
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const startX = useRef(0);
  const rotationSpeed = useRef(0.3);

  const openModal = (achievement) => {
    setActiveAchievement(achievement);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setActiveAchievement(null);
  };

  // Drag handlers
  const handlePointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX || e.touches[0].clientX;
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const x = e.clientX || e.touches[0].clientX;
    const delta = x - startX.current;
    rotation.current += delta * 0.3; // drag sensitivity
    startX.current = x;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  // Automatic rotation with hover/drag pause
  useEffect(() => {
    const total = achievements.length;
    const radius = 400;
    let animFrame;

    const rotateCarousel = () => {
      if (!isDragging.current && !isHovered.current) {
        rotation.current += rotationSpeed.current;
      }

      achievements.forEach((_, i) => {
        const angle = (360 / total) * i + rotation.current;
        const rad = (angle * Math.PI) / 180;
        const slide = carouselRef.current.children[i];
        slide.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
        slide.style.zIndex = Math.round(Math.cos(rad) * 100);
      });

      animFrame = requestAnimationFrame(rotateCarousel);
    };

    rotateCarousel();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section id="award" className="award-section">
      <h2>Achievements & Awards</h2>

      <div
        className="carousel"
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
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

import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import "./Award.css";

import goldAward from "../assets/gold.jpeg";
import zonalImg from "../assets/zone.jpg";
import perform from "../assets/all.jpg";
import mother from "../assets/mother.jpg";
import kongu from "../assets/kongu.jpg";

// ---------------- STACK COMPONENT (inline) ---------------- //
function Stack({
  cardsData = [],
  cardDimensions = { width: 200, height: 200 },
  randomRotation = false,
  sensitivity = 180,
  sendToBackOnClick = false,
}) {
  const [cards, setCards] = useState(cardsData);

  const handleCardClick = (index) => {
    if (sendToBackOnClick) {
      const newCards = [...cards];
      const [clickedCard] = newCards.splice(index, 1);
      newCards.push(clickedCard);
      setCards(newCards);
    }
  };

  return (
    <div className="stack-container" style={{ width: cardDimensions.width * 2 }}>
      {cards.map((card, i) => {
        const rotation = randomRotation
          ? Math.random() * sensitivity - sensitivity / 2
          : i * 5 - (cards.length * 5) / 2;

        return (
          <div
            key={card.id}
            className="stack-card"
            onClick={() => handleCardClick(i)}
            style={{
              width: `${cardDimensions.width}px`,
              height: `${cardDimensions.height}px`,
              transform: `rotate(${rotation}deg) translateY(${i * 4}px)`,
              zIndex: cards.length - i,
              backgroundImage: `url(${card.img})`,
            }}
          ></div>
        );
      })}
    </div>
  );
}
// ---------------------------------------------------------- //

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
    const updateCarousel = () => {
      const slides = carouselRef.current.children;
      for (let i = 0; i < total; i++) {
        const angle = (360 / total) * (i - currentIndex);
        const rad = (angle * Math.PI) / 180;
        slides[i].style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
        slides[i].style.opacity = Math.cos(rad) > 0 ? 1 : 0.3;
        slides[i].style.zIndex = Math.round(Math.cos(rad) * 100);
      }
    };
    updateCarousel();
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered.current) {
        setCurrentIndex((prev) => (prev + 1) % achievements.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stackImages = achievements.map((a, i) => ({
    id: i + 1,
    img: a.image,
  }));

  return (
    <section id="award" className="award-section">
      <h2>Achievements & Awards</h2>

      {/* 3D Carousel */}
      <div
        className="carousel"
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

      {/* Stack Animation Below */}
      <div style={{ marginTop: "80px" }}>
        <Stack
          randomRotation={true}
          sensitivity={160}
          sendToBackOnClick={true}
          cardDimensions={{ width: 220, height: 220 }}
          cardsData={stackImages}
        />
      </div>

      {activeAchievement && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <button className="modal-close" onClick={closeModal}>×</button>
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

import React, { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Award.css";

// Import images
import goldAwardImg from "../assets/gold.jpeg";
import zonalImg from "../assets/zone.jpg";
import allRounderImg from "../assets/all.jpg";
import presentationImg from "../assets/mother.jpg";
import firstPrizeImg from "../assets/kongu.jpg";

// Achievement data
const achievements = [
  {
    title: "Gold Award – QCFI 2024",
    image: goldAwardImg,
    description: "Our team won the Gold Award at QCFI 2024 for an innovative case study.",
    details: "Special thanks to HOD and my team members Rama Jeevitha, Priyadharshini R, Krishna Veni, Anusha Reddy."
  },
  {
    title: "Anna University Zonal Match – Relay",
    image: zonalImg,
    description: "Secured Second Place in the relay at Anna University Zonal Match.",
    details: "Thanks to coach Gopi Sir and teammates for their support."
  },
  {
    title: "Outstanding Performer (All-Rounder) 2023–2025",
    image: allRounderImg,
    description: "Recognized as the Best All-Rounder for academics and sports.",
    details: "Awarded for excellence in academics and sports over the 2023-2025 period."
  },
  {
    title: "Best Presentation Award – PAPERIX 2024",
    image: presentationImg,
    description: "Awarded Best Presentation for a research paper at PAPERIX 2024.",
    details: "Presented 'Health Driven Productivity' with my partner Rama Jeevitha."
  },
  {
    title: "First Prize – CSI-KEC National Technical Symposium",
    image: firstPrizeImg,
    description: "Our team won First Prize at CSI-KEC National Technical Symposium.",
    details: "Outperformed 61 teams; teamwork with Rama Jeevitha was key."
  },
];

Modal.setAppElement('#root'); // Required for accessibility

function Award() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeAchievement, setActiveAchievement] = useState(null);

  const openModal = (achievement) => {
    setActiveAchievement(achievement);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveAchievement(null);
  };

  return (
    <section id="award" className="award-section">
      <h2>Achievements & Awards</h2>

      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {achievements.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="achievement-card" onClick={() => openModal(item)}>
              <img src={item.image} alt={item.title} className="achievement-image" />
              <div className="achievement-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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

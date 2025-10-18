import React, { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
        effect="flip"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}          // Single slide visible for better flip effect
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        style={{ paddingBottom: "50px" }}
      >
        {achievements.map((achieve, index) => (
          <SwiperSlide key={index}>
            <div className="achievement-card" onClick={() => openModal(achieve)}>
              <img src={achieve.image} alt={achieve.title} className="achievement-image" />
              <div className="achievement-content">
                <h3>{achieve.title}</h3>
                <p>{achieve.description}</p>
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

import React, { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Award.css";

// Achievement data
const achievements = [
  {
    title: "Gold Award – QCFI 2024",
    image: "../assets/gold.jpeg",
    description: "Gold Award for innovative case study.",
    details: "Special thanks to my HOD and team members."
  },
  {
    title: "Anna University Zonal Match – Relay",
    image: "../assets/zone.jpg",
    description: "Second Place in relay at Zonal Match.",
    details: "Thanks to coach and teammates."
  },
  {
    title: "Outstanding Performer (All-Rounder)",
    image: "../assets/all.jpg",
    description: "Best All-Rounder 2023–2025.",
    details: "Awarded for excellence in academics & sports."
  },
  {
    title: "Best Presentation – PAPERIX 2024",
    image: "../assets/mother.jpg",
    description: "Best Presentation Award.",
    details: "Presented 'Health Driven Productivity'."
  },
  {
    title: "First Prize – CSI-KEC National Technical Symposium",
    image: "../assets/kongu.jpg",
    description: "First Prize at National Level.",
    details: "Teamwork with partner was key."
  },
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
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{ clickable: true }}
        navigation={true}
        spaceBetween={30}
      >
        {achievements.map((achieve, index) => (
          <SwiperSlide key={index} style={{ width: "300px" }}>
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

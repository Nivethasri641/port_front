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
  { title: "Gold Award", image: "gold.jpeg", description: "Gold Award description", details: "Detailed info" },
  { title: "Zonal Match", image: "zone.jpg", description: "Second Place", details: "Details" },
  { title: "All-Rounder", image: "all.jpg", description: "Best All-Rounder", details: "Details" },
  { title: "Presentation Award", image: "mother.jpg", description: "Best Presentation", details: "Details" },
  { title: "First Prize", image: "kongu.jpg", description: "First Prize", details: "Details" },
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
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
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

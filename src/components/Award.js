import React from "react";
import "./Award.css";

// Import award images
import goldAwardImg from "../assets/gold.jpeg";
import zonalImg from "../assets/zone.jpg";
import allRounderImg from "../assets/all.jpg";
import presentationImg from "../assets/mother.jpg";
import firstPrizeImg from "../assets/kongu.jpg";

// Achievement data (Concise)
const achievements = [
  {
    title: "Gold Award – QCFI 2024",
    image: goldAwardImg,
    description: "Our team won the Gold Award at QCFI 2024 for an innovative case study.",
    badge: "🥇 Gold Award",
  },
  {
    title: "Anna University Zonal Match – Relay",
    image: zonalImg,
    description: "Secured Second Place in the relay at Anna University Zonal Match.",
    badge: "🥈 Second Place",
  },
  {
    title: "Outstanding Performer (All-Rounder) 2023–2025",
    image: allRounderImg,
    description: "Recognized as the Best All-Rounder for academics and sports.",
    badge: "🏅 Best All-Rounder",
  },
  {
    title: "Best Presentation Award – PAPERIX 2024",
    image: presentationImg,
    description: "Awarded Best Presentation for a research paper at PAPERIX 2024.",
    badge: "🏆 Best Presentation",
  },
  {
    title: "First Prize – CSI-KEC National Technical Symposium",
    image: firstPrizeImg,
    description: "Our team won First Prize at CSI-KEC National Technical Symposium.",
    badge: "🥇 First Prize",
  },
];

function Award() {
  return (
    <section id="award" className="award-section">
      <h2>Achievements & Awards</h2>
      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card">
            <img
              src={item.image}
              alt={item.title}
              className="achievement-image"
            />
            <div className="achievement-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="achievement-badge">{item.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Award;

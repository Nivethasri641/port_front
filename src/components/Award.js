import React from "react";
import "./Award.css";

// Import award images
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
    description: `Proud to share that our team, Visionary Voices, won the GOLD AWARD for our case study "Poor Utilization of Library" at Sathyabama Institute of Science & Technology, Chennai.  
Special thanks to our HOD, Poongodi Chinnasamy, and my dedicated team: Rama Jeevitha, Priyadharshini R, Krishna Veni, and Anusha Reddy.`,
    badge: "🥇 Gold Award",
  },
  {
    title: "Anna University Zonal Match – Relay",
    image: zonalImg,
    description: `Thrilled to share that our relay team secured SECOND PLACE at the Anna University Zonal Match!  
Heartfelt thanks to our coach, Gopi Sir, and my teammates for their unwavering support.`,
    badge: "🥈 Second Place",
  },
  {
    title: "Outstanding Performer (All-Rounder) 2023–2025",
    image: allRounderImg,
    description: `Honored to receive the Best Performer (All-Rounder) award for 2023–2025, recognizing achievements in both academics and sports.`,
    badge: "🏅 Best All-Rounder",
  },
  {
    title: "Best Presentation Award – PAPERIX 2024",
    image: presentationImg,
    description: `Received the Best Presentation Award for my paper "Health Driven Productivity" at PAPERIX 2024, St. Mother Theresa Engineering College.  
Thanks to my mentor and partner, Rama Jeevitha, for the incredible support.`,
    badge: "🏆 Best Presentation",
  },
  {
    title: "First Prize – CSI-KEC National Technical Symposium",
    image: firstPrizeImg,
    description: `Our team clinched FIRST PLACE at the national-level technical symposium hosted by CSI-KEC, outperforming 61 teams.  
Special appreciation to my partner, Rama Jeevitha, for her dedication and teamwork.`,
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

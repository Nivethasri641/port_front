import React from "react";
import "./Award.css";

// Import images
import goldAward from "../assets/gold.jpeg"; // Gold Award image
import zonalImg from "../assets/zone.jpg";
import perform from "../assets/all.jpg";
import mother from "../assets/mother.jpg";
import kongu from "../assets/kongu.jpg";

const achievements = [
  {
    title: "Gold Award - QCFI 2024",
    image: goldAward,
    description: `Thrilled to share as a proud member of the Quality Circle Forum of our department! 
Our team, Visionary Voices, won the GOLD AWARD for our case study "Poor Utilization of Library" at Sathyabama Institute of Science & Technology, Chennai. 
Special thanks to our HOD Mam, Poongodi Chinnasamy, and my amazing team: Rama Jeevitha, Priyadharshini R, Krishna Veni, Anusha Reddy.`,
    award: "🥇 Gold Award"
  },
  {
    title: "Anna University Zonal Match - Relay",
    image: zonalImg,
    description: `Excited to share that our team secured Second Place in the relay at the Anna University Zonal Match! 
Thanks to our coach Gopi Sir and my colleagues for their unwavering support.`,
    award: "🥈 Second Place"
  },
  {
    title: "Outstanding Performer (All-Rounder) 2023-2025",
    image: perform,
    description: `Thrilled to share that I’ve been awarded the Best Performer (All Rounder) for the 2023-2025 academic year! in both Academic and Sports.`,
    award: "🏅 Best All-Rounder"
  },
  {
    title: "Best Presentation Award - PAPERIX 2024",
    image: mother,
    description: `I received the Best Presentation Award for my paper titled "Health Driven Productivity" at PAPERIX-2024, St. Mother Theresa Engineering College. 
Thanks to mentors and my partner Rama Jeevitha.`,
    award: "🏆 Best Presentation"
  },
  {
    title: "First Prize - CSI-KEC National Technical Symposium",
    image: kongu,
    description: `Our team clinched the top spot at the national-level technical symposium hosted by CSI-KEC, outperforming 61 teams. 
Special thanks to my partner Rama Jeevitha for her tireless efforts.`,
    award: "🥇 First Prize"
  },
];

function Award() {
  return (
    <section id="award" className="award-section">
      <h2>Achievements & Awards</h2>
      <div className="achievement-grid">
        {achievements.map((achieve, index) => (
          <div key={index} className="achievement-card">
            <img src={achieve.image} alt={achieve.title} className="achievement-image" />
            <div className="achievement-content">
              <h3>{achieve.title}</h3>
              <p>{achieve.description}</p>
              <span className="achievement-badge">{achieve.award}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Award;

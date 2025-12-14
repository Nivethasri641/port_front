import React from "react";
import "./Skill.css";
import figmaLogo from "../assets/figma.png";
import adobeLogo from "../assets/adobe.png";

const technicalSkills = [
  { name: "Figma", logo: figmaLogo },
  { name: "Illustrator", logo: adobeLogo },
  { name: "Photoshop", logo: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" },
  { name: "VS Code", logo: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
  { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" }
];

const softSkills = [
  { name: "Teamwork", logo: "https://cdn-icons-png.flaticon.com/512/1077/1077046.png" },
  { name: "Problem Solving", logo: "https://cdn-icons-png.flaticon.com/512/2910/2910765.png" },
  { name: "Time Management", logo: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png" },
  { name: "Communication", logo: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png" }
];

function Skill() {
  return (
    <section id="skill" className="skill-section">
      <h2>Technical Skills</h2>

      <div className="skill-grid">
        {technicalSkills.map((skill, i) => (
          <div className="skill-item" key={i}>
            <img src={skill.logo} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      <h2 className="sub-title">Soft Skills</h2>

      <div className="skill-grid">
        {softSkills.map((skill, i) => (
          <div className="skill-item" key={i}>
            <img src={skill.logo} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;

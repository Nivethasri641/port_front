import React from "react";
import "./Skill.css";
import figmaLogo from "../assets/figma.png";
import adobeLogo from "../assets/adobe.png";

const technicalSkills = [
  { name: "Figma", logo: figmaLogo, description: "UI/UX design & prototyping" },
  { name: "Adobe Illustrator", logo: adobeLogo, description: "Vector graphics & illustrations" },
  { name: "Adobe Photoshop", logo: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg", description: "Image editing & UI graphics" },
  { name: "VS Code", logo: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg", description: "Code editor & project development" },
  { name: "React.js", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg", description: "Frontend framework for dynamic web apps" },
  { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", description: "Backend JavaScript runtime" },
  { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", description: "NoSQL database for storing data" },
];

const softSkills = [
  { name: "Teamwork", logo: "https://cdn-icons-png.flaticon.com/512/1077/1077046.png", description: "Collaborating effectively with team members" },
  { name: "Problem Solving", logo: "https://cdn-icons-png.flaticon.com/512/2910/2910765.png", description: "Finding creative solutions to challenges" },
  { name: "Time Management", logo: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png", description: "Efficiently managing tasks and deadlines" },
  { name: "Communication", logo: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png", description: "Clear and effective verbal & written communication" },
];

function Skill() {
  return (
    <section id="skill" className="skill-section">
      <h2>Technical Skills</h2>
      <div className="skill-cards">
        {technicalSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.logo} alt={skill.name} />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "60px" }}>Soft Skills</h2>
      <div className="skill-cards">
        {softSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.logo} alt={skill.name} />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;

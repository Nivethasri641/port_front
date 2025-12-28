import React from "react";
import "./Styles/Skill.css";

const technicalSkills = [
  {
    name: "Figma",
    desc: "UI design, wireframes, prototyping",
    logo: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg"
  },
  {
    name: "Illustrator",
    desc: "Vector design & branding",
    logo: "https://cdn.worldvectorlogo.com/logos/adobe-illustrator.svg"
  },
  {
    name: "Photoshop",
    desc: "Image editing & layouts",
    logo: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg"
  },
  {
    name: "VS Code",
    desc: "Development environment",
    logo: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
  },
  {
    name: "React",
    desc: "Component-based UI",
    logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg"
  },
  {
    name: "Node.js",
    desc: "Backend & APIs (basic)",
    logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
  },
  {
    name: "MongoDB",
    desc: "Database fundamentals",
    logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
  }
];

const softSkills = [
  {
    name: "Teamwork",
    desc: "Collaborative mindset",
    logo: "https://cdn-icons-png.flaticon.com/512/1077/1077046.png"
  },
  {
    name: "Problem Solving",
    desc: "Logical & creative thinking",
    logo: "https://cdn-icons-png.flaticon.com/512/2910/2910765.png"
  },
  {
    name: "Time Management",
    desc: "Organized & efficient",
    logo: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
  },
  {
    name: "Communication",
    desc: "Clear & confident",
    logo: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
  }
];

function Skill() {
  return (
    <section id="skill" className="skills-section">
      <h2 className="skills-title">
        Tools & <span>Skills</span>
      </h2>
      <p className="skills-subtitle">
        Technologies and abilities I work with
      </p>

      <div className="skills-wrapper">
        {/* Technical */}
        <div className="skills-card">
          <h3>Tools & TechnicalSkills</h3>
          <div className="skills-grid">
            {technicalSkills.map((skill, i) => (
              <div className="skill-item" key={i}>
                <img src={skill.logo} alt={skill.name} />
                <div>
                  <h4>{skill.name}</h4>
                  <p>{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft */}
        <div className="skills-card">
          <h3>Soft Skills</h3>
          <div className="skills-grid">
            {softSkills.map((skill, i) => (
              <div className="skill-item" key={i}>
                <img src={skill.logo} alt={skill.name} />
                <div>
                  <h4>{skill.name}</h4>
                  <p>{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;

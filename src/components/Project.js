import React from "react";
import { motion } from "framer-motion";
import "./Styles/Project.css";

// Figma Images
import foodimg from "../assets/food.png";
import health from "../assets/health.png";
import toy from "../assets/toy.png";

// Adobe Images
import portfolioImg from "../assets/portfolio.png";
import poster2Img from "../assets/poster2.png";
import digitalImg from "../assets/digital.png";
import infoImg from "../assets/info.png";
import d3Img from "../assets/3d.png";
import brandbookImg from "../assets/brandbook.png";
import anim from "../assets/ani.png";

// Fullstack Images
import portimg from "../assets/port.png";
import crud from "../assets/crud.png";
import expense from "../assets/expense.png";

// PDFs
import portfolioPDF from "../assets/portfolio.pdf";
import poster2PDF from "../assets/poster2.pdf";
import digitalPDF from "../assets/digital illustration.pdf";
import infoPDF from "../assets/info.pdf";
import d3PDF from "../assets/3d.pdf";
import brandbookPDF from "../assets/brand.pdf";


// ---------------- Fullstack (MERN) Projects ----------------
const fullstackProjects = [
  {
    title: "CRUD Application",
    description: "Fullstack CRUD application . I developed this during my GUVI Fullstack course.",
    tech: ["React", "Node.js", "MongoDB Atlas", "Express", "HTML", "CSS", "JavaScript", "Vercel", "Render", "Replit"],
    link: "https://crud-five-zeta.vercel.app/",
    image: crud,
  },
  {
    title: "Personal Portfolio",
    description: "Fullstack personal portfolio using MERN Stack, Vercel, Render, MongoDB Atlas.",
    tech: ["React", "Node.js", "MongoDB Atlas", "Express", "HTML", "CSS", "JavaScript", "Vercel", "Render", "Replit"],
    link: "https://port-front-kappa.vercel.app/",
    image: portimg,
  },
  {
    title: "Expense Tracker",
    description: "Fullstack expense tracker application using MERN stack. Track your expenses with your account.",
    tech: ["React", "Node.js", "MongoDB Atlas", "Express", "HTML", "CSS", "JavaScript", "Vercel", "Render", "Replit"],
    link: "https://expensetracker-nine-ruby.vercel.app/",
    image: expense,
  },
];

// ---------------- Figma Projects ----------------
const figmaProjects = [
  {
    title: "Food Micro‑Interaction Animation",
    description:
      "Designed a food micro‑interaction in Figma using Smart Animate.The animation simulates a food item lifting from the plate and returning smoothly.",
    tech: ["Frame setup", "Food edits", "Shadow logic", "Final animation"],
    link: "https://www.figma.com/proto/qbxzTqCKyC6RFGKs8SoNby/Untitled?node-id=0-1&t=GsgU6jixWxa0Kjw0-1",
    image: anim,
  },
  {
    title: "Food Web App Design",
    description:
      "Figma design prototype for a food web application with user-friendly interface and seamless navigation.",
    tech: ["Figma", "Components", "Prototyping", "Reactive Cards"],
    link: "https://www.figma.com/proto/zhWbajoqAYixrzukWS4C2l/Food-Web-App-design?page-id=0%3A1&node-id=85-198",
    image: foodimg,
  },
  {
    title: "Health Healer App",
    description:
      "Figma design prototype for a health healing app with a smooth UI and clean navigation flow.",
    tech: ["Figma", "Components", "Prototyping"],
    link: "https://www.figma.com/proto/JYOrcsGU3aWZms2dhVhHX8",
    image: health,
  },
  {
    title: "Toy Shop Design",
    description:
      "Figma design prototype for an online toy shop with engaging visuals and smooth transitions.",
    tech: ["Figma", "Components", "Prototyping", "Scrolling Animation"],
    link: "https://www.figma.com/proto/jZxuVZ9g91UeEnkep1qWcB",
    image: toy,
  },
];


// ---------------- Adobe Projects ----------------
const adobeProjects = [
  { title: "Portfolio Design", image: portfolioImg, pdf: portfolioPDF, description: "Portfolio layout created with Adobe InDesign." },
  { title: "Poster ", image: poster2Img, pdf: poster2PDF, description: "Second poster project using Illustrator." },
  { title: "Digital Illustration", image: digitalImg, pdf: digitalPDF, description: "Digital illustration made with Photoshop." },
  { title: "Info Design", image: infoImg, pdf: infoPDF, description: "Infographic design created in Illustrator." },
  { title: "3D Design", image: d3Img, pdf: d3PDF, description: "3D rendering project made using Adobe Dimension." },
  { title: "Brandbook", image: brandbookImg, pdf: brandbookPDF, description: "Brandbook created with Illustrator & InDesign." },
];

function Project() {
  return (
    <section id="project" className="project-section">

      {/* ---------------- FULLSTACK SECTION ---------------- */}
      <h2 className="project-title">Projects</h2>
      <h3 className="subtittle">Fullstack Projects (MERN Stack)</h3>

      <div className="project-container">
        {fullstackProjects.map((proj, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={proj.image} alt={proj.title} className="project-image fullstack-img" />
            <h3 className="project-name">{proj.title}</h3>
            <p className="project-description">{proj.description}</p>

            <div className="tech-list">
              {proj.tech.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
              ))}
            </div>

            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-btn">
              View Live
            </a>
          </motion.div>
        ))}
      </div>

      {/* ---------------- FIGMA SECTION ---------------- */}
      <h3 className="subtittle">Figma Projects</h3>

      <div className="project-container">
        {figmaProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-name">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="tech-list">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
              ))}
            </div>

            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
              View Prototype
            </a>
          </motion.div>
        ))}
      </div>


      {/* ---------------- ADOBE SECTION ---------------- */}
      <h3 className="subtittle">Adobe Illustrator / Creative Projects</h3>

      <div className="project-container">
        {adobeProjects.map((item, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.image} alt={item.title} className="project-image" />
            <h3 className="project-name">{item.title}</h3>
            <p className="project-description">{item.description}</p>

            <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="project-btn">
              View PDF
            </a>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Project;

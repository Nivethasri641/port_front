import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Award from "./components/Award";
import Skill from "./components/Skill";
import Project from "./components/Project";   
import Contact from "./components/Contact";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Award />
      <Skill />
      <Project />  
      <Contact />
      <Social />
      <Footer />
    </>
  );
}

export default App;

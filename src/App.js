import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Award from "./components/Award";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Social from "./components/Social";

function App() {
  return (
    <>
      <Header />
      <About />
      <Award />
      <Skill />
      <Contact />
      <Social />
    </>
  );
}

export default App;

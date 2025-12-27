import React from "react";
import "./App.css";
import { useState,useEffect } from "react";
import Loader from "./components/Loder";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Award from "./components/Award";
import Skill from "./components/Skill";
import Project from "./components/Project";   
import Contact from "./components/Contact";
import Social from "./components/Social";
import Footer from "./components/Footer";
import ScrollProgress from "./components/scroll";
import ThemeToggle from "./components/ThemeToggle";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ThemeToggle />
      <ScrollProgress />
      <Header />
      <Home />
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

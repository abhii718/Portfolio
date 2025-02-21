import About from "./components/About";
import Address from "./components/Address";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skill from "./components/Skill.jsx"; 
import React from "react";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Education />
      <Skill />
      <Projects />
      <Contact />
      <Address />
    </div>
  );
};

export default App;

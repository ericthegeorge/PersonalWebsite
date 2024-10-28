// import Button from "./components/About";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import PersonalProjects from "./components/PersonalProjects";

import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <NavBar />
      <div>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="personal-projects">
          <PersonalProjects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;

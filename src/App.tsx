// import Button from "./components/About";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import PersonalProjects from "./components/PersonalProjects";

import "./App.css";
import backgroundGif from "./components/images/background.gif";

function App() {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundGif})`,
    // backgroundSize: "cover",
    backgroundRepeat: "revert-layer",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    position: "relative",
    overflow: "hidden",
  };
  return (
    <>
      <NavBar />
      <div style={backgroundStyle}>
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

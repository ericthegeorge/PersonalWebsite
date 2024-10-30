// import Button from "./components/About";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import PersonalProjects from "./components/PersonalProjects";

import "./App.css";
import backgroundGif from "./components/images/background.gif";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useState } from "react";

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

  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div style={backgroundStyle}>
          <br></br>
          <section id="about">
            <About />
          </section>
          <br></br>
          <section id="skills">
            <Skills />
          </section>
          <br></br>
          <section id="personal-projects">
            <PersonalProjects />
          </section>
          <br></br>
          <section id="contact">
            <Contact />
          </section>
          <br></br>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

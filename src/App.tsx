import Button from "./components/About";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import PersonalProjects from "./components/PersonalProjects";

function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <NavBar></NavBar>
      <About></About>
      <Skills></Skills>
      <PersonalProjects></PersonalProjects>
      <Contact></Contact>
    </div>
  );
}

export default App;

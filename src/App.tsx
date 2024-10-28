import Button from "./components/About";
import NavBar from "./components/NavBar";
function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <NavBar></NavBar>
    </div>
  );
}

export default App;

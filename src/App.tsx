import Button from "./components/Button";
function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Button colour="primary" onClick={() => console.log("Clicked")}>
        button
      </Button>
    </div>
  );
}

export default App;

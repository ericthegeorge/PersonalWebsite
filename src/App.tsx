import Button from "./components/Button";
function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Button text="this button" type="primary" />
    </div>
  );
}

export default App;

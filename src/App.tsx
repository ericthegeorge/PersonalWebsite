import Alert from "./components/Alert";

function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Alert>
        Hello <span>another</span> world
      </Alert>
    </div>
  );
}

export default App;

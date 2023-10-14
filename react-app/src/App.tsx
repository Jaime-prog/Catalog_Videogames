import ListGroup from "./components/ListGroup";

let items = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia"];

const handleSelectItem = (item: string) => {
  console.log(`Selected item: ${item}`);
}

function App() {
  return (
    <div>
      <ListGroup items={items} heading={"Cities"} onSelecItem={handleSelectItem} />
    </div>
  );
}

export default App;

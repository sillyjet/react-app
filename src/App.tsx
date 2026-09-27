import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  //   let items = [
  //       "Mimzy",
  //       "Maple",
  //       "Squirtle",
  //       "Willow"
  //   ]
  //   const handleSelectItem = (item:string) => {
  //     console.log(item);
  //   }

  // return <div><ListGroup items={items} heading="Rats" onSelectItem={handleSelectItem}/></div>

const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );

}

export default App;
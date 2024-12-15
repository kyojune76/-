import { useRef, useState } from "react";
import OnButton from "./OnButton";
import OffButton from "./OffButton";

function App() {
  const [on, setOn] = useState(true);

  const setOnHandler = (light) => {
    setOn(light);
  };
  return (
    <div>
      <h1> App Component </h1>
      {/* { on === true ? <OnButton/> : <OffButton/> } */}
      {on ? (
        <OnButton setOnHandler={setOnHandler} />
      ) : (
        <OffButton setOnHandler={setOnHandler} />
      )}
    </div>
  );
}

export default App;

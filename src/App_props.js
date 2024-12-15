import { useState } from "react";
import Viewer from "./viewer";

function App() {
  const [count, setCount] = useState(120);
  const onClickHandler = (n) => {
    setCount(count + n);
  };
  return (
    <>
      <h1> App Component </h1>
      <Viewer count={count} />
      <button onClick={() => onClickHandler(1)}>+</button>
      <button onClick={() => onClickHandler(-1)}>-</button>
      <button onClick={() => onClickHandler(-10)}>-10</button>
    </>
  );
}

export default App;

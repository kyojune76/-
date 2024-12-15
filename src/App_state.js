import { useState } from "react";

function App() {
  console.log("App()을 랜더링하고 있어요.");
  const [stateCount, setStateCount] = useState({ count: 0 });
  let count = 100;
  return (
    <>
      <h1> App Component </h1>
      <div>{count}</div>
      <button
        onClick={() => {
          count++;
          console.log("count : ", count);
        }}
      >
        btn +
      </button>
      <div>{stateCount.count}</div>
      <button
        onClick={() => {
          setStateCount({ count: stateCount.count + 1 });
          console.log("count : ", stateCount);
        }}
      >
        state btn +
      </button>
    </>
  );
}

export default App;

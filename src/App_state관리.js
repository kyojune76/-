import { useState } from "react";

function App() {
  console.log("App()을 랜더링하고 있어요.");
  const [stateCount, setStateCount] = useState({ count: 0, data: "hello" });
  const { count, data } = stateCount;
  return (
    <>
      <h1> App Component </h1>
      <div>
        {count} - data : {data}
      </div>
      <button
        onClick={() => {
          //setStateCount({count:count+1});
          //setStateCount({...stateCount, count:count+1}); //1.
          setStateCount((prevstate) => {
            return { ...prevstate, count: count + 1 };
          }); //2.
          console.log("count : ", stateCount);
        }}
      >
        state btn +
      </button>
    </>
  );
}

export default App;

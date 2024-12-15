import { useRef, useState } from "react";

function App() {
  const countRef = useRef(0);
  const [update, setUpdate] = useState(0);
  return (
    <div>
      <h1> App Component </h1>
      <p> count : {countRef.current} </p>
      <div>
        <button
          onClick={() => {
            ++countRef.current;
            console.log(countRef.current);
          }}
        >
          {" "}
          ++ count
        </button>
      </div>
      <button
        onClick={() => {
          setUpdate(update + 1);
          console.log(countRef);
          console.log("state:", update);
        }}
      >
        {" "}
        update{" "}
      </button>
      <button
        onClick={() => {
          ++countRef.current;
          setUpdate(update + 1);
          console.log("state:", update);
        }}
      >
        {" "}
        update + ++count
      </button>
    </div>
  );
}

export default App;

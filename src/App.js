import { useRef, useState } from "react";

function App() {
  const [on, setOn] = useState(true);
  const setName = useRef();
  const setOnHandler = (light) => {
    setOn(light);
  };
  return (
    <div>
      <h1>App Component</h1>
      <div>
        name :<input ref={setName}></input>
      </div>
      <div>
        age:<input></input>
      </div>
      <div>
        <button
          onClick={() => {
            setName.current.focus();
          }}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default App;

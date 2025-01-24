import { useState } from "react";
import "../index.css";
function StateComponent() {
  const [state, setState] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        // backgroundColor: "red",
        margin: "auto",
        padding: "10px",
        gap: "10px",
      }}
    >
      <button
        className="red-500"
        onClick={() => setState((prevState) => prevState - 1)}
      >
        Decrement
      </button>
      <p>{state}</p>
      <button onClick={() => setState((prevState) => prevState + 1)}>
        Increment
      </button>
    </div>
  );
}

export default StateComponent;

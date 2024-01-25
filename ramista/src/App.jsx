import "./App.css";
import "./theme.css";

import { useState } from "react";

function App() {
  const [person, setPerson] = useState("Mohamed Elramy");
  const [age, setage] = useState("28");
  const [count, setcount] = useState(0);
  const [theme, settheme] = useState("");

  const changeAge = () => {
    setage("33");
  };
  return (
    <>
      <div className={`App ${theme}`}>
        <div>
          <button
            onClick={() => {
              settheme("");
            }}
            style={{ marginRight: "26px" }}
          >
            Light
          </button>
          <button
            onClick={() => {
              settheme("dark");
            }}
            style={{ marginRight: "26px" }}
          >
            Dark
          </button>
          <button
            onClick={() => {
              settheme("grey");
            }}
            style={{ marginRight: "26px" }}
          >
            Grey
          </button>
          <button
            onClick={() => {
              settheme("pink");
            }}
          >
            Pink
          </button>
        </div>

        <h2  style={{ marginTop: "66px" }} >My Name is {person}</h2>
        <button
          onClick={() => {
            setPerson("elramy we bas ");
          }}
        >
          Change Name
        </button>
        <br />
        <br />

        <h2>My Age is {age}</h2>
        <button onClick={changeAge}>Change Age</button>

        <br />
        <br />
        <br />
        <br />
        <button
          onClick={() => {
            setcount(count + 1);
          }}
        >
          Count is {count}
        </button>
      </div>
    </>
  );
}

export default App;

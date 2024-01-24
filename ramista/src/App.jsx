import "./App.css";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState("Mohamed Elramy");
  const [age, setage] = useState("28");
const [count, setcount] = useState(0);


  const changeAge = () => {
    setage("33");


  }
  return (
    <>
      <div className="App">
        <h2>My Name is {person}</h2>
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
        <button onClick={() => {
          setcount(count+1);
        }}>Count is {count}</button>


      </div>
    </>
  );
}

export default App;

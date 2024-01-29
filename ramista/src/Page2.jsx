
import {useContext } from "react";
import ThemeContext from "./context/Datacontext";

const Page2 = () => {
  const {name,theme} = useContext(ThemeContext);


  return (
    <div className={`App ${theme}`}>
      <h2>السيد على  مخاطر</h2>
      <h2>my name is {name}</h2>
    </div>
  );
}

export default Page2;

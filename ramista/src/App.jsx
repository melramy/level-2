import "./App.css";
import "./theme.css";
import { useReducer } from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import DataContext from "./context/Datacontext";

// const initailData = {
//   name: "Mohamed Elramy",
//   age: 28,
//   startCount: 0,
//   theme: "light",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE_NAME":
//       return { ...state, name: action.newValue };

//     case "CHANGE_AGE":
//       return { ...state, age: action.newValue };

//     case "INCREASE":
//       return { ...state, startCount: action.newValue };

//     case "CHANGE_THEME":
//       return { ...state, theme: action.newValue };

//     default:
//       return state;
//   }
// };

function App() {
  const { name, theme, toggleTheme, changName, age,changAge,startCount,increaseBy1 } =
    useContext(DataContext);

  // const [allData, dispatch] = useReducer(reducer, initailData);

  return (
    <>
      <div className={`App ${theme}`}>
        <Link to="/Page2">Go to Page2</Link>

        <button
          onClick={() => {
            toggleTheme(theme == "light" ? "dark" : "light");
          }}
          style={{ marginBottom: "44px" }}
        >
          لون الخلفية
        </button>
        <div
          onChange={() => {
            toggleTheme(theme == "light" ? "dark" : "light");
          }}
          style={{ marginBottom: "44px" }}
          className="btn-container"
        >
          <i className="fa fa-sun-o" aria-hidden="true" />
          <label className="switch btn-color-mode-switch">
            <input
              type="checkbox"
              name="color_mode"
              id="color_mode"
              defaultValue={1}
            />
            <label
              htmlFor="color_mode"
              data-on="Dark"
              data-off="Light"
              className="btn-color-mode-switch-inner"
            />
          </label>
          <i className="fa fa-moon-o" aria-hidden="true" />
        </div>

        <div>
          <button
            onClick={() => {
              toggleTheme("light");
            }}
            style={{ marginRight: "26px" }}
          >
            لون أبيض
          </button>
          <button
            onClick={() => {
              toggleTheme("dark");
            }}
            style={{ marginRight: "26px" }}
          >
            لون اسود
          </button>
          <button
            onClick={() => {
              toggleTheme("grey");
            }}
            style={{ marginRight: "26px" }}
          >
            لون رمادي
          </button>
          <button
            onClick={() => {
              toggleTheme("pink");
            }}
          >
            لون بنك
          </button>
        </div>

        <h2 style={{ marginTop: "66px" }}> my name is {name} </h2>
        <button
          onClick={() => {
            changName("elramy mo");
          }}
        >
          تغيير الاسم
        </button>
        <br />
        <br />

        <h2> my Age is {age}</h2>
        <button
          onClick={() => {
            changAge(44);
          }}
        >
          تغيير العمر
        </button>

        <br />
        <br />
        <br />
        <br />

        <button
            onClick={() => {
              increaseBy1(startCount+1);
            }}
        >العداد : {startCount}</button>
      </div>
    </>
  );
}

export default App;

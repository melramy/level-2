import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = {
  name: "Mohamed Elramy",
  age: 28,
  startCount: 0,
  theme: "light",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };

    case "CHANGE_AGE":
      return { ...state, age: action.newValue };

    case "INCREASE":
      return { ...state, startCount: action.newValue };

    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};

export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changName = () => {
    dispatch({ type: "CHANGE_NAME", newValue: "abo_ramy" });
  }

  return (
    <ThemeContexttt.Provider value={{ ...firstState,changName }}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;

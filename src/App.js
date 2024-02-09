import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Css from "./pages/css";
import Profile from "./pages/Profile";

//  level 2
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

import Signin from "./pages/Signin";
import Signup from "./pages/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },

  {
    path: "/Signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/about",
    element: <About />,
  },

  // {
  //   path: "/css",
  //   element: <Css />,
  // },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

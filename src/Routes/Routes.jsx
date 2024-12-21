import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>error baba error </h1>,
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Route;

// #FF5722 primary button color
// #FFC107 secondary color accent

// #212121 heading text
// #757575 body text color
// #FFF8E1 bg color

import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LoginPage from "../Pages/Login/LoginPage";
import Register from "../Pages/Register/Register";
import SingleFoodPage from "../Pages/SingleFoodPage/SingleFoodPage";

const Route = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/topSellingFood"),
      },
    ],
  },
  {
    path: "/allFoods",
    element: <h1>i am the all food</h1>,
  },
  {
    path: "/gallery",
    element: <h1>i am the gallery</h1>,
  },
  {
    path: "/singleFood/:id",
    element: <SingleFoodPage />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/singleFood/${params.id}`),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default Route;

// #FF5722 primary button color
// #FFC107 secondary color accent

// #212121 heading text
// #757575 body text color
// #FFF8E1 bg color

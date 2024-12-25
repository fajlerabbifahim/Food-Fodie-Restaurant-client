import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LoginPage from "../Pages/Login/LoginPage";
import Register from "../Pages/Register/Register";
import SingleFoodPage from "../Pages/SingleFoodPage/SingleFoodPage";
import AllFoods from "../Pages/AllFoodPage/AllFoods";
import PurchasePage from "../Pages/PurchasePage/PurchasePage";
import GalleryPage from "../Pages/MyGallery/GalleryPage";
import AddFood from "../Pages/AddFood/AddFood";
import MyOders from "../Pages/MyOder/MyOders";
import MyFoods from "../Pages/MyFood/MyFoods";

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
    element: <AllFoods />,
    loader: () => fetch("http://localhost:5000/allFoods"),
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
  {
    path: "/addFood",
    element: <AddFood />,
  },
  {
    path: "/myFoods/:email",
    element: <MyFoods />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/myFoods/${params.email}`),
  },
  {
    path: "/myorders",
    element: <MyOders />,
    loader: () => fetch("http://localhost:5000/myOrders"),
  },
  {
    path: "/singleFood/:id",
    element: <SingleFoodPage />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/singleFood/${params.id}`),
  },
  {
    path: "/purchase/:id",
    element: <PurchasePage />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/purchase/${params.id}`),
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

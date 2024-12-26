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
import MyFoodUpdate from "../Pages/MyFoodUpdate/MyFoodUpdate";
import PrivetRoute from "./PrivetRoute";

const Route = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://food-foodie-server.vercel.app/topSellingFood"),
      },
    ],
  },
  {
    path: "/allFoods",
    element: <AllFoods />,
    loader: () => fetch("https://food-foodie-server.vercel.app/allFoods"),
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
  {
    path: "/addFood",
    element: (
      <PrivetRoute>
        <AddFood />
      </PrivetRoute>
    ),
  },
  {
    path: "/myFoods/:email",
    element: (
      <PrivetRoute>
        <MyFoods />
      </PrivetRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://food-foodie-server.vercel.app/myFoods/${params.email}`, {
        credentials: "include",
      }),
  },
  {
    path: "/myFoodUpdate/:id",
    element: (
      <PrivetRoute>
        <MyFoodUpdate />
      </PrivetRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://food-foodie-server.vercel.app/updateFood/${params.id}`),
  },
  {
    path: "/myorders",
    element: (
      <PrivetRoute>
        <MyOders />
      </PrivetRoute>
    ),
    loader: () =>
      fetch("https://food-foodie-server.vercel.app/myOrders", {
        credentials: "include",
      }),
  },
  {
    path: "/singleFood/:id",
    element: <SingleFoodPage />,
    loader: ({ params }) =>
      fetch(`https://food-foodie-server.vercel.app/singleFood/${params.id}`),
  },
  {
    path: "/purchase/:id",
    element: (
      <PrivetRoute>
        <PurchasePage />
      </PrivetRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://food-foodie-server.vercel.app/purchase/${params.id}`),
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

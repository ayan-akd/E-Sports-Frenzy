import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Gallery from "../Pages/Gallery";
import Blogs from "../Pages/Blogs";
import EventDetails from "../Components/EventDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("/data.json"),
        },
        {
          path: "/gallery",
          element: <PrivateRoute>
            <Gallery></Gallery>
          </PrivateRoute>
        },
        {
          path: "/blogs",
          element: <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>,
          loader: () => fetch("/blogs.json"),
        },
        {
          path: "/events/:id",
          element: <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>,
          loader: () => fetch("/data.json"),
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
      ]
    },
  ]);

export default Router;
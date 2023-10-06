import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

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
        }
      ]
    },
  ]);

export default Router;
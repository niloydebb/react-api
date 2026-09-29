import { createBrowserRouter } from "react-router";
import MainLayouts from "./Layouts/MainLayouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children:[
    {
    path: "/",
    element: <Home />,
    },

    {
    path: "/about",
    element:  <About />,
    },

    {
    path: "/blog",
    element:  <Blog />,
    },
    ]
  },
]);

export default router
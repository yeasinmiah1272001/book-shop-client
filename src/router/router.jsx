import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import About from "../pages/About";
import Books from "../pages/Books";
import NewRelease from "../pages/NewRelease";
import Contacts from "../pages/Contacts";
import Blogs from "../pages/Blogs";
import SingleBook from "../pages/SingleBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/new",
        element: <NewRelease />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/singlebook/:id",
        loader: () => fetch(`/book.json`),
        element: <SingleBook />,
      },
    ],
  },
]);

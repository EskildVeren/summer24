import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Blog } from "./pages/Blog.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import MainPage from "./pages/MainPage.tsx";
import Resume from "./pages/Resume.tsx";
import BlogArticlePage from "./pages/BlogArticlePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "resume",
    element: <Resume />,
  },
  {
    path: "blog/:articleTitle",
    element: <BlogArticlePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

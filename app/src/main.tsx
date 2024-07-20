import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Blog } from "./pages/BrowseBlogPosts/Blog.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error/ErrorPage.tsx";
import MainPage from "./pages/MainPage/MainPage.tsx";
import Resume from "./pages/Resume/Resume.tsx";
import BlogArticlePage from "./pages/BlogArticle/BlogArticlePage.tsx";
import CreateBlogPost from "./pages/CreateBlogPost/CreateBlogPost.tsx";

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
  {
    path: "createBlogPost",
    element: <CreateBlogPost />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

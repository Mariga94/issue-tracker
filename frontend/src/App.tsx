import React, { Children, useState } from "react";
import "normalize.css";
import "./App.css";
import {
  Outlet,
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard";
import Aside from "./components/Aside/Aside";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Teams from "./Pages/Teams";
import Inbox from "./Pages/Inbox";
import Issues from "./Pages/Issues";
import Projects from "./Pages/Project";
import SingleIssue from "./Pages/SingleIssue";

// Pages

const App: React.FC = () => {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Aside />
          <Outlet />
        </main>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/teams",
          element: <Teams />,
        },
        {
          path: "/inbox",
          element: <Inbox />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/issues",
          element: <Issues />,
        },
        {
          path: "/issues/:id",
          element: <SingleIssue/>
        }
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

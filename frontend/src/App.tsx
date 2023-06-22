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
import Aside from "./components/Aside/Aside";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Teams from "./Pages/Teams";
import Inbox from "./Pages/Inbox";
import Issues from "./Pages/Issues";
import Projects from "./Pages/Projects";
import SingleIssue from "./Pages/SingleIssue";
import SingleProject from "./Pages/SingleProject";
import UserProfile from "./Pages/UserProfile";
import NotificationsPage from "./Pages/Notifications";
import TeamPage from "./Pages/TeamPage";

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
          path: "/notifications",
          element: <NotificationsPage />,
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
          element: <SingleIssue />,
        },
        {
          path: "/projects/:id",
          element: <SingleProject />,
        },
        {
          path: "teams/:id/:name",
          element: <TeamPage />,
        },
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

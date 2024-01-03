import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import Layout from "./pages/Layout";
import Service from "./pages/Service/Service";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";

import AuthProvider from "./context/AuthProvider";
import Profile from "./pages/Profile/Profile";
import Appointment from "./pages/appointment/appointment";
import Doctor from "./pages/doctor/doctor";
import Home from "./pages/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/service",
    element: <Layout />,
    children: [
      {
        path: "/service",
        element: <Service />,
      },
    ],
  },
  {
    path: "/doctor",
    element: <Layout />,
    children: [
      {
        path: "/doctor/:id",
        element: <Doctor />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Layout />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/appointments",
    element: <Layout />,
    children: [
      {
        path: "/appointments",
        element: <Appointment />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Layout />,
    children: [
      {
        path: "/auth/signin",
        element: <SignIn />,
      },
      {
        path: "/auth/signup",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

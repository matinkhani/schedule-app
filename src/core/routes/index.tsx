import AppLayout from "@/components/layout/app";
import AuthLayout from "@/components/layout/auth";
import HomePage from "@/pages/home-page";
import SigninPage from "@/pages/signin-page";
import SignupPage from "@/pages/signup-page";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    // signin and signup
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SigninPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    // routes
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    // not found
    path: "*",
    element: <Navigate to={"/"} replace />,
  },
]);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import PublicRoute from "./utils/PublicRoute.jsx";
import AuthLayout from "./utils/AnimationLayout.jsx";
import "./index.css";
import "flowbite";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: (
  //     <PublicRoute>
  //       <Login />
  //     </PublicRoute>
  //   ),
  // },
  // {
  //   path: "/signup",
  //   element: (
  //     <PublicRoute>
  //       <Signup />
  //     </PublicRoute>
  //   ),
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

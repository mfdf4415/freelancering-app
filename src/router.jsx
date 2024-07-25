import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import CompleteProfilePage from "./pages/CompleteProfilePage";
import OwnerLayout from "./layouts/OwnerLayout";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/auth", element: <AuthPage /> },
  { path: "/complete-profile", element: <CompleteProfilePage /> },
  {
    path: "/owner",
    element: <OwnerLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" /> },
      { path: "dashboard", element: <div>dashboard</div> },
      { path: "projects", element: <div>projects</div> },
      { path: "projects/:id", element: <div>project</div> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
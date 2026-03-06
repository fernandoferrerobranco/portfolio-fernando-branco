import { createBrowserRouter } from "react-router";
import Portfolio from "./Portfolio";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
]);
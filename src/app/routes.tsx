import { createBrowserRouter } from "react-router";
import Portfolio from "./Portfolio";
import AdminLayout from "./admin/AdminLayout";
import AdminLogin from "./admin/AdminLogin";
import AdminSetup from "./admin/AdminSetup";
import AdminDashboard from "./admin/AdminDashboard";
import AdminEditor from "./admin/AdminEditor";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Portfolio,
  },
  {
    path: "/admin/setup",
    Component: AdminSetup,
  },
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      {
        index: true,
        Component: AdminDashboard,
      },
      {
        path: "editor/:section",
        Component: AdminEditor,
      },
    ],
  },
]);
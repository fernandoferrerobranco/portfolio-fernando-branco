import { createBrowserRouter } from "react-router";
import Portfolio from "./Portfolio";
import Admin from "./Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Portfolio,
  },
  {
    path: "/admin",
    Component: Admin,
  },
]);

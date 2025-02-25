import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import DashboardLayout from "../components/layout/DashboardLayout/DashboardLayout";
import { userRoutes } from "./user.route";
import { routeGenerator } from "../utils/routeGenerator";
import { adminPaths } from "./admin.route";
import { customerPaths } from "./customer.route";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import VerifyPage from "../pages/VerifyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(userRoutes),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute roles={["admin"]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/customer",
    element: (
      <ProtectedRoute roles={["customer"]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(customerPaths),
  },
  {
    path: "/order/verify",
    element: <VerifyPage />,
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

export default router;

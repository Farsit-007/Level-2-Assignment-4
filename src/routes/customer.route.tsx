import OrderTable from "../pages/Dashboard/order/OrderTable";
import Profile from "../pages/Dashboard/Profile/Profile";

export const customerPaths = [
  {
    name: "Profile",
    path: "profile",
    element: <Profile />,
  },
  {
    name: "Order History",
    path: "order-management",
    element: <OrderTable />,
  },
];

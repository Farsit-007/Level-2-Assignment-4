import Dashboard from "../pages/Dashboard/AdminDashboard";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard/>,
  },
  {
    name: "Product Management",
    children: [
      {
        name: "Create Product",
        path: "create-product",
        element:  <Dashboard/>,
      },
      {
        name: "Manage Product",
        path: "manage-product",
        element: <div>Manage Product</div>,
      },
    ],
  },
  {
    name: "Order Management",
    path: "order-management",
    element: <div>Order Management</div>,
  },
];

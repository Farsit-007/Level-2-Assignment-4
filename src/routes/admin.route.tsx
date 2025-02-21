
import AdminOrder from "../pages/Dashboard/adminOrder/AdminOrder";
import ProductCreate from "../pages/Dashboard/ProductCreate";
import ProductList from "../pages/Dashboard/ProductList";
import ProductUpdate from "../pages/Dashboard/ProductUpdate";
import Profile from "../pages/Dashboard/Profile/Profile";
import UserManagement from "../pages/Dashboard/userManagement/UserManagement";

export const adminPaths = [
  {
    name: "Profile",
    path: "profile",
    element: <Profile />,
  },
  {
    name: "User Management",
    path: "user-management",
    element: <UserManagement />,
  },
  {
    name: "Product Management",
    children: [
      {
        name: "Create Product",
        path: "create-product",
        element: <ProductCreate />,
      },
      {
        name: "Manage Product",
        path: "manage-product",
        element: <ProductList />,
      },
      {
        path: "update-product/:productId",
        element: <ProductUpdate />,
      },
    ],
  },
  {
    name: "Order Management",
    path: "order-management",
    element: <AdminOrder />,
  },
];

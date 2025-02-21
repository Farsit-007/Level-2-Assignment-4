import ProtectedRoute from "../components/layout/ProtectedRoute";
import AboutUs from "../pages/AboutUs";
import AllProduct from "../pages/AllProduct";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";

export const userRoutes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "About Us",
    path: "about",
    element: <AboutUs />,
  },
  {
    path: "product-details/:productId",
    element: <ProductDetails />,
  },
  {
    path: "checkout/:productId",
    element: (
      <ProtectedRoute roles={["customer", "admin"]}>
        <Checkout />
      </ProtectedRoute>
    ),
  },
  
  {
    name: "All Products",
    path: "all-product",
    element: <AllProduct />,
  },
];

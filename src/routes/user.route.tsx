import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";

export const userRoutes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name : "About Us",
    path: "about",
    element: <AboutUs />,
  },
  {
    path: "product-details/:productId",
    element: <ProductDetails/>,
  },
  {
    name : "All Products",
    path: "all-product",
    element: <AboutUs />,
  },
];


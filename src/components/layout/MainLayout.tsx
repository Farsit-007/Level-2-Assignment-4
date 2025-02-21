import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="font-websiteFont">
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="max-w-[1380px] mx-auto ">
        <Outlet />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

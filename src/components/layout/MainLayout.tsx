import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="bg-[#fff]">
            <Navbar/>
            </div>
            <div className="max-w-[1380px] mx-auto ">
                <Outlet/>
            </div>
            <div className="bg-gray-300">
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;
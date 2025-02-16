import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Nav  onToggleSidebar={toggleSidebar} />
      <div className="flex flex-1 mt-[65px] relative">
        <Sidebar isActive={isSidebarOpen}  />

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 md:hidden z-10"
            onClick={closeSidebar}
          ></div>
        )}

        <div
          className={`flex-1 bg-[#F6F6F6] transform transition-all duration-400 ease-in-out ${
            isSidebarOpen ? "ml-0" : "md:ml-64"
          } overflow-y-auto relative z-0`}
        >
          <div className="flex flex-col h-full">
            <div className="flex-1 p-3 md:p-7 overflow-y-auto">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

import { useState } from "react";
import ChangePassword from "../../../components/ui/ChangePassword";
import UserDetails from "../../../components/ui/UserDetails";

const Profile = () => {
  const tabs = [
    { id: "tab1", label: "User Info", content: <UserDetails /> },
    {
      id: "tab2",
      label: "Change Password",
      content: <ChangePassword />,
    },
  ];
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      <div className="w-full  mt-10">
        <div className="flex ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-4 flex-1 text-center font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className=" p-4 my-5 rounded-b-md bg-white shadow-md mt-2">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default Profile;

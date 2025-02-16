import { useState } from "react";
import { NavLink } from "react-router-dom";
import { sidebarRouteGenerator } from "../../../utils/sidebarItems";
import { adminPaths } from "../../../routes/admin.route";
import { customerPaths } from "../../../routes/customer.route";
import { useAppSelector } from "../../../redux/features/hooks";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";
import { MdOutlineArrowDropDown } from "react-icons/md";
interface User {
  role: "admin" | "customer";
}

const Menu = () => {
  const [dropDownOpen, setDropDownOpen] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleDropdownToggle = (key: string) => {
    setDropDownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const userRole = {
    ADMIN: "admin",
    CUSTOMER: "customer",
  };
  const user = useAppSelector(useCurrentUser) as User;
  let sidebarItems;

  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarRouteGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.CUSTOMER:
      sidebarItems = sidebarRouteGenerator(customerPaths, userRole.CUSTOMER);
      break;
    default:
      break;
  }

  return (
    <div>
      <ul className="space-y-2 mx-4">
        {sidebarItems!.map((menu, index) => (
          <li key={index} className="group">
            {menu.children ? (
              <>
                <button
                  onClick={() => handleDropdownToggle(menu.key)}
                  className="flex w-full items-center justify-between p-3 text-sm font-medium rounded-lg transition-all duration-200 text-gray-700 hover:bg-gray-200"
                >
                  {menu.label.name}  <MdOutlineArrowDropDown size={20} />
                </button>

                {dropDownOpen[menu.key] && (
                  <ul className="mt-2 space-y-1">
                    {menu.children.map((sub, subIndex) => (
                      <li key={subIndex} className="pl-4">
                        {sub.label.to && (
                          <NavLink
                            to={sub.label.to}
                            className={({ isActive }) =>
                              `block p-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                                isActive
                                  ? "bg-[#23209F] text-white"
                                  : "text-gray-700 hover:bg-gray-200"
                              }`
                            }
                          >
                            {sub.label.name}
                          </NavLink>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              menu.label.to && (
                <NavLink
                  to={menu.label.to}
                  className={({ isActive }) =>
                    `block p-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-[#23209F] text-white"
                        : "text-gray-700 hover:bg-gray-200"
                    }`
                  }
                >
                  {menu.label.name}
                </NavLink>
              )
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

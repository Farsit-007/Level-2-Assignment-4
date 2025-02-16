import { NavLink } from "react-router-dom";
import { TUserPath } from "../types/nav.type";

export const navRouteGenerator = (items: TUserPath[]) => {
  return items
    .filter((item) => item.path && item.name) 
    .map((item) => ({
      label: (
        <NavLink
          to={item.path ? (item.path.startsWith("/") ? item.path : `/${item.path}`) : "/"} 
          className={({ isActive }) =>
            `block w-full h-full px-3 py-2 transition-all duration-300 ${
              isActive ? "text-[#E3C9A7] " : "hover:text-[#E3C9A7]"
            }`
          }
        >
          {item.name}
        </NavLink>
      ),
    }));
};

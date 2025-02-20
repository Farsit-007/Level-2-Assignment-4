import { useState, useRef, useEffect } from "react";
import { navRouteGenerator } from "../../utils/navItems";
import { userRoutes } from "../../routes/user.route";
import { useAppSelector } from "../../redux/features/hooks";
import { TUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { verifyToken } from "../../utils/verifyToken";

export const Navbar = () => {
  const menuItems = navRouteGenerator(userRoutes);
  const token = useAppSelector(useCurrentToken);
  let user;
  if (token) {
    user = verifyToken(token);
  }

  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const closeDropDown = (e: MouseEvent) => {
      if (
        dropDownMenuRef.current &&
        !dropDownMenuRef.current.contains(e.target as Node)
      ) {
        setDropDownState(false);
      }
    };
    document.addEventListener("mousedown", closeDropDown);
    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between max-w-[1380px] mx-auto px-4 py-2  ">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold  transition-all duration-200 hover:scale-110">
        <h2>Logo</h2>
      </div>

      <ul className="hidden md:flex items-center gap-8">
        {menuItems.map((item, index) => (
          <li key={index} className="group flex cursor-pointer flex-col">
            {item.label}
            <span className="mt-[2px] h-[3px] w-0 rounded-full bg-[#f7c788] transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
        {user ? (
          <Link
            to={`/${(user as TUser)?.role}/profile`}
            className="flex pb-1 items-center cursor-pointer gap-2"
          >
            Dashboard <FaArrowAltCircleRight />
          </Link>
        ) : (
          <div className="flex items-center gap-5">
            <Link
              to={"/login"}
              className="flex items-center cursor-pointer pl-3 lg:pl-0 pb-1 gap-2"
            >
              Login
            </Link>
            <Link
              to={`/register`}
              className="flex items-center cursor-pointer pl-3 lg:pl-0 pb-1 gap-2"
            >
              Register
            </Link>
          </div>
        )}
      </ul>

      <div ref={dropDownMenuRef} className="relative flex md:hidden">
        <button
          onClick={() => setDropDownState(!dropDownState)}
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        {dropDownState && (
          <ul className="z-60 gap-2  bg-[#fff] absolute right-0 top-11 flex w-[200px] flex-col rounded-lg text-base">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer px-6 py-2  hover:bg-[#f7c788]"
                onClick={() => setDropDownState(false)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
        {user ? (
          <Link
            to={`/${(user as TUser)?.role}/profile`}
            className="flex items-center cursor-pointer pl-3 lg:pl-0 pb-1 gap-2"
          >
            Dashboard <FaArrowAltCircleRight />
          </Link>
        ) : (
          <div className="flex items-center gap-2 lg:gap-5">
            <Link
              to={"/login"}
              className="flex items-center cursor-pointer pl-3 lg:pl-0 pb-1 gap-2"
            >
              Login
            </Link>
            <Link
              to={`/register`}
              className="flex items-center pl-3 cursor-pointer lg:pl-0 pb-1 gap-2"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

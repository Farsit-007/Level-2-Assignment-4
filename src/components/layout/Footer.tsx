import { userRoutes } from "../../routes/user.route";
import { navRouteGenerator } from "../../utils/navItems";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  const menuItems = navRouteGenerator(userRoutes);
  return (
    <footer className="flex flex-col text-white max-w-[1380px] mx-auto px-4">
      <div className="flex flex-col  items-center justify-between gap-5  py-8  md:flex-row md:gap-0">
        <Link
          to={"/"}
          className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold  transition-all duration-200 hover:scale-110"
        >
          <figure className="w-40 h-12">
            <img src={logo} alt="" className="w-full h-full" />
          </figure>
        </Link>
        <nav className="text-lg">
          <ul className="flex items-center gap-4">
            {menuItems.map((item, index) => (
              <li key={index} className="group flex cursor-pointer flex-col">
                {item.label}
                <span className="mt-[2px] h-[3px] w-0 rounded-full bg-[#f7c788] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <aside className=" py-5 text-center text-sm  ">
        <p>&copy; 2025 SpeedGear Hub. All Rights Reserved.</p>
      </aside>
    </footer>
  );
}

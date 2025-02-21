import { userRoutes } from "../../routes/user.route";
import { navRouteGenerator } from "../../utils/navItems";

export default function Footer() {
  const menuItems = navRouteGenerator(userRoutes);
  return (
    <footer className="flex flex-col text-white max-w-[1380px] mx-auto px-4">
      <div className="flex flex-col  items-center justify-between gap-5  py-8  md:flex-row md:gap-0">
        <h5 className="text-2xl font-bold">Motor Hub</h5>
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
        <p>&copy; 2025 Motor Hub. All Rights Reserved.</p>
      </aside>
    </footer>
  );
}

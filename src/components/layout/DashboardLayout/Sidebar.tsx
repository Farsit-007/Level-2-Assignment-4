import Menu from "./SIdebarMenu";
interface Props {
  isActive: boolean
}
const Sidebar: React.FC<Props>  = ({ isActive }) => {
  return (
    <div
      className={`overflow-y-auto  fixed inset-y-0 left-0 top-[65px] z-20 w-64 bg-white transform transition-transform duration-100 ease-in-out ${
        isActive ? "translate-x-0" : "-translate-x-full"
      }  md:top-[65px] ${
        !isActive ? "md:translate-x-0" : "md:-translate-x-full "
      }`}
    >
      <div className="flex flex-col flex-1 pr-1 mt-4 md:mt-1 ">
        <nav>
          <Menu/>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

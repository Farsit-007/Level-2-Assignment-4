import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { logout, useCurrentUser } from "../../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/features/hooks";
import { useGetSingleUserQuery } from "../../../redux/features/users/user.api";

interface Props {
  onToggleSidebar: () => void;
}

const Nav: React.FC<Props> = ({ onToggleSidebar }) => {
  const user = useAppSelector(useCurrentUser);
  const { data: userInfo, isLoading } = useGetSingleUserQuery(user?.userEmail);
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const items = ["Logout"];
  const dispatch = useAppDispatch();
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      )
        setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  const handleLogout = () => {
    dispatch(logout());
  };
  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <div className="bg-white h-[65px] px-3 lg:pr-10 fixed top-0 left-0 w-full flex items-center  z-10">
      <div className="flex items-center justify-center">Logo</div>
      <div
        className={`flex-1 ml-20 md:ml-60 flex justify-between items-center`}
      >
        <div className="flex items-center gap-5 ">
          <button
            onClick={onToggleSidebar}
            className=" bg-[#EAEAFF80] text-blue-600 p-[6px] rounded-md "
          >
            <RxHamburgerMenu size={25} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <h4>{userInfo?.name}</h4>
          </div>
          <div ref={dropDownRef} className="relative mx-auto  w-fit ">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className=" px-2 md:px-4 cursor-pointer py-2"
            >
              <img
                width={500}
                height={500}
                className="size-10 border-2 border-amber-300 rounded-full bg-slate-500 object-cover"
                src={userInfo?.image}
                alt="avatar navigate ui"
              />
            </button>
            <ul
              className={`${
                open ? "visible" : "invisible"
              } absolute top-15 z-50 w-full space-y-1 md:pl-1 text-white rounded-sm`}
            >
              {items.map((item, idx) => (
                <button
                  key={idx}
                  className={`rounded-sm bg-sky-400 text-center py-1 px-2 ${
                    open ? "opacity-100 duration-500" : "opacity-0 duration-200"
                  } hover:bg-sky-500`}
                  style={{
                    transform: `translateX(${open ? 0 : (idx + 1) * 10}px)`,
                  }}
                  onClick={handleLogout}
                >
                  {item}
                </button>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

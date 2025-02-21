import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/features/hooks";
import { useGetSingleUserQuery } from "../../redux/features/users/user.api";
import FormModal from "./FormModal";

const UserDetails = () => {
  const user = useAppSelector(useCurrentUser);
  const { data: userInfo, isLoading } = useGetSingleUserQuery(user?.userEmail);
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="lg:w-[30%]">
        <div className="space-y-2  py-7 flex justify-center relative items-center">
          <div className="relative w-44">
            <div className="rounded-full overflow-hidden border-2 border-white w-44 h-44">
              <img
                src={userInfo?.image}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="text-center mt-5">
              {" "}
              {(userInfo?.role === "admin" && (
                <h2 className="font-semibold text-xl rounded-full border border-red-400 px-1 py-1  text-red-400">
                  Admin
                </h2>
              )) ||
                (userInfo?.role === "customer" && (
                  <h2 className="font-semibold text-xl rounded-full border border-green-400 px-1 py-1  text-green-400">
                    Customer
                  </h2>
                ))}
            </div>
            <div>
              <FormModal />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center ">
        <div className="w-px h-[300px] bg-gray-400"></div>
      </div>

      <div className="lg:w-[60%]">
        <div className="overflow-x-auto ">
          <table className="w-full mx-auto ">
            <tbody>
              <tr className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6 font-semibold text-center">Name </td>
                <td className="py-4 px-6  font-semibold text-center">:</td>
                <td className="py-4 px-6  ">{userInfo?.name}</td>
              </tr>
              <tr className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6  font-semibold text-center">Email </td>
                <td className="py-4 px-6  font-semibold text-center">:</td>
                <td className="py-4 px-6  ">{userInfo?.email}</td>
              </tr>
              <tr className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6  font-semibold text-center">Phone</td>
                <td className="py-4 px-6  font-semibold text-center">:</td>
                <td className="py-4 px-6  ">{userInfo?.phone}</td>
              </tr>
              <tr className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6  font-semibold text-center">City</td>
                <td className="py-4 px-6  font-semibold text-center">:</td>
                <td className="py-4 px-6  ">{userInfo?.city}</td>
              </tr>
              <tr className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6  font-semibold text-center">
                  Address
                </td>
                <td className="py-4 px-6  font-semibold text-center">:</td>
                <td className="py-4 px-6  ">{userInfo?.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

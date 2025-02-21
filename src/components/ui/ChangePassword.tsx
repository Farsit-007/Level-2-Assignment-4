import { ChangeEvent, FormEvent, useState } from "react";
import { useChangePasswordMutation } from "../../redux/features/auth/authApi";
import { TError } from "../../types/global.type";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../redux/features/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const ChangePassword = () => {
  const [ChangePassword] = useChangePasswordMutation();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await ChangePassword(formData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
        dispatch(logout());
      }
    } catch (error) {
      console.log(error);
      const typedError = error as TError;
      const errorMessage =
        typedError?.data?.errorSource?.[0]?.message || "Something went wrong";
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border p-7 shadow-lg sm:p-10 ">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 text-sm">
            <label htmlFor="oldPassword" className="block font-medium">
              Old Password
            </label>
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none "
              id="oldPassword"
              placeholder="Enter password"
              name="oldPassword"
              type="password"
              value={formData.oldPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2 text-sm">
            <label htmlFor="newPassword" className="block font-medium">
              New Password
            </label>
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none "
              id="newPassword"
              placeholder="Enter password"
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex text-white items-center justify-center rounded-lg bg-black px-4 py-2 text-[12px] font-semibold  hover:bg-[#f7c788] sm:text-sm md:text-base"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;

/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FormEvent, useState } from "react";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/features/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(formData).unwrap();
      const user = verifyToken(res.data.token) as TUser;
      dispatch(setUser({ user: user, token: res.data.token }));
      if (res.data.token) {
        toast.success("Logged in Successfully");
        navigate(`/`);
      }
    } catch (err) {
      console.error("Invalid Credential");
    }
  };

  return (
    <div className="h-screen flex items-center">
      <div className="group mx-auto flex w-full items-center max-w-3xl border border-black bg-white  shadow-lg ">
        <div className="relative hidden min-h-[400px] w-1/3 overflow-hidden bg-black sm:block">
          <h1 className="absolute bottom-3 right-3 text-right text-2xl font-semibold text-white">
            Hey! <br /> Welcome to
            <br /> Motor Hub
          </h1>
          <span className="absolute -left-8 -top-8 z-20 h-32 w-32 rounded-full bg-[#ffcc893d] duration-500 group-hover:h-56 group-hover:w-56"></span>
          <span className="absolute -left-5 -top-5 z-10 h-36 w-36 rounded-full bg-[#f7c788]"></span>
        </div>
        <form className="flex-1 p-8" onSubmit={handleSubmit}>
          <h1 className="pb-6 text-3xl font-semibold tracking-tight">
            Sign In
          </h1>
          <div className="space-y-5">
            <div className="relative text-sm">
              <input
                className="peer/email block w-full rounded-md border border-black bg-inherit p-2.5 shadow-lg outline-none"
                type="email"
                placeholder=""
                id="navigate_ui_email_33"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label
                className="absolute -top-2 left-2 rounded-md bg-border-black px-2 text-xs text-white duration-300 peer-placeholder-shown/email:top-3 peer-placeholder-shown/email:bg-transparent peer-placeholder-shown/email:text-sm peer-placeholder-shown/email:text-zinc-400 peer-focus/email:-top-2 peer-focus/email:bg-black peer-focus/email:text-xs peer-focus/email:text-white"
                htmlFor="navigate_ui_email_33"
              >
                Email
              </label>
            </div>
            <div className="relative text-sm">
              <input
                className="peer/pass block w-full rounded-md border border-black bg-inherit p-2.5 shadow-lg outline-none"
                type="password"
                placeholder=""
                id="navigate_ui_password_33"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <label
                className="absolute -top-2 left-2 rounded-md bg-blacks px-2 text-xs text-white duration-300 peer-placeholder-shown/pass:top-3 peer-placeholder-shown/pass:bg-transparent peer-placeholder-shown/pass:text-sm peer-placeholder-shown/pass:text-zinc-400 peer-focus/pass:-top-2 peer-focus/pass:bg-black peer-focus/pass:text-xs peer-focus/pass:text-white"
                htmlFor="navigate_ui_password_33"
              >
                Password
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="flex mt-5 font-medium bg-black text-white transition-all duration-300 p-2 px-6 hover:bg-[#f7c788] hover:text-black rounded-md items-center cursor-pointer gap-2"
            >
              Submit
            </button>
            <Link to={"/register"} className="text-sm">
              <small>
                Don't have an account?{" "}
                <span className="underline font-medium">Register</span>
              </small>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

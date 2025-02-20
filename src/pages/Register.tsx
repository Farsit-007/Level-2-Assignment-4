/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useRegisterMutation } from "../redux/features/auth/authApi";
import { TError } from "../types/global.type";
import { uploadFile } from "../utils/ImageUpload";

const Register = () => {
  const [register] = useRegisterMutation();
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    city: string;
    image: string | File;
    address: string;
    password: string;
  }>({
    name: "",
    email: "",
    phone: "",
    city: "",
    image: "",
    address: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let url;
    if (formData.image) {
      url = await uploadFile(formData.image);
    }
    const userData = {
      ...formData,
      image: url,
    };
    console.log(userData);
    try {
      const res = await register(userData).unwrap();
      if (res.success === true) {
        toast.success("Please login your account");
        navigate(`/login`);
      }
    } catch (err) {
      console.log(err);
      const typedError = err as TError;
      const errorMessage =
        typedError?.data?.errorSource?.[0]?.message || "Something went wrong";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="h-screen flex items-center">
      <div className="group mx-auto flex w-full items-center max-w-4xl border border-blue-400 bg-white text-blue-400 shadow-lg dark:bg-zinc-900">
        <div className="relative hidden min-h-[450px] w-1/3 overflow-hidden bg-blue-400 sm:block">
          <h1 className="absolute bottom-3 right-3 text-right text-2xl font-semibold text-white">
            Hey! <br /> Welcome to
            <br /> NavigateUI
          </h1>
          <span className="absolute -left-8 -top-8 z-20 h-32 w-32 rounded-full bg-blue-800/20 duration-500 group-hover:h-56 group-hover:w-56"></span>
          <span className="absolute -left-5 -top-5 z-10 h-36 w-36 rounded-full bg-blue-800/50"></span>
        </div>
        <form className="flex-1 p-8" onSubmit={handleSubmit}>
          <h1 className="pb-6 text-3xl font-semibold tracking-tight">
            Create Account
          </h1>
          <div className="space-y-5">
            <div className="relative text-sm">
              <input
                className="peer/email block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                type="text"
                placeholder=""
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label
                className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/email:top-3 peer-placeholder-shown/email:bg-transparent peer-placeholder-shown/email:text-sm peer-placeholder-shown/email:text-zinc-400 peer-focus/email:-top-2 peer-focus/email:bg-blue-300 peer-focus/email:text-xs peer-focus/email:text-blue-600"
                htmlFor="name"
              >
                Name
              </label>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="relative text-sm">
                <input
                  className="peer/email block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                  type="email"
                  placeholder=""
                  id="navigate_ui_email_33"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <label
                  className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/email:top-3 peer-placeholder-shown/email:bg-transparent peer-placeholder-shown/email:text-sm peer-placeholder-shown/email:text-zinc-400 peer-focus/email:-top-2 peer-focus/email:bg-blue-300 peer-focus/email:text-xs peer-focus/email:text-blue-600"
                  htmlFor="navigate_ui_email_33"
                >
                  Email
                </label>
              </div>
              <div className="relative text-sm">
                <input
                  className="peer/email block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                  type="text"
                  placeholder=""
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <label
                  className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/email:top-3 peer-placeholder-shown/email:bg-transparent peer-placeholder-shown/email:text-sm peer-placeholder-shown/email:text-zinc-400 peer-focus/email:-top-2 peer-focus/email:bg-blue-300 peer-focus/email:text-xs peer-focus/email:text-blue-600"
                  htmlFor="name"
                >
                  Phone
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="relative text-sm">
                <input
                  className="peer/email block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                  type="text"
                  placeholder=""
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
                <label
                  className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/email:top-3 peer-placeholder-shown/email:bg-transparent peer-placeholder-shown/email:text-sm peer-placeholder-shown/email:text-zinc-400 peer-focus/email:-top-2 peer-focus/email:bg-blue-300 peer-focus/email:text-xs peer-focus/email:text-blue-600"
                  htmlFor="name"
                >
                  City
                </label>
              </div>
              <div className="relative text-sm">
                <input
                  className="peer/email block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                  type="text"
                  placeholder=""
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
                <label
                  className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/email:top-3 peer-placeholder-shown/email:bg-transparent peer-placeholder-shown/email:text-sm peer-placeholder-shown/email:text-zinc-400 peer-focus/email:-top-2 peer-focus/email:bg-blue-300 peer-focus/email:text-xs peer-focus/email:text-blue-600"
                  htmlFor="name"
                >
                  Address
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="relative text-sm">
                <input
                  className="peer/pass block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                  type="password"
                  placeholder=""
                  id="navigate_ui_password_33"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <label
                  className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/pass:top-3 peer-placeholder-shown/pass:bg-transparent peer-placeholder-shown/pass:text-sm peer-placeholder-shown/pass:text-zinc-400 peer-focus/pass:-top-2 peer-focus/pass:bg-blue-300 peer-focus/pass:text-xs peer-focus/pass:text-blue-600"
                  htmlFor="navigate_ui_password_33"
                >
                  Password
                </label>
              </div>
              <div className="relative text-sm">
                <input
                  className="peer/image block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                  type="file"
                  accept="image/*"
                  id="navigate_ui_image_33"
                  name="image"
                  onChange={handleFileChange}
                  required
                />
                <label
                  className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/image:top-3 peer-placeholder-shown/image:bg-transparent peer-placeholder-shown/image:text-sm peer-placeholder-shown/image:text-zinc-400 peer-focus/image:-top-2 peer-focus/image:bg-blue-300 peer-focus/image:text-xs peer-focus/image:text-blue-600"
                  htmlFor="navigate_ui_image_33"
                >
                  Upload Image
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="relative z-50 mb-4 mt-8 inline-block overflow-hidden rounded-md uppercase border border-blue-400 px-5 py-2 shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-full before:rounded-s-full before:bg-blue-400 before:duration-300 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-full after:rounded-e-full after:bg-blue-400 after:duration-300 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
            >
              Submit
            </button>
            <Link to={"/login"} className="text-sm">
              <small>
                Already have an account?{" "}
                <span className="underline font-medium">Login</span>
              </small>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/features/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import {
  useGetSingleUserQuery,
  useUpdateProfileUserMutation,
} from "../../redux/features/users/user.api";
import { TError } from "../../types/global.type";
import toast from "react-hot-toast";
import { uploadFile } from "../../utils/ImageUpload";
import { TUser } from "../../types/user.type";

const FormModal = () => {
  const user = useAppSelector(useCurrentUser);
  const { data: userInfo, isLoading } = useGetSingleUserQuery(user?.userEmail);
  const [updateProfileUser] = useUpdateProfileUserMutation();
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    city: string;
    image: string | File;
    address: string;
  }>({
    name: "",
    email: "",
    image: "",
    city: "",
    phone: "",
    address: "",
  });
  useEffect(() => {
    if (userInfo?.email) {
      setFormData({
        name: userInfo?.name || "",
        email: userInfo?.email || "",
        image: userInfo?.image || "",
        city: userInfo?.city || "",
        phone: userInfo?.phone || "",
        address: userInfo?.address || "",
      });
    }
  }, [userInfo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    try {
      let imageUrl = "";
      if (formData.image) {
        imageUrl = await uploadFile(formData.image);
      }
      const userData = {
        ...formData,
        image: imageUrl,
      };
      const updateData: { email: string | undefined; data: Partial<TUser> } = {
        email: userInfo?.email,
        data: userData,
      };
      const res = await updateProfileUser(updateData).unwrap();
      if (res?.success) {
        setOpenModal(false);
        toast.success(res?.message);
      }
    } catch (error) {
      const typedError = error as TError;
      const errorMessage =
        typedError?.data?.errorSource?.[0]?.message || "Something went wrong";
      toast.error(errorMessage);
    }
  };
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="mx-auto flex  items-center justify-center">
      <button
        onClick={() => setOpenModal(true)}
        className="w-full mt-5 flex text-white items-center justify-center rounded-full bg-black px-4 py-2 text-[12px] font-semibold  hover:bg-[#f7c788] sm:text-sm md:text-base"
      >
        Update Profile
      </button>

      {openModal && (
        <div
          className="fixed inset-0 z-90 flex items-center justify-center"
          onClick={() => setOpenModal(false)}
        >
          <div
            onClick={(e_) => e_.stopPropagation()}
            className="relative w-full md:w-[70%] rounded-lg bg-white p-5 shadow-lg"
          >
            <svg
              onClick={() => setOpenModal(false)}
              className="absolute top-2 right-3 w-10 cursor-pointer fill-black "
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
            </svg>

            <h1 className="pb-4 text-2xl font-semibold">Update Profile</h1>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="grid md:grid-cols-2 gap-5">
                {" "}
                <div>
                  <label className="block">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg p-2 border bg-white "
                  />
                </div>
                <div>
                  <label className="block">Phone No.</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="018*******"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg p-2 border bg-white "
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block">City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full rounded-lg p-2 border bg-white "
                  />
                </div>

                <div>
                  <label className="block">Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full rounded-lg p-2 border bg-white "
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2  gap-10">
                <div>
                  <label className="block">Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={handleFileChange}
                    className="w-full rounded-lg p-2 border bg-white "
                  />
                </div>
                <div>
                  {formData.image && (
                    <img
                      src={
                        typeof formData.image === "string"
                          ? formData.image
                          : URL.createObjectURL(formData.image)
                      }
                      alt="profile"
                      className=" w-16 h-14 mt2 rounded-xl"
                    />
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex text-white items-center justify-center rounded-lg bg-black px-4 py-2 text-[12px] font-semibold  hover:bg-[#f7c788] sm:text-sm md:text-base"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;

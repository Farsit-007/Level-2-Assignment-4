import { useParams } from "react-router-dom";
import { useGetSIngleProductQuery } from "../redux/features/publicProduct/featuredProduct.api";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa6";
import { useAppSelector } from "../redux/features/hooks";
import { useCurrentUser } from "../redux/features/auth/authSlice";
import { useCreateOrdersMutation } from "../redux/features/orders/order.api";
import { TError } from "../types/global.type";
import toast from "react-hot-toast";

const Checkout = () => {
  const { productId } = useParams();
  const [createOrder, { isSuccess, data }] = useCreateOrdersMutation();
  const user = useAppSelector(useCurrentUser);
  const {
    data: product,
    isLoading,
    error,
  } = useGetSIngleProductQuery(productId);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.userEmail || "",
  });

  const [quantity, setQuantity] = useState<number>(1);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const totalPrice = (product?.price ?? 0) * quantity;

  const handleShurjoPayPayment = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const orderData = {
        ...formData,
        product: product?._id,
        productName: product?.name,
        productImage: product?.image,
        quantity,
        totalPrice,
      };
      await createOrder(orderData).unwrap();
    } catch (error) {
      console.log(error);
      const typedError = error as TError;
      const errorMessage =
        typedError?.data?.errorSource?.[0]?.message || "Something went wrong";
      toast.error(errorMessage);
    }
  };
  useEffect(() => {
    if (isSuccess && data?.data) {
      window.location.href = data.data;
    }
  }, [data, isSuccess]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !product) return <div>Error loading product.</div>;

  return (
    <div>
      <form onSubmit={handleShurjoPayPayment}>
        <div className="flex flex-col lg:flex-row px-5 max-w-[1280px] mx-auto lg:px-0 gap-10">
          <div className="lg:w-[50%] space-y-4">
            <div className="bg-white p-2 md:px-5 rounded-xl">
              <h1 className="text-[#3D6887] mb-5 text-[24px] font-semibold">
                Your Information
              </h1>
              <div className="space-y-3">
                <div>
                  <label htmlFor="name">
                    <p className="font-semibold text-[16px] mb-2">Name</p>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-md p-2 w-full border border-[#B6B6B699] outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email">
                    <p className="font-semibold text-[16px] mb-2">Email</p>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-md p-2 w-full border border-[#B6B6B699] outline-none"
                  />
                </div>
              </div>
            </div>
            {/* Payment Method */}
            <div className="bg-white p-2 md:px-5 md:h-[220px] rounded-xl">
              <h1 className="text-[#3D6887] text-[24px] font-semibold">
                Payment Method
              </h1>
              <div className="py-5 space-y-4">
                <div className="flex items-center gap-5 bg-slate-200 rounded-md p-2">
                  <label className="flex items-center gap-5">
                    <h1 className="text-sm font-medium">ShurjoPay</h1>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white lg:w-[50%] p-1 md:p-5 rounded-xl">
            <h1 className="text-[#3D6887] p-2 mb-5 text-[24px] font-semibold">
              Order Summary
            </h1>
            <div className="px-3 space-y-5">
              <div className="flex items-center p-2 shadow-lg rounded-md justify-between">
                <div className="flex items-center gap-2 md:gap-8">
                  <figure className="rounded-xl w-24 md:w-40 h-20 overflow-hidden">
                    <img
                      src={product.image as string}
                      alt="Product"
                      className="object-cover h-full w-full"
                    />
                  </figure>
                  <div className="space-y-3">
                    <h1 className="font-medium">{product.name}</h1>
                    <h1 className="font-medium">{product.brand}</h1>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <h1 className="flex items-center font-medium gap-1">
                    <FaDollarSign /> {product.price}
                  </h1>
                </div>
              </div>
              {/* Quantity Selection */}
              <div className="flex items-center justify-between">
                <h1 className="flex items-center font-medium gap-1">
                  Quantity
                </h1>
                <div className="flex items-center ">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                    className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button
                    type="button"
                    onClick={increaseQuantity}
                    className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <hr />
              {/* Total Price */}
              <div className="flex justify-between px-1 items-center">
                <h1 className="text-2xl font-semibold">Total</h1>
                <h1 className="text-[16px] flex items-center gap-1 font-semibold">
                  <FaDollarSign /> {totalPrice}
                </h1>
              </div>
              {/* Checkout Button */}
              <div className="pb-4">
                <button
                  type="submit"
                  className="flex mt-5 w-full justify-center font-medium bg-black text-white transition-all duration-300 p-2 px-6 hover:bg-[#f7c788] hover:text-black rounded-md items-center cursor-pointer gap-2"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

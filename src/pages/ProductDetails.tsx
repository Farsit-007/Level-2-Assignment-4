import { Link, useParams } from "react-router-dom";
import { useGetSIngleProductQuery } from "../redux/features/publicProduct/featuredProduct.api";

const ProductDetails = () => {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetSIngleProductQuery(productId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="my-5">
      <div className="flex max-w-6xl mx-auto bg-base-100">
        <div className="flex justify-center items-center min-h-[500px] rounded-xl bg-[#f7c788] md:w-[45%]">
          <figure className="w-[80%] mx-auto h-[80%] overflow-hidden">
            <img
              src={product?.image as string}
              alt={product?.name}
              className="object-cover rounded-lg h-full w-full"
            />
          </figure>
        </div>

        <div className=" p-1 pt-2 pr-4 md:pr-5 pl-4 md:pl-10 md:w-[55%]">
          <div className="flex flex-col space-y-3">
            <div>
              <h2 className="text-2xl md:text-[40px] font-bold playfair pb-3">
                {product?.name}
              </h2>
              <h3 className="rounded-lg w-[30%] font-medium px-2 bg-[#f7c788] p-1 text-center text-sm ">
                {product?.category}
              </h3>
              <div className="py-2 border-b text-[16px]">
                <p>
                  <span className="font-bold">Description:</span>{" "}
                  {product?.description}
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-lg font-medium py-2">Product Details:</h1>

              <div className="overflow-x-auto ">
                <table className="w-full mx-auto my-6">
                  <tbody>
                    <tr className="hover:bg-gray-50 transition duration-300">
                      <td className="py-4 font-semibold">Category</td>
                      <td className="py-4 px-6  font-semibold text-center">
                        :
                      </td>
                      <td className="py-4 px-6  ">{product?.category}</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition duration-300">
                      <td className="py-4  font-semibold">Brand</td>
                      <td className="py-4 px-6  font-semibold text-center">
                        :
                      </td>
                      <td className="py-4 px-6  ">{product?.brand}</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition duration-300">
                      <td className="py-4 font-semibold ">Price</td>
                      <td className="py-4 px-6  font-semibold text-center">
                        :
                      </td>
                      <td className="py-4 px-6  ">${product?.price}</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition duration-300">
                      <td className="py-4 font-semibold ">Stock</td>
                      <td className="py-4 px-6  font-semibold text-center">
                        :
                      </td>
                      <td className="py-4 px-6  ">
                        {product?.inStock ? "In Stock" : "Out of Stock"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className=" mt-10 ">
            <Link
              className="flex justify-center font-medium  bg-black text-white transition-all duration-300 p-2 hover:bg-[#f7c788] hover:text-black rounded-md items-center cursor-pointer gap-2"
              to={`/checkout/${product?._id}`}
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

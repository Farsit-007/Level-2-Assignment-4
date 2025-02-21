import { Link } from "react-router-dom";
import { useGetFeaturedProductQuery } from "../../redux/features/publicProduct/featuredProduct.api";
import Card from "./Card";

const FeaturesProduct = () => {
  const { data, isLoading, error } = useGetFeaturedProductQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
      </div>
    );
  }
  if (error) {
    return <div>Error..</div>;
  }

  return (
    <div className="my-20">
      <div className="flex items-center px-4 justify-between">
        <div className="">
          <h2 className="font-semibold  text-xl md:text-4xl">
            New Featured Bikes
          </h2>
          <hr className="h-1 bg-[#f7c788] rounded-b-full border-none" />
        </div>
        <div>
          <Link
            to={"/all-product"}
            className="flex font-medium bg-black text-white transition-all duration-300 p-1 px-4 hover:bg-[#f7c788] hover:text-black rounded-md items-center cursor-pointer gap-2"
          >
            View All
          </Link>
        </div>
      </div>
      <div className="grid my-10  md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data?.map((p) => (
          <Card key={p._id} p={p} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesProduct;

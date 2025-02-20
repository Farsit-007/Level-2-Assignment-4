import { Link } from "react-router-dom";
import { useGetFeaturedProductQuery } from "../../redux/features/publicProduct/featuredProduct.api";
import Card from "./Card";

const FeaturesProduct = () => {
  const { data, isLoading, error } = useGetFeaturedProductQuery(undefined);

  return (
    <div className="my-20">
      <div className="flex items-center px-4 justify-between">
        <div>
          <h2 className="font-semibold text-xl md:text-3xl">
            New Featured Bikes
          </h2>
        </div>
        <div>
          <Link to={"/all-product"}>View All</Link>
        </div>
      </div>
      <div className="grid my-5  md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data?.map((p) => (
          <Card key={p._id} p={p} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesProduct;

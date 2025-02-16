import { useGetFeaturedProductQuery } from "../../redux/features/publicProduct/featuredProduct.api";
import Card from "./Card";

const FeaturesProduct = () => {
    const {data,isLoading,error} = useGetFeaturedProductQuery(undefined)
    
    return (
        <div className="grid my-20  md:grid-cols-2 lg:grid-cols-4 gap-5">
           {data?.map((p) => (
                <Card  key={p._id} p={p}/>
            ))}
        </div>
    );
};

export default FeaturesProduct;
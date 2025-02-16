import { useParams } from "react-router-dom";
import { useGetSIngleProductQuery } from "../redux/features/publicProduct/featuredProduct.api";

const ProductDetails = () => {
    const {productId} = useParams()
    const {data : product,isLoading,error} = useGetSIngleProductQuery(productId)
    return (
        <div>
            <p>{product?.name}</p>
        </div>
    );
};

export default ProductDetails;
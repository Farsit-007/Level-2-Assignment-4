import AdminProductCard from "../../components/ui/AdminProductCard";
import { useGetAdminProductQuery } from "../../redux/features/admin/productManagement/productManagement.api";

const ProductList = () => {
  const { data, isLoading, error } = useGetAdminProductQuery(undefined);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data?.map((p) => (
        <AdminProductCard key={p._id} p={p} />
      ))}
    </div>
  );
};

export default ProductList;

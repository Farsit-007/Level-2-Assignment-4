import { useState, useEffect } from "react";
import Card from "../components/ui/Card";
import FilterButton from "../components/ui/Filter";
import { useGetAllProductQuery } from "../redux/features/publicProduct/featuredProduct.api";

const AllProduct = () => {
  const [filters, setFilters] = useState({
    price: "",
    brand: "",
    category: "",
    inStock: "",
  });
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [params, setParams] = useState<any>({});

  useEffect(() => {
    setParams({
      ...filters,
      searchTerm,
    });
  }, [filters, searchTerm]);

  const { data } = useGetAllProductQuery(params);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center px-5 mt-10">
        <div className="relative w-max rounded-full">
          <input
            className="peer rounded-full border border-sky-600 bg-transparent px-4 py-2 text-sky-600 focus:outline-none"
            type="text"
            placeholder=""
            id="navigate_ui_input_33"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <label
            className="absolute -top-2 left-2 rounded-md bg-sky-600 px-2 text-xs text-sky-100 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-sky-600 peer-focus:text-xs peer-focus:text-sky-100"
            htmlFor="navigate_ui_input_33"
          >
            Search
          </label>
        </div>
        <div>
          <FilterButton filters={filters} setFilters={setFilters} />
        </div>
      </div>

      <div className="grid my-10 md:my-20 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data?.map((p) => (
          <Card key={p._id} p={p} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;

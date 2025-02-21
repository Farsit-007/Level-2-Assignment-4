import { useState, useEffect } from "react";
import Card from "../components/ui/Card";
import FilterButton from "../components/ui/Filter";
import { useGetAllProductQuery } from "../redux/features/publicProduct/featuredProduct.api";
import { TFilters } from "../types/global.type";

const AllProduct = () => {
  const [filters, setFilters] = useState<TFilters>({
    minPrice: "",
    maxPrice: "",
    category: "",
    inStock: "",
  });
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [params, setParams] = useState({});

  useEffect(() => {
    setParams({ searchTerm });
  }, [searchTerm]);

  const { data } = useGetAllProductQuery(params);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const applyFilters = (filters: TFilters) => {
    setParams({ ...filters, searchTerm });
  };

  return (
    <div>
      <div className="flex justify-between items-center px-5 mt-10">
        <div className="relative w-max rounded-full">
          <input
            className="peer rounded-full border border-black bg-transparent px-4 py-2 text-black focus:outline-none"
            type="text"
            id="navigate_ui_input_33"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <label
            className="absolute -top-2 left-2 rounded-md bg-black px-2 text-xs text-white duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-black peer-focus:text-xs peer-focus:text-white"
            htmlFor="navigate_ui_input_33"
          >
            Search
          </label>
        </div>
        <div>
          <FilterButton
            filters={filters}
            setFilters={setFilters}
            applyFilters={applyFilters}
          />
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

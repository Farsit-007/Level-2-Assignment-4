import React, { useState } from "react";
import { TFilters } from "../../types/global.type";
interface FilterButtonProps {
  setFilters: React.Dispatch<React.SetStateAction<TFilters>>;
  filters: TFilters;
  applyFilters: (filters: TFilters) => void;
}
const FilterButton = ({
  setFilters,
  filters,
  applyFilters,
}: FilterButtonProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [tempFilters, setTempFilters] = useState(filters);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTempFilters(
      (prevFilters: {
        minPrice: string;
        maxPrice: string;
        category: string;
        inStock: string;
      }) => ({
        ...prevFilters,
        [name]: value,
      })
    );
  };

  const handleApplyFilters = () => {
    setFilters(tempFilters);
    applyFilters(tempFilters);
    setOpenModal(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpenModal(true)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Filter
      </button>

      {openModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
          onClick={() => setOpenModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-96 rounded-lg bg-white p-6 shadow-lg transform transition-all"
          >
            <h3 className="text-xl font-semibold mb-4">Filter Products</h3>

            <div className="mb-4 flex space-x-2">
              <div>
                <label className="block text-sm mb-2">Min Price</label>
                <input
                  type="number"
                  name="minPrice"
                  value={tempFilters.minPrice}
                  onChange={handleFilterChange}
                  placeholder="e.g., 10"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Max Price</label>
                <input
                  type="number"
                  name="maxPrice"
                  value={tempFilters.maxPrice}
                  onChange={handleFilterChange}
                  placeholder="e.g., 50"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Category</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                name="category"
                value={tempFilters.category}
                onChange={handleFilterChange}
              >
                <option value="">Choose Category</option>
                <option value="Mountain">Mountain</option>
                <option value="Road">Road</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-2">Availability</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                name="inStock"
                value={tempFilters.inStock}
                onChange={handleFilterChange}
              >
                <option value="">Any</option>
                <option value="true">In Stock</option>
                <option value="false">Out of Stock</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setOpenModal(false)}
                className="px-6 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-md"
              >
                Close
              </button>
              <button
                onClick={handleApplyFilters}
                className="px-6 py-2 text-sm bg-indigo-600 text-white hover:bg-indigo-700 rounded-md"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
